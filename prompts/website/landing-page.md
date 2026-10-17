# A landing page

**Needs:** `pages:read`, `pages:write` · **For:** online stores and websites

## Prompt

```
Create a landing page called "Dashain Sale" for my store.
Sections: a hero with the headline "Dashain Sale — up to 30% off", a grid of my products tagged "dashain", three reasons to buy from us, an FAQ about delivery and returns, and a final call to action.
Use existing section types, my theme tokens, and set a search title and description.
Keep it as a draft and give me the preview link.
```

## What happens

`create_page`, then `add_page_section` per section, then `set_page_seo`. The page stays unpublished until you say so.

The built-in `build-page` prompt walks through the same steps interactively.
