# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the YEP Trainingen website - a statically generated, multilingual (Dutch/English) SvelteKit site. The site features training programs, coaching services, blog posts, team member profiles, and client information. All content is authored in Markdown files and compiled to a static site at build time.

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build static site for production (also writes `build/sitemap.xml` via the svelte-sitemap Vite plugin)
- `npm run preview` - Preview production build locally
- `npm run check` - Run Svelte type checking (needs `src/lib/paraglide`, which a dev or build run generates)
- `npm run lint` - Check code formatting with Prettier
- `npm run format` - Auto-format code with Prettier

There is no ESLint; Prettier and svelte-check are the only checks. CI (`.github/workflows/npm.yml`) runs lint, `check-images.js` and the build.

## Architecture

### Tech Stack

- **Framework**: SvelteKit 3 with Svelte 5 (runes)
- **Build Tool**: Vite 8 (rolldown)
- **Adapter**: adapter-static
- **Content**: Markdown files processed via mdsvex
- **Internationalization**: Paraglide JS 2 for Dutch (nl) and English (en)
- **Images**: @sveltejs/enhanced-img 1.0 (vite-imagetools 12, Sharp)
- **Styling**: vendored Bootstrap 4.6 CSS in `src/lib/styles/vendored-bootstrap.css`

### Configuration

SvelteKit 3 does not read `svelte.config.js` (it errors if the file exists). All Svelte and Kit options (mdsvex preprocessing, rehype rewrite, `onwarn`, adapter, prerender, `paths.origin`) live in the `sveltekit({...})` call in `vite.config.ts`.

### Content Management System

Content is file-based, stored in the `/content` directory and organized by category:

- `/content/blog/*.{nl,en}.md` - Blog posts
- `/content/coaching/*.{nl,en}.md` - Coaching services
- `/content/trainingen/*.{nl,en}.md` - Training programs
- `/content/team/*.{nl,en}.md` - Team member profiles
- `/content/opdrachtgevers/*.json` and `*.png` - Client logos and testimonials

**File naming convention**: `{slug}.{language}.md` (e.g., `aan-de-slag-verwachtingen.nl.md`). Images sit next to the Markdown files.

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

- `/src/routes/+page.svelte` - Homepage
- `/src/routes/blog/+page.svelte` - Blog listing page
- `/src/routes/blog/[blog_title]/+page.ts` - Blog post loader
- `/src/routes/blog/[blog_title]/+page.svelte` - Blog post template
- Same pattern for `/coaching/[coaching_title]` and `/trainingen/[training_title]`

**Detail loaders** look the post up in `import.meta.glob('/content/<category>/*.md')` by slug and locale, and fall back to the 404 content file `_.{locale}._.md`. Dynamic `import()` with a variable root-relative path does not work under Vite 8.

**Listing pages** use `import.meta.glob(..., { eager: true, import: 'metadata' })` so they only ship frontmatter, not the full posts. Always filter listings to exclude fallback files (paths containing `_._`) and items without required metadata such as `date`.

### Internationalization

- **Primary language**: Dutch (nl) at root paths (no prefix); English (en) at `/en/*`
- **Configuration**: `urlPatterns` in `vite.config.ts`, `project.inlang/settings.json` (`baseLocale`, not `sourceLocale`), `src/hooks.server.ts`, `src/hooks.ts`
- **Message files**: `messages/{nl,en}.json`
- **Runtime**: generated in `src/lib/paraglide/` (gitignored); delete it and restart the dev server after changing the Paraglide config
- **API**: `getLocale()`, `setLocale()`, `localizeHref()`

`urlPatterns` are matched in order: specific translated routes (e.g. `/onze-aanpak` to `/en/our-approach`) first, the `/:path(.*)?` wildcard last.

The language switcher needs `data-sveltekit-reload` on its links, otherwise SvelteKit may keep rendering the previous language.

### Image Handling

- **Markdown images** are rewritten from `<img>` to `<enhanced:img>` by a rehype-rewrite plugin in `vite.config.ts`, which also adds the `post-img` class and a `sizes` attribute. `src/routes/+layout.svelte` keeps `img.post-img` inside the text column, caps portrait height at the column width and centers it.
- **Plugin order matters**: enhanced-img's markup transform normally runs before Svelte preprocessing and would never see the tags mdsvex generates. `enhancedImagesAfterPreprocess()` in `vite.config.ts` registers it after `sveltekit()` so it runs after mdsvex.
- **Only images get `query: { enhanced: true }`** in `import.meta.glob`. Modules with a query are skipped by the markup transform, and Vite 8 fails on JSON imported with it.
- **Without `sizes`**, enhanced-img treats the source as a 2x image and serves a half-width 1x file.
- **Resizing sources**: keep images at most 1600px wide (ImageMagick command in README.md).

### Static Site Generation

- **Prerendering**: enabled globally via `prerender = true` in `src/routes/+layout.ts`; crawls from `*` and `/en`
- **Origin**: `paths.origin` is `https://www.yeptrainingen.nl`
- **Output**: static files in `/build`

### File Aliases

- `#lib/*` maps to `src/lib/*` (subpath imports in `package.json`; replaces `$lib`)
- Content is imported with root-relative paths (`/content/...`); there is no `$content` alias

### Suppressed Warnings

`onwarn` in `vite.config.ts` lists Svelte 4 style codes (`css-unused-selector`, `a11y-*`). Svelte 5 uses underscore codes, so the list no longer matches anything.

## Type Definitions

Core types are defined in `src/lib/types.ts`: `BlogMeta`, `BlogModule`, `BlogPost`, `TrainingMeta`, `TrainingModule`, `CoachingMeta`, `CoachingModule`, `TeamMemberMeta`, `TeamMemberModule`, `ImageModule`, `OpdrachtgeverModule`.

## Key Implementation Details

- **New content**: create both `.nl.md` and `.en.md` in the right `/content` subdirectory; globs pick them up automatically.
- **Surrounding documents**: blog posts show 3 posts before and after in date order; coaching and training pages show 5 each way by `volgnummer`. Implemented in the detail `+page.ts` loaders.
- **Vite server**: `server.fs.allow` in `vite.config.ts` lists the content directories.
- **Glob cache**: Vite caches `import.meta.glob` results; restart the dev server after adding or restoring files.

## Build and Deploy

- **Cloudflare Workers Builds** builds every push. `main` deploys to https://www.yeptrainingen.nl with `npx wrangler deploy`. Other branches get a Worker Preview via `npx wrangler preview` at `<branch>-yeptrainingen.tdamsma.workers.dev`; the Cloudflare bot posts the link on the PR. Previews require the `previews` block in `wrangler.jsonc`.
- **Image cache**: encoded images are cached in `node_modules/.cache/imagetools`. Cloudflare's build cache keeps it across builds and branches; GitHub Actions restores it with `actions/cache`. A warm build takes about a minute, a cold one about 10 minutes.
- Cloudflare runs one build at a time per project, so a push shortly after a merge waits in the queue.
