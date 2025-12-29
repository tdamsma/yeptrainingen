# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the YEP Trainingen website - a statically generated, multilingual (Dutch/English) SvelteKit site. The site features training programs, coaching services, blog posts, team member profiles, and client information. All content is authored in Markdown files and compiled to a static site at build time.

## Development Commands

### Primary Commands

- `npm run dev` - Start development server
- `npm run build` - Build static site for production
- `npm run preview` - Preview production build locally
- `npm run check` - Run Svelte type checking
- `npm run check:watch` - Run type checking in watch mode
- `npm run lint` - Check code formatting with Prettier
- `npm run format` - Auto-format code with Prettier

### Post-build

After building, `npx svelte-sitemap --domain https://www.yeptrainingen.nl` generates the sitemap automatically (runs via postbuild hook).

## Architecture

### Tech Stack

- **Framework**: SvelteKit 2 with Svelte 5
- **Build Tool**: Vite 7
- **Adapter**: adapter-static (for static site generation)
- **Content**: Markdown files processed via mdsvex
- **Internationalization**: Inlang Paraglide for Dutch (nl) and English (en)
- **Image Optimization**: @sveltejs/enhanced-img with Sharp

### Content Management System

Content is file-based, stored in the `/content` directory and organized by category:

- `/content/blog/*.{nl,en}.md` - Blog posts
- `/content/coaching/*.{nl,en}.md` - Coaching services
- `/content/trainingen/*.{nl,en}.md` - Training programs
- `/content/team/*.{nl,en}.md` - Team member profiles
- `/content/opdrachtgevers/*.{nl,en}.md` - Client information

**File naming convention**: `{slug}.{language}.md` (e.g., `aan-de-slag-verwachtingen.nl.md`)

Each markdown file includes frontmatter metadata. Example structure:

```markdown
---
title: 'Post Title'
img: image-filename.jpg
alt: Image description
date: 2020-06-03
intro: Brief introduction
credits: Image credits
tags: [tag1, tag2]
categories: [Category1]
---

Content here...
```

### Routing Structure

SvelteKit file-based routing with dynamic segments:

- `/src/routes/+page.svelte` - Homepage
- `/src/routes/blog/+page.svelte` - Blog listing page
- `/src/routes/blog/[blog_title]/+page.ts` - Dynamic blog post loader
- `/src/routes/blog/[blog_title]/+page.svelte` - Blog post template
- Similar patterns for `/coaching/[coaching_title]` and `/trainingen/[training_title]`

**Dynamic route loading**: Routes use `+page.ts` files that dynamically import markdown content based on the current language tag and slug parameter. If a file doesn't exist, it falls back to a 404 content file (`_.{languageTag}._.md`).

### Internationalization

- **Library**: Paraglide JS 2.0 (framework-agnostic i18n)
- **Primary language**: Dutch (nl) - serves at root paths (no prefix)
- **Secondary language**: English (en) - serves at `/en/*` paths
- **Configuration**: `vite.config.ts` (urlPatterns), `project.inlang/settings.json`, `src/hooks.server.ts`, `src/hooks.ts`
- **Message files**: `messages/{nl,en}.json`
- **Runtime**: Generated at `src/lib/paraglide/` by Paraglide compiler
- **API**: Use `getLocale()` to get current locale, `setLocale()` to change it
- **Routing**: URL patterns defined in `vite.config.ts`, delocalized by `reroute()` in `hooks.ts`

Path translations are configured in `vite.config.ts` urlPatterns. Example:

- `/onze-aanpak` (nl) → `/our-approach` (en)

### Content Fetching Pattern

The `fetchContent()` utility in `src/lib/utils/index.ts` loads all markdown files for a given category and language using Vite's `import.meta.glob()`. This returns an array of objects with:

- `meta`: Frontmatter metadata
- `path`: File slug (filename without language suffix and extension)

### Image Handling

- **Markdown images**: Automatically converted from `<img>` to `<enhanced:img>` via rehype-rewrite plugin in `svelte.config.js`
- **CSS class**: All post images get `post-img` class for styling
- **Optimization**: Handled by `@sveltejs/enhanced-img` with Sharp processor
- **Image resizing**: Use ImageMagick command in README.md to resize images to max 1600px width before committing

### Static Site Generation

- **Prerendering**: Enabled globally via `prerender = true` in `src/routes/+layout.ts`
- **Prerender config**: Crawls all routes starting from `*` and `/en` (configured in `svelte.config.js`)
- **Origin**: Set to `https://www.yeptrainingen.nl` for absolute URL generation
- **Output**: Static files in `/build` directory

### File Aliases

- `$content` → `/content` directory (defined in `svelte.config.js`)
- `$lib` → `/src/lib` (SvelteKit default)

### Suppressed Warnings

The following Svelte compiler warnings are intentionally suppressed in `svelte.config.js`:

- `css-unused-selector`
- `vite-plugin-svelte-preprocess-many-dependencies`
- `a11y-*` warnings (redundant roles, missing content, image alt text issues)

## Type Definitions

Core types are defined in `src/lib/types.ts`:

- `BlogPost`, `BlogMeta`, `BlogModule`
- `Training`, `TrainingMeta`, `TrainingModule`
- `Coaching`, `CoachingMeta`, `CoachingModule`
- `TeamMember`, `TeamMemberMeta`, `TeamMemberModule`
- `Opdrachtgever`, `OpdrachtgeverModule`

## Key Implementation Details

### Dynamic Content Loading

When adding new content, create both language versions (`.nl.md` and `.en.md`) in the appropriate `/content` subdirectory. The `fetchContent()` utility and route loaders will automatically discover and load them.

### Surrounding Documents Feature

Blog post pages show "surrounding documents" - 3 posts before and 3 posts after the current post in chronological order. This is implemented in `/src/routes/blog/[blog_title]/+page.ts`.

### Vite Server Configuration

The dev server explicitly allows file system access to content directories to enable dynamic imports from the `/content` folder (configured in `vite.config.ts`).

## Recent Migration Notes (November 2025)

### Svelte 5 + Vite 7 Upgrade - COMPLETED

**Status:** ✅ Successfully upgraded to Svelte 5.43.6 and Vite 7.2.2

**Branch:** `claude2` (6 commits ahead of `origin/claude2`)

**Major Changes:**

- Upgraded from Svelte 4 → 5 (runes mode)
- Upgraded from Vite 5 → 7
- Removed Bootstrap and Sass as dependencies
- Vendored Bootstrap 4.6.2 CSS to `src/lib/styles/vendored-bootstrap.css`
- All components working with Svelte 5 syntax

### Critical Bugs Fixed

#### 1. Blog Listing Errors (TypeError: Cannot read properties of undefined)

**Problem:** Blog and homepage pages crashed when trying to sort blog posts by date because:

- Fallback 404 files (`_.nl._.md`, `_.en._.md`) don't have `date` metadata
- These files were included in blog listings via `import.meta.glob()`

**Solution (commit 3027251):**

```javascript
// In src/routes/+page.svelte and src/routes/blog/+page.svelte
let blogs = $derived(
	(() => {
		const blogModules = blogModulesMap[languageTag()];
		return Object.entries(blogModules)
			.filter(([path]) => !path.includes('_._')) // Filter out fallback 404 files
			.map(([path, module]) => ({
				/* ... */
			}))
			.filter((blog) => blog.meta?.date) // Filter out any posts without a date
			.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
	})()
);
```

**Key Pattern:** Always filter blog/content listings to exclude:

1. Fallback files (containing `_._`)
2. Any items without required metadata fields

#### 2. Missing Images After Git Restore

**Problem:** After restoring content from git history, Vite's `import.meta.glob()` cache didn't pick up newly added image files, causing:

```
TypeError: can't access property "default", imageModules["/content/blog/..."] is undefined
```

**Solution:** Restart the dev server to force Vite to re-scan the file system:

```bash
# Kill the dev server and restart
npm run dev
```

**Important:** Vite caches `import.meta.glob()` results. After adding/restoring files from git history, always restart the dev server.

### Paraglide 2.0 Migration - COMPLETED (November 2025)

**Status:** ✅ Successfully migrated from Paraglide 1.x → 2.0

**Major Changes:**

- Removed `@inlang/paraglide-sveltekit` dependency (139 packages removed)
- Added `@inlang/paraglide-js` 2.5.0 (framework-agnostic)
- Deleted `src/lib/i18n.ts` (no longer needed)
- Removed `<ParaglideJS>` wrapper component from `+layout.svelte`
- Created `src/hooks.server.ts` for i18n middleware
- Created `src/hooks.ts` with `reroute()` function for URL delocalization
- Updated `vite.config.ts` with `urlPatterns` configuration
- Migrated API: `languageTag()` → `getLocale()`, `availableLanguageTags` → `locales`
- Updated `project.inlang/settings.json`: `languageTags` → `locales`, `sourceLanguageTag` → `sourceLocale`

#### Critical Configuration: urlPatterns

In Paraglide 2.0, URL routing is configured via `urlPatterns` in `vite.config.ts`:

```javascript
paraglideVitePlugin({
	project: './project.inlang',
	outdir: './src/lib/paraglide',
	strategy: ['url', 'cookie', 'baseLocale'],
	urlPatterns: [
		// Specific translated routes MUST come first
		{
			pattern: '/onze-aanpak',
			localized: [
				['en', '/en/our-approach'],
				['nl', '/onze-aanpak']
			]
		},
		// General wildcard pattern MUST come last
		{
			pattern: '/:path(.*)?',
			localized: [
				['en', '/en/:path(.*)?'],
				['nl', '/:path(.*)?'] // No prefix for Dutch (base locale)
			]
		}
	]
});
```

**Pattern Matching Rules:**

1. Patterns are evaluated in order (first match wins)
2. More specific patterns must come before general patterns
3. Wildcard `/:path(.*)?` must be last
4. Base locale (nl) has no prefix, other locales have `/en/` prefix

#### New Hooks Architecture

**src/hooks.server.ts** - Server-side i18n middleware:

```javascript
import { paraglideMiddleware } from '$lib/paraglide/server';

export const handle: Handle = ({ event, resolve }) =>
  paraglideMiddleware(event.request, ({ request, locale }) => {
    event.request = request;
    return resolve(event, {
      transformPageChunk: ({ html }) => html.replace('%lang%', locale)
    });
  });
```

**src/hooks.ts** - URL delocalization for routing:

```javascript
import { deLocalizeUrl } from '$lib/paraglide/runtime';

export const reroute: Reroute = (request) => {
  return deLocalizeUrl(request.url).pathname;
};
```

#### API Migration Pattern

All component and route files were updated:

- Import: `import { languageTag } from '$lib/paraglide/runtime.js'` → `import { getLocale } from '$lib/paraglide/runtime.js'`
- Usage: `languageTag()` → `getLocale()`
- Config: `availableLanguageTags` → `locales`

**Language Switcher** (simplified):

```javascript
// Old (v1.x): Used i18n.route() and i18n.resolveRoute()
// New (v2.0): Uses localizeHref() with data-sveltekit-reload
<a data-sveltekit-reload href={localizeHref($page.url.pathname, { locale: newLanguage })}>
	Switch Language
</a>
```

**IMPORTANT:** The `data-sveltekit-reload` attribute is required for language switches. Without it, SvelteKit may continue rendering in the previous language.

#### Regenerating Paraglide Files

After changing `vite.config.ts` configuration, you must regenerate the runtime:

```bash
# Delete generated files
rm -rf src/lib/paraglide

# Restart dev server (automatically regenerates)
npm run dev
```

The Paraglide compiler runs during Vite startup and generates files in `src/lib/paraglide/`:

- `runtime.js` - Core locale management
- `server.js` - Server-side middleware
- `messages.js` - Message function exports
- `messages/` - Individual message modules

### Content Restoration from Git History

Content was temporarily removed in commit `909734a` to speed up development iteration. To restore content:

```bash
# Example: Restore a blog post and its images
git show 909734a^:content/blog/post-name.nl.md > content/blog/post-name.nl.md
git show 909734a^:content/blog/post-name.en.md > content/blog/post-name.en.md
git show 909734a^:content/blog/post-image.jpg > content/blog/post-image.jpg

# Then restart dev server
npm run dev
```

**Currently Restored Content:**

- 3 blog posts (hoe-coachend-leiderschap, over-grenzen, activerende-online-teamspellen)
- 1 training program (talent-ontwikkelprogramma)
- All fallback 404 handlers

### Known Issues & Warnings (Non-Critical)

**Deprecated Plugin API:**

```
[vite-plugin-svelte] The following plugins use the deprecated 'plugin.api.sveltePreprocess' field:
@inlang/paraglide-sveltekit/vite/register-preprocessor
```

- **Impact:** None currently
- **Action:** Wait for @inlang/paraglide-sveltekit maintainers to update

**Unused CSS Selectors (38+ instances):**

- Leftover styles from Bootstrap migration
- **Impact:** None functional, slightly larger CSS bundle
- **Action:** Can be cleaned up in a future optimization pass

**Accessibility Warnings:**

- Missing aria-labels on card overlay links
- Redundant "image" in alt text
- **Impact:** May affect screen reader users
- **Action:** Address in accessibility improvement pass

**Svelte 5 Deprecation:**

```
<svelte:component>` is deprecated in runes mode — components are dynamic by default
```

- **Location:** `src/routes/team/+page.svelte:75`
- **Impact:** None currently, will need fix before Svelte 6
- **Action:** Replace `<svelte:component>` with direct component reference

### Development Workflow Notes

**After modifying content files:**

1. Vite should hot-reload automatically for `.md` file changes
2. If images don't appear, restart dev server
3. Browser hard refresh (Cmd+Shift+R / Ctrl+Shift+R) clears cached JS

**Debugging content loading issues:**

```bash
# Check what files Vite is globbing
ls -la content/blog/*.{nl,en}.md
ls -la content/blog/*.{jpg,png}

# Check dev server logs
# Look for: [vite] (ssr) page reload content/blog/...

# Check browser console for:
# - TypeError with imageModules
# - TypeError with .meta.date
```

**Common fixes:**

- Missing images → Restore from git or restart dev server
- Undefined metadata errors → Add filter to exclude posts without required fields
- 404 files in listings → Filter out paths containing `_._`

### Image Size Optimization

**Large Images Alert:**

- `hoe-coachend-leiderschap-3.jpg` is **6.9 MB** (needs optimization)

**To resize images:**

```bash
# From README.md - resize all images in current dir to max 1600px width
find . -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) -exec sh -c '
for img do
    width=$(identify -format "%w" "$img")
    if [ "$width" -gt 1600 ]; then
        mogrify -resize 1600x "$img"
    fi
done
' sh {} +
```

### Production Build Checklist

Before building for production:

1. ✅ Ensure all content files have required metadata (title, date, img, etc.)
2. ✅ Check that all referenced images exist in `/content` directories
3. ✅ Run `npm run check` to verify TypeScript types
4. ⚠️ Optimize large images (>1MB)
5. ✅ Test both Dutch (/) and English (/en) routes
6. Run `npm run build` and check for errors
7. Run `npm run preview` to test the production build locally
