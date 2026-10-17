# Built-in prompts and resources

Besides tools, the Joomni server offers **prompts** (ready-made tasks your app can start for you) and **resources** (reference material the model can read before it acts). Apps show them differently: Claude lists prompts in the **+** menu of a chat; Claude Code exposes them as `/mcp__joomni__<name>` commands.

Like tools, each one only appears when your key has the scopes it needs.

## Prompts

### Running the store

| Prompt | What it does | Needs |
|---|---|---|
| `daily-briefing` | Yesterday's sales, orders needing attention, stock about to run out | `store:read` |
| `week-in-review` | The past week against the one before, and what changed | `analytics:read` |
| `restock-review` | Low and out-of-stock products by how fast they sell, with a reorder list | `products:read` |
| `order-triage` | Walk through pending orders and decide what to do with each | `orders:read` |
| `churn-check` | Good customers who've gone quiet and are worth contacting (`days`) | `customers:read` |
| `inbox-review` | Contact-form enquiries: who's waiting, who's worth a call, what to reply (`days`) | `leads:read` |
| `appointments-today` | Who's booked, what needs approval, gaps and no-shows (`day`) | `bookings:read` |
| `book-appointment` | Find the service, check real availability, book it (`request`) | `bookings:read`, `bookings:write` |

### Building the website

| Prompt | What it does | Needs |
|---|---|---|
| `build-page` | A new page step by step: outline, sections, SEO, preview before going live (`purpose`, `audience`) | `pages:read`, `pages:write` |
| `set-up-header` | Header and navigation, with a plan agreed before anything site-wide changes (`brief`) | `pages:read`, `pages:write` |
| `set-up-footer` | Footer columns, social links, newsletter and legal links (`brief`) | `pages:read`, `pages:write` |
| `set-up-contact` | A contact form with the right questions for your business, leads landing in your dashboard (`business`, `page`) | `pages:*`, `store:read` |
| `seo-audit` | Every page checked for missing or weak titles, descriptions and structured data | `pages:read` |
| `write-blog-post` | An article drafted from your brand and products, saved as a draft (`topic`, `angle`) | `blogs:read`, `blogs:write` |
| `restyle-theme` | New palette, fonts, shape and spacing without touching structure or content | `pages:read`, `pages:write` |
| `theme-from-reference` | Restyle after a site, a brand or an image you paste | `pages:read`, `pages:write` |
| `liquid-section` | A custom Liquid section: check the data it can read, validate, preview with real data, add it | `pages:read`, `pages:write` |
| `write-section-code` | A custom HTML/CSS/JS section when no section type fits (`description`, `page`) | `pages:read`, `pages:code` |

### Joomni Studio sandboxes

| Prompt | What it does |
|---|---|
| `build-theme` | A complete marketplace theme from a one-line brief, validated until it passes review (`brief`, `mood`) |
| `check-theme` | Run the marketplace review, explain each failure, fix what can be fixed |
| `prepare-submission` | Pass review, write the listing copy, stage the theme for submission |
| `address-review` | Work through reviewers' feedback and get ready to resubmit |
| `vertical-variant` | A copy of the theme adapted to another store type |

## Resources

| URI | What's in it |
|---|---|
| `joomni://store/settings` | Name, contact details, currency, address |
| `joomni://store/summary` | Performance, pending orders, inventory |
| `joomni://leads` | Latest enquiries with status, priority and intent score |
| `joomni://appointments` | Today's bookings |
| `joomni://analytics/traffic` | Last 30 days of traffic with change against the period before |
| `joomni://pages` | Every page on the live theme |
| `joomni://themes` | Every theme on the store and which is live |
| `joomni://sections/catalog` | Every section type that can be added to a page |
| `joomni://theme/tokens` | Your colours, fonts and layout settings. Read before writing any markup |
| `joomni://theme/header`, `joomni://theme/footer` | The site-wide header and footer, their types and presets |
| `joomni://theme/code` | Site-wide CSS and JavaScript |
| `joomni://navigation` | Menus and their items |
| `joomni://media` | Recent media files with public URLs |
| `joomni://redirects` | Redirect rules |
| `joomni://liquid/reference` | Every Liquid drop and filter, denied tags and render limits |
| `joomni://studio/rules`, `joomni://studio/review-checklist`, `joomni://theme/package-format` | What marketplace review enforces (Studio) |
