# Run today's appointments

**Needs:** `bookings:read` (+ `bookings:write` to book or change) · **For:** stores with the Bookings extension

## Prompt

```
Who's booked today and with whom? Flag anything waiting for my approval, gaps longer than an hour I could fill, and yesterday's no-shows I should follow up.
```

## Follow-up

```
Ram wants a haircut with Maya tomorrow afternoon. Find a free slot and book him in.
```

The app checks `get_availability`, then calls `create_appointment` with a preview first. Retrying is safe: a retry doesn't create a second booking.
