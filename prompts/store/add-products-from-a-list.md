# Add products from a list

**Needs:** `products:read`, `products:write` · **For:** online stores

## Prompt

```
Add these products to my store as drafts. Write a short, warm description for each (2–3 sentences, no hype), and use my brand voice from the store settings.

- Lokta Notebook A5, Rs 1,200, 40 in stock, stationery
- Lokta Notebook A6, Rs 800, 25 in stock, stationery
- Handwoven Dhaka Pouch, Rs 1,500, 12 in stock, accessories

Check first whether any of them already exist, and tell me before creating duplicates.
```

## What happens

The app checks `query_products`, reads your brand voice from `get_store_settings`, then calls `create_product` for each. New products are **drafts**: nothing goes on sale until you publish (ask *"publish them"*, which needs confirmation).

## Good to know

- Products are created **without variants** (sizes, colours). Add variants in the dashboard, or import them with [joomni-csv-product-import](https://github.com/joomni225/joomni-csv-product-import), which supports variants and Shopify exports.
- For more than about 20 products, the CSV importer is faster and gives you a report.
