# Morning order triage

**Needs:** `orders:read` (+ `orders:write` to update orders) · **For:** online stores

## Prompt

```
Go through my pending and processing orders, oldest first.
Group them into: ready to dispatch, cash-on-delivery orders that still need a confirmation call, and anything unusual (very large, repeat cancellations, missing phone number).
For each group give the order numbers, customer and total. Don't change anything yet.
```

## What happens

The app reads `get_orders` and, for odd ones, `get_order_timeline`. Nothing is changed.

## Follow-up

```
Mark #1042 and #1043 as dispatched.
```

The app calls `update_order_status` once per order and shows what will change before doing it.
