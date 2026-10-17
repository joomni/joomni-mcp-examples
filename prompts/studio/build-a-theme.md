# Build a marketplace theme

**Needs:** a Studio sandbox connection · **For:** Joomni Studio theme builders

## Prompt

```
Build a new marketplace theme in this sandbox called "Himal" for outdoor and trekking gear shops.
Look: rugged but clean, deep forest green and warm sand, a condensed sans-serif for headings, generous spacing, square corners.
Pages: home (hero, featured collections, best sellers, a story section, newsletter), product, collection, about, contact, FAQ.
Header with a mega menu of collections and a search; footer with 4 columns.

Read the marketplace rules first. Create and activate the theme before building pages, prefix every page handle with "himal-", and run validate_theme at the end and fix everything it reports.
```

## What happens

The built-in `build-theme` prompt runs the same flow: `create_theme` → `activate_theme` → `update_theme_settings` → header, footer and menus → pages and sections → `validate_theme` until it passes. Then `prepare-submission` writes the listing; you submit from Studio.

See [Building themes with Joomni Studio](../../docs/studio.md) for the traps worth avoiding.
