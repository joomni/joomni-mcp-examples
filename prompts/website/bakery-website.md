# A bakery website in one go

**Needs:** `pages:read`, `pages:write`, `store:read` · **For:** business websites

## Prompt

```
I run a small bakery in Lalitpur called "Mitho Bakery". We bake bread, cakes and Newari sweets, take custom cake orders, and are open 7am–8pm every day.

Build my website:
1. Home: a hero with our name and a line about fresh baking every morning, what we bake, a "custom cake orders" section, opening hours, and a call to action to order.
2. An "Our cakes" page with a gallery section and a short paragraph per type of cake.
3. A contact page with a form that asks for date needed, cake size and message, plus our phone and map.
4. A header with Home, Our cakes and Contact, and a footer with hours and social links.

Read my theme tokens first and keep everything in my brand colours.
Show me the plan before you build, and give me preview links before anything goes live.
```

## What happens

The app reads `joomni://theme/tokens` and `joomni://sections/catalog`, proposes a plan, then uses `create_page`, `add_page_section`, `create_navigation_menu`, `update_site_header` and `update_site_footer`. Publishing changes ask you first. Every change can be undone from the dashboard.

## Tips

- Swap in your own business; the structure works for any local service.
- Upload real photos first (**Website › Media**) and say *"use the photos in my media library"*.
