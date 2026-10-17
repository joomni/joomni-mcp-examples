# Header and menu

**Needs:** `pages:read`, `pages:write` · **For:** online stores and websites

## Prompt

```
Redo my header navigation: Shop (with a dropdown of my collections), New in, Sale, About, Contact.
Keep my current header design and logo; only change the menu.
Show me the plan before changing anything site-wide.
```

## What happens

The app reads `get_site_header` and `list_navigation_menus`, then updates the menu with `update_navigation_menu` (or creates one and `assign_navigation_menu`). Both ask for confirmation.

## Watch out

Asking for a *different header design* can make the app re-apply a header **preset**, which resets the header's settings. If you've customised your header, say *"don't apply a preset"*. The built-in `set-up-header` prompt agrees a plan first.
