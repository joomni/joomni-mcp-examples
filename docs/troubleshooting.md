# Troubleshooting

| What you see | Why | Fix |
|---|---|---|
| The app says it can't connect, or `401` | The key was revoked, mistyped, or pasted with a space | Create a new key and paste it again |
| `403` | MCP connections need the Business plan (or the free trial) | Upgrade, or check the store's plan in Billing |
| The app doesn't see a tool it should | The key lacks the scope, or the tool doesn't apply to your business type | Edit the key's areas, or create a new key. Tools are listed in [tools.md](tools.md) |
| "Email campaigns" tools missing on an older connection | The `campaigns:read` scope was added later | Reconnect (create a new key) |
| A change "didn't happen" | It needed confirmation and the app didn't confirm | Say "yes, go ahead", or check the app's approval prompt |
| `429` / "rate limited" | Too many calls in a minute | Wait a moment; ask for fewer, larger steps |
| A page looks unstyled live but fine in chat | Custom code used Tailwind classes, which don't exist on the storefront | Ask the app to use inline styles and the theme tokens (`joomni://theme/tokens`) |
| Header lost its menu links | A header **preset** was re-applied | Undo the AI change in the dashboard; send template changes as `settings.template` |
| `405 Only POST is supported` | Your client opened an SSE stream (GET); this server is stateless | Use POST only (any Streamable HTTP client does when told the server is stateless) |
| The app answers from old data | Some apps cache tool results within a chat | Start a new chat |

Still stuck? Open **Settings › MCP Connections › Activity** to see exactly what the app called and what came back.
