# Win back quiet customers

**Needs:** `customers:read`, `orders:read` · **For:** online stores

## Prompt

```
Find customers who ordered at least twice but haven't ordered in the last 60 days.
Show the 10 most valuable, with what they usually bought and when they last ordered.
For each, draft a short, personal message I could send (no discount codes unless I say so).
```

## What happens

The app reads customers and their orders. Nothing is sent: the messages are drafts for you. (Sending email campaigns stays in the dashboard.)

The built-in `churn-check` prompt does the same in one click.
