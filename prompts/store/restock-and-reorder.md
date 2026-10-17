# Restock and reorder

**Needs:** `products:read`, `orders:read` (+ `inventory:write` to change stock) · **For:** online stores

## Prompt

```
Which of my products are out of stock or running low (5 or fewer)?
For each one, show how many sold in the last 30 days and how many days of stock are left.
Then suggest a reorder quantity for the next 30 days, and list any purchase orders already on the way so I don't order twice.
```

## What happens

The app reads `query_products` (`status: LOW_STOCK` / `OUT_OF_STOCK`), recent orders and `get_purchase_orders`. Nothing is changed.

## Follow-up

```
Set the stock of "Lokta Notebook A5" to 40.
```

With `inventory:write` the app calls `update_inventory`, shows a preview (old → new), and changes it only after you agree. Note that it **sets** the total; it doesn't add to it.
