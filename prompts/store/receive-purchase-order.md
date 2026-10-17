# Receive a purchase order

**Needs:** `products:read`, `inventory:write` · **For:** online stores

## Prompt

```
PO1003 arrived from the supplier. Check what was on it, then receive it in full.
```

Partial delivery:

```
PO1003 arrived but only 10 of the 20 notebooks came. Receive what arrived and leave the rest open.
```

## What happens

The app reads `get_purchase_orders`, then calls `receive_purchase_order`, which previews the stock change per item and adds the stock only after you confirm. Retrying is safe: the same delivery is never counted twice.
