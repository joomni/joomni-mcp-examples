# Joomni MCP examples

Run your [Joomni](https://joomni.com) store from **Claude, ChatGPT, Claude Code, Cursor** or any [MCP](https://modelcontextprotocol.io) app. Ask about sales and stock, update orders, build website pages and themes, all by chatting, using the AI subscription you already have.

This repo is everything you need to connect, plus ready-made prompts, a tool reference and tiny clients that show the protocol.

```text
You:     Which products are about to run out, and what's already on order?
Claude:  ⚙ query_products · ⚙ get_purchase_orders
         3 products are low. Lokta Notebook A5 has 4 left and sells about 2 a day;
         PO1003 for 40 more is still open with the supplier…
```

## Connect in two minutes

1. In the Joomni dashboard open **Settings › MCP Connections › Create key**. Choose what it may read; tick **Also let it make changes** if you want it to.
2. Add the server to your app:

| App | How |
|---|---|
| **Claude** | Settings › Connectors › Add custom connector › paste `https://api.joomni.com/mcp`, then your key |
| **ChatGPT** | Settings › Connectors › Developer mode › add the URL as an MCP server, key as bearer token |
| **Claude Code** | `claude mcp add --transport http joomni https://api.joomni.com/mcp --header "Authorization: Bearer joomni_mcp_…"` |
| **Cursor** | [`configs/cursor-mcp.json`](configs/cursor-mcp.json) → `.cursor/mcp.json` |
| **VS Code** | [`configs/vscode-mcp.json`](configs/vscode-mcp.json) → `.vscode/mcp.json` |
| **Anything else** | HTTP MCP server, same URL, `Authorization: Bearer <key>` |

3. Ask: *"Give me a summary of my store."*

Full steps: [docs/connect.md](docs/connect.md). MCP connections are on the Business plan and above, and on every store during its free trial.

## What's here

| | |
|---|---|
| [**prompts/**](prompts) | Copy-paste prompts: weekly report, restock, order triage, receiving stock, enquiries, a whole bakery website, SEO fixes, a marketplace theme… |
| [docs/tools.md](docs/tools.md) | All 120 tools by area, with the scope each needs and which ones ask before changing anything |
| [docs/prompts-and-resources.md](docs/prompts-and-resources.md) | The built-in prompts (`daily-briefing`, `build-page`, `seo-audit`…) and resources (`joomni://theme/tokens`…) |
| [docs/safety.md](docs/safety.md) | What an AI can and can't do: read-only by default, preview-then-confirm, undo, activity log, what stays in the dashboard |
| [docs/studio.md](docs/studio.md) | Building marketplace themes in a Joomni Studio sandbox |
| [docs/troubleshooting.md](docs/troubleshooting.md) | 401, 403, missing tools, unstyled sections… |
| [clients/](clients) | ~60-line MCP clients in Node and Python, no dependencies, to list your tools and call one |
| [configs/](configs) | Ready config files for Cursor, VS Code and Claude Desktop |

## Safe by design

- **Read-only until you say otherwise.** Each key gets only the areas you tick; code on your website needs its own separate permission.
- **Preview, then confirm.** Order status, stock, settings, page and header changes, publishing: the first call shows exactly what would change; nothing happens until you agree.
- **Undo.** Page and theme changes are saved first and can be put back from the dashboard in one click.
- **No double orders.** Retried calls return the first result.
- **Your data stays data.** A customer can't hide instructions in an enquiry and have the model act on them.
- **Money and customer messaging stay in the dashboard**: recording payments, editing order items, returns, email campaigns.
- **Revoke any key instantly** and see every call it made in **Settings › MCP Connections › Activity**.

## Try the protocol yourself

```bash
export JOOMNI_MCP_KEY=joomni_mcp_your_key_here

node clients/node/list-tools.mjs                                   # what your key unlocks
node clients/node/call-tool.mjs get_store_summary
node clients/node/call-tool.mjs query_products '{"status":"LOW_STOCK"}'

python3 clients/python/joomni_mcp.py                               # same, in Python
```

The server is stateless Streamable HTTP and answers with plain JSON, so each call is a single `POST`. See [`clients/node/mcp.mjs`](clients/node/mcp.mjs).

## Related

- [joomni-api-examples](https://github.com/joomni225/joomni-api-examples): REST API and webhooks, for code that runs without an AI
- [joomni-nextjs-commerce](https://github.com/joomni225/joomni-nextjs-commerce) and [joomni-laravel-commerce](https://github.com/joomni225/joomni-laravel-commerce): headless storefronts
- [Claude & ChatGPT docs](https://joomni.com/documentation/developers/api) and [Building with AI in Studio](https://joomni.com/documentation/studio/ai)

## License

MIT
