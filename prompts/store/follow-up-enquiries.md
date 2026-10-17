# Follow up on enquiries

**Needs:** `leads:read` (+ `leads:write` to update status) · **For:** online stores and websites

## Prompt

```
Show me the contact-form enquiries from the last 7 days that nobody has answered yet, most promising first.
For each: who it is, what they want, and a suggested reply in my brand voice.
```

## What happens

The app reads `get_leads` and `get_lead`. Nothing is sent; replies are drafts.

## Follow-up

```
Mark Sita's enquiry as contacted and tag it "wedding".
```

The app calls `update_lead`.
