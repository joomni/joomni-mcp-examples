# Building themes with Joomni Studio

[Joomni Studio](https://joomni.com/joomni-studio) designers can build marketplace themes by chatting, in a free sandbox store.

## Connect a sandbox

1. Open **Studio**, pick a sandbox and go to its **Connections** tab.
2. In Claude or ChatGPT add the same server URL (`https://api.joomni.com/mcp`) and **sign in** with your Joomni account; choose the sandbox under **Studio sandboxes** and allow it to edit pages. No key to copy. (Claude Code, Cursor and VS Code take a key from the same tab.)
3. Start with the `build-theme` prompt, or try [prompts/studio/build-a-theme.md](../prompts/studio/build-a-theme.md).

A connection is bound to **one sandbox**. Connect another sandbox separately.

## How a theme comes together

1. `create_theme` (or `duplicate_theme`), then `activate_theme`. Page tools work on the **active** theme, so activate before building.
2. `update_theme_settings`: colours, fonts, radius, spacing. The model should read `joomni://theme/tokens` first.
3. `update_site_header` and `update_site_footer`, plus menus with `create_navigation_menu` and `assign_navigation_menu`.
4. Pages with `create_page`, `add_page_section` and `update_page_section`. The page **type** (HOME, PRODUCT, COLLECTION…) is what makes a page a template.
5. `validate_theme` until it passes, then `check-theme` and `prepare-submission`. Submitting stays a click in Studio.

## Things worth knowing

- **Page handles are unique per sandbox, not per theme.** If `product-default` is taken by another theme in the same sandbox, prefix it (`mytheme-product-default`).
- **Don't re-apply a header preset to a header you've customised.** `update_site_header` with `preset` re-installs the preset and resets the header's settings. To update the Liquid of an existing header, send it as `settings.template` instead.
- **Batch header and footer changes.** Each `update_site_header` / `update_site_footer` response echoes the full template (about 25 KB), so one call with every change is faster and cheaper than many small ones.
- **Custom code isn't allowed in marketplace themes**, so sandboxes don't get `pages:code`. Use Liquid sections (`liquid-section` prompt) and the section catalog.
- **Images:** use your media library (`upload_media_from_url`) or the allowed hosts listed in `joomni://studio/rules`.
- `create_product` makes products without variants, and there's no variant tool yet. Add variants in the dashboard if your demo needs them.
- Sandboxes skip most confirmations, since nothing there is live.
