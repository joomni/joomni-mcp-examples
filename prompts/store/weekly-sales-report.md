# Weekly sales report

**Needs:** `analytics:read`, `orders:read` · **For:** online stores

## Prompt

```
Give me a weekly report for my Joomni store, comparing the last 7 days with the 7 days before:

1. Revenue, orders and average order value, each with the change in %.
2. My top 5 products by revenue, and any product whose sales dropped sharply.
3. Where visitors came from and how many became orders.
4. Orders still waiting to be fulfilled, oldest first.

Finish with three specific things I should do this week, based on the numbers.
Keep it short and use a table for the numbers.
```

## What happens

The app reads `get_sales_report`, `get_traffic_report` and `get_orders`. Nothing is changed.

## Tips

- Ask for a different period: *"…the last 30 days compared with the 30 before."*
- The built-in `week-in-review` prompt does a shorter version in one click.
