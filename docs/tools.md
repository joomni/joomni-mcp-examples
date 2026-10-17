# Tool reference

Every tool the Joomni MCP server offers, grouped by the scope that unlocks it. This list was taken from the server's tool catalogue on 2026-10-17.

**What your assistant actually sees is smaller.** A connection only lists the tools that match:

1. the scopes you granted the key,
2. your business type (an online store has no client projects; a website has no stock), and
3. your plan.

Ask your assistant *"Which Joomni tools can you use?"*, or run [`clients/node/list-tools.mjs`](../clients/node/list-tools.mjs), to see your own list.

✋ = asks for confirmation first: the first call returns a preview, and only a second call with `confirm: true` makes the change. Your AI app shows you the preview before you agree.

Scopes ending in `:read` only look. Everything else changes your store and needs **"Also let it make changes"** when you create the key.

## Store

| Tool | Scope | What it does |
|---|---|---|
| `get_store_settings` | `store:read` | Get current store settings, including name, email, currency and address, plus `brandVoice`: the owner's tone, brand story, visual style and rules from Settings › AI &… |
| `get_store_summary` | `store:read` | Get a quick snapshot of store performance, pending orders, and inventory summary. |
| `update_store_settings` ✋ | `store:write` | Change the store's own settings: its name, contact details, address, regional settings, logo and search-engine metadata. |

## Products, stock & collections

| Tool | Scope | What it does |
|---|---|---|
| `get_purchase_orders` | `products:read` | Purchase orders: stock ordered from suppliers. |
| `get_stock_locations` | `products:read` | Where stock physically is: the store's stock locations (a warehouse, a second shop) and, per tracked product or variant, the total, the main location and each other… |
| `list_collections` | `products:read` | List the store's collections with their ids, handles and how many products each holds. |
| `query_products` | `products:read` | Search products by name, category, or stock status (LOW_STOCK, OUT_OF_STOCK). |
| `create_collection` | `products:write` | Create a collection — a group of products shown together on the storefront. |
| `create_product` | `products:write` | Add a product to the catalogue. |
| `set_product_status` ✋ | `products:write` | Put a product on sale, take it off sale, or archive it. |
| `update_collection` | `products:write` | Change a collection. |
| `update_product` | `products:write` | Change an existing product. |

## Inventory changes

| Tool | Scope | What it does |
|---|---|---|
| `receive_purchase_order` ✋ | `inventory:write` | Record a supplier delivery: adds the received units to stock at the purchase order's delivery location and logs them as a restock. |
| `transfer_stock` ✋ | `inventory:write` | Move units of a product (or one variant) from one stock location to another. |
| `update_inventory` ✋ | `inventory:write` | Set the stock level of a product, or of one variant of a product, to an absolute number. |

## Orders

| Tool | Scope | What it does |
|---|---|---|
| `get_draft_orders` | `orders:read` | Manual-order drafts (phone, WhatsApp, social media orders the merchant is putting together): customer, items, total and note. |
| `get_order_timeline` | `orders:read` | One order's internal timeline, newest first: status changes, edits (items, address, charges), payments recorded and staff notes, with who did each. |
| `get_orders` | `orders:read` | Fetch recent orders, pending orders, or details of a specific order. |
| `get_pos_summary` | `orders:read` | In-store (POS) sales for a period, as the register's shift report: revenue, sales count, units, discounts, average sale, cash in drawer, refunds, and breakdowns by… |
| `get_returns` | `orders:read` | Customer returns: which order, the items and reason, status (REQUESTED = waiting for the items, RECEIVED, COMPLETED, REJECTED), how it was resolved (refund, store… |
| `create_pos_sale` ✋ | `orders:write` | Record an in-store (POS) sale: the customer paid at the counter and took the goods. |
| `place_order` ✋ | `orders:write` | Create a new order for a customer. |
| `update_order_status` ✋ | `orders:write` | Update one order: its status (PENDING, PLACED, PROCESSING, DISPATCHED, DELIVERED), mark it FULFILLED, CANCELLED, PAID or REFUNDED. |

## Customers

| Tool | Scope | What it does |
|---|---|---|
| `get_customer_details` | `customers:read` | Fetch details for a specific customer or list top customers. |

## Leads

| Tool | Scope | What it does |
|---|---|---|
| `get_lead` | `leads:read` | One contact-form submission in full: the message, every extra form field (custom fields, consent) by label, notes, tags, AI summary and whether it became a customer. |
| `get_lead_stats` | `leads:read` | Contact-form pipeline health: totals by status, leads received in the last 24 h / 7 d / 30 d, conversion rate, how many NEW enquiries have waited over 24 hours, and… |
| `get_leads` | `leads:read` | Contact-form submissions (leads) from the website, newest first, with status, priority, AI intent score and a message preview. |
| `convert_lead_to_customer` ✋ | `leads:write` | Turn a contact-form lead into a customer record (matched by email if one already exists) and mark the lead CONVERTED. |
| `update_lead` | `leads:write` | Move a contact-form lead along the pipeline: set status (NEW → CONTACTED → QUALIFIED, or LOST / SPAM), priority (LOW, MEDIUM, HIGH, URGENT), add a dated note… |

## Email campaigns

| Tool | Scope | What it does |
|---|---|---|
| `get_email_campaigns` | `campaigns:read` | Email marketing campaigns and automations with their results: status, recipients, sent, opens, clicks, open and click rates, bounces and unsubscribes. |

## Analytics

| Tool | Scope | What it does |
|---|---|---|
| `get_peak_hours` | `analytics:read` | When the store is busiest: visitors by day of week and hour, with the busiest hour, busiest day and each day's own peak already worked out. |
| `get_realtime_visitors` | `analytics:read` | Who is on the site right now: visitors active in the last few minutes and the pages they are viewing. |
| `get_sales_forecast` | `analytics:read` | Projected paid revenue and orders for the next 7–90 days (default 30), computed from the store's own daily sales: recent daily average, recent-vs-prior trend, and… |
| `get_sales_report` | `analytics:read` | Sales figures exactly as the dashboard shows them: paid-order revenue, order count and average order value for the period with a per-day series; the 30-day totals… |
| `get_traffic_breakdown` | `analytics:read` | One traffic breakdown from the analytics dashboard — most visited pages, entry/exit pages, channels, sources, campaigns, devices, browsers, operating systems,… |
| `get_traffic_report` | `analytics:read` | Website traffic overview from the analytics dashboard: visitors, sessions, page views, bounce rate, average visit length, conversions and revenue for a date range,… |

## Bookings

| Tool | Scope | What it does |
|---|---|---|
| `get_appointment` | `bookings:read` | One appointment in full: intake answers, internal notes and the event history. |
| `get_appointments` | `bookings:read` | The diary: appointments in a window with customer, service, staff, status and payment. |
| `get_availability` | `bookings:read` | Real bookable slots for a service on a date (or the open days of a month). |
| `get_booking_settings` | `bookings:read` | The store's booking rules: business hours, slot length, lead time, buffers, auto-confirm, cancellation policy, reminders and notifications. |
| `get_booking_staff` | `bookings:read` | List staff who take bookings, with the services each offers and whether they have their own hours. |
| `get_booking_stats` | `bookings:read` | Booking KPIs: today's count and next appointment, next 7 days, bookings awaiting approval, 30-day no-show and cancellation rates, completed revenue, top services and… |
| `get_services` | `bookings:read` | List the bookable services (with categories, duration, price, capacity, staff and intake questions) and the booking timezone. |
| `cancel_appointment` ✋ | `bookings:write` | Cancel an appointment. |
| `create_appointment` ✋ | `bookings:write` | Book an appointment for a customer. |
| `create_service` ✋ | `bookings:write` | Add a bookable service. |
| `update_appointment` ✋ | `bookings:write` | Change an appointment: set status (CONFIRMED to approve a request, CHECKED_IN, COMPLETED, NO_SHOW), move it (startTime or date + time — validated against… |
| `update_booking_settings` ✋ | `bookings:write` | Change the booking rules. |
| `update_service` ✋ | `bookings:write` | Change a service: any field create_service accepts, plus isActive to switch it off without deleting history. |

## Projects

| Tool | Scope | What it does |
|---|---|---|
| `get_project_details` | `projects:read` | Get full details of a project including its client, milestones, tasks, and assets. |
| `get_projects` | `projects:read` | List client projects, optionally filtered by status or a search term. |
| `create_milestone` ✋ | `projects:write` | Add a new milestone (deliverable/payment stage) to a project. |
| `update_milestone_status` ✋ | `projects:write` | Update a milestone's progress status and/or mark it as paid. |
| `update_project_status` ✋ | `projects:write` | Change a project's status, e.g. |

## Clients

| Tool | Scope | What it does |
|---|---|---|
| `get_client_details` | `clients:read` | Get a client's contact details and their project history. |
| `get_clients` | `clients:read` | List clients, optionally filtered by status (ACTIVE, INACTIVE, LEAD) or a search term. |
| `create_client` ✋ | `clients:write` | Create a new client record with their name, email and optional phone and company. |

## Website: pages, themes, menus, media

| Tool | Scope | What it does |
|---|---|---|
| `get_navigation_menu` | `pages:read` | One navigation menu's full item tree, where it is used, and the item shape to use when editing it. |
| `get_page` | `pages:read` | Get one page: its sections in order, whether it is published, and its SEO settings (title, description, keywords, OG image, JSON-LD schemas) with an audit — seo.audit… |
| `get_section_schema` | `pages:read` | With no arguments: every section type available to add to a page. |
| `get_site_footer` | `pages:read` | The site-wide footer: its type and settings, the footer types and Liquid footer presets this store could switch to, and the navigation menus it can be wired to. |
| `get_site_header` | `pages:read` | The site-wide header: its type and settings, the other header types and Liquid header presets this store could switch to, and the navigation menus it can be wired to… |
| `get_theme` | `pages:read` | One theme's full design settings — colors, typography, shape, layout, buttons — plus its header/footer types, its pages and the font list. |
| `get_theme_overlays` | `pages:read` | The theme's Liquid overlays — the cart drawer and the quick-add variant picker that opens when a product with options is added from a listing. |
| `get_theme_tokens` | `pages:read` | The store's own colours, typography and layout settings. |
| `list_liquid_drops` | `pages:read` | The Liquid reference, generated from the runtime: every drop (product, collection, shop, settings, linklists…) with its field names, the Joomni filters on top of the… |
| `list_liquid_presets` | `pages:read` | The ready-made Liquid sections that can be installed by id: product page (product-details), blog posts grid, product carousel, stylist roster (beauty/salon),… |
| `list_media` | `pages:read` | Files in the store's media library — images, videos, PDFs — with their public URLs, sizes and folder. |
| `list_media_folders` | `pages:read` | The folders the media library is organised into. |
| `list_navigation_menus` | `pages:read` | The store's navigation menus (e.g. |
| `list_pages` | `pages:read` | List the pages on this store's active theme, with their URL handles, whether they are published, and how many sections each one has. |
| `list_redirects` | `pages:read` | URL redirects on the store: old path → new destination, with status (301 permanent / 302 temporary) and whether each is active. |
| `list_themes` | `pages:read` | Every theme on this store: which one the storefront serves, how many pages each has, and when it last changed. |
| `list_themes_catalog` | `pages:read` | Joomni's published theme templates for this store's vertical — slug, name, description, pages — to start a new theme from with create_theme. |
| `render_liquid_preview` | `pages:read` | Render a Liquid template against this store's real products, collections and theme settings, with the storefront's engine and limits, and return the HTML, any error… |
| `screenshot_page` | `pages:read` | Joomni Studio only. |
| `validate_liquid` | `pages:read` | Check a Liquid section template before writing it: size, unsupported tags, the {% schema %} block and syntax. |
| `validate_theme` | `pages:read` | Joomni Studio only. |
| `activate_theme` | `pages:write` | Make a theme the one the storefront serves. |
| `add_page_section` | `pages:write` | Add a section to a page. |
| `assign_navigation_menu` ✋ | `pages:write` | Assign a navigation menu to the active theme's site header or footer (or a specific footer column block). |
| `create_navigation_menu` | `pages:write` | Create a navigation menu. |
| `create_page` ✋ | `pages:write` | Create a new page on the store website. |
| `create_redirect` ✋ | `pages:write` | Add a URL redirect: visitors to fromPath are sent to toPath. |
| `create_theme` ✋ | `pages:write` | Create a new theme. |
| `delete_media` ✋ | `pages:write` | Permanently delete media files. |
| `delete_navigation_menu` ✋ | `pages:write` | Delete a non-default navigation menu. |
| `delete_redirect` ✋ | `pages:write` | Remove a redirect. |
| `duplicate_theme` | `pages:write` | Copy a theme — pages, header, footer and settings — into a new inactive theme. |
| `move_media` | `pages:write` | Move media files into a folder ("root" for the top level). |
| `remove_page_section` ✋ | `pages:write` | Delete a section from a page. |
| `reorder_page_sections` | `pages:write` | Reorder the sections on a page. |
| `set_page_seo` | `pages:write` | Set a page's search-engine metadata — the same fields as the dashboard's Page Settings → SEO: meta title, meta description, keywords, social sharing image and JSON-LD… |
| `update_navigation_menu` ✋ | `pages:write` | Replace a navigation menu's item tree and/or rename it. |
| `update_page` ✋ | `pages:write` | Change a page's title, its URL handle, or whether it is published. |
| `update_page_section` | `pages:write` | Change a section's settings, hide/show it, or set the conditions under which it renders. |
| `update_redirect` ✋ | `pages:write` | Change an existing redirect: its destination, status code, source path or active flag. |
| `update_site_footer` ✋ | `pages:write` | Change the site-wide footer. |
| `update_site_header` ✋ | `pages:write` | Change the site-wide header. |
| `update_theme_overlay` ✋ | `pages:write` | Install, adjust or remove one theme overlay. |
| `update_theme_settings` | `pages:write` | Change a theme's design settings — the palette, fonts, sizes, corner radius, spacing and button style every section inherits. |
| `upload_media_from_url` | `pages:write` | Add a file to the media library by fetching a public https URL (image, MP4/WebM video or PDF, up to 15 MB). |

## Blog

| Tool | Scope | What it does |
|---|---|---|
| `get_blog_post` | `blogs:read` | Read one blog post in full, including its body. |
| `list_blog_posts` | `blogs:read` | List the store's blog posts — titles, slugs, status and excerpts. |
| `create_blog_post` | `blogs:write` | Save a new blog post as a draft. |
| `set_blog_post_status` ✋ | `blogs:write` | Publish, unpublish or archive a post. |
| `update_blog_post` | `blogs:write` | Change an existing post. |

## Custom code

| Tool | Scope | What it does |
|---|---|---|
| `get_custom_code_section` | `pages:code` | Read the HTML, CSS and JavaScript of an existing custom-code section, so you can change it rather than rewriting it from scratch. |
| `get_site_code` | `pages:code` | Read the store's site-wide CSS and JavaScript files — the ones under "Site-wide CSS & JS" in the page editor, which load on every page of the live site. |
| `write_custom_code_section` ✋ | `pages:code` | Add or replace a custom-code section: raw HTML, CSS and JavaScript that runs on the live storefront. |
| `write_site_code` ✋ | `pages:code` | Create, replace, enable/disable or delete ONE site-wide CSS or JavaScript file. |

## Joomni Studio (theme builders)

| Tool | Scope | What it does |
|---|---|---|
| `get_builder_profile` | `studio:read` | Joomni Studio only. |
| `get_review_feedback` | `studio:read` | Joomni Studio only. |
| `get_template` | `studio:read` | Joomni Studio only. |
| `list_my_templates` | `studio:read` | Joomni Studio only. |
| `list_sandboxes` | `studio:read` | Joomni Studio only. |
| `create_template` | `studio:write` | Joomni Studio only. |
| `prepare_submission` | `studio:write` | Joomni Studio only. |
| `reseed_sandbox` ✋ | `studio:write` | Joomni Studio only. |
| `update_template_listing` ✋ | `studio:write` | Joomni Studio only. |
