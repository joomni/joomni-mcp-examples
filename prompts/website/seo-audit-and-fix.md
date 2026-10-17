# SEO audit and fix

**Needs:** `pages:read` (+ `pages:write` to fix) · **For:** online stores and websites

## Prompt

```
Audit my website's SEO. For every published page, check the search title (50–60 characters) and the description (120–160 characters), and flag any that are missing, duplicated or vague.
Give me a table of problems, worst first. Then propose fixed titles and descriptions for the pages that need them, written for real people searching in Nepal. Don't change anything until I approve.
```

## What happens

The app reads `list_pages` and `get_page`, then proposes fixes. On approval it calls `set_page_seo` per page.

Products have their own SEO fields: *"…and do the same for my 10 best-selling products"* uses `update_product`.
