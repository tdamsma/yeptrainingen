# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the YEP Trainingen website - a statically generated, multilingual (Dutch/English) SvelteKit site. The site features training programs, coaching services, blog posts, team member profiles, and client information. All content is authored in Markdown files and compiled to a static site at build time.

## Development Commands

### Primary Commands
- `npm run dev` - Start development server (can also use `bun run dev`)
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

- **Primary language**: Dutch (nl) - serves at root paths (no prefix)
- **Secondary language**: English (en) - serves at `/en/*` paths
- **Configuration**: `src/lib/i18n.ts` and `project.inlang/settings.json`
- **Message files**: `messages/{nl,en}.json`
- **Runtime**: Generated at `src/lib/paraglide/` by Paraglide

Path translations are configured in `i18n.ts` pathnames object. Example:
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
