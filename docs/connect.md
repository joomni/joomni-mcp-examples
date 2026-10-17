# Connect your AI app

Joomni speaks [MCP](https://modelcontextprotocol.io), the open standard AI apps use to reach outside tools. You connect once; after that you just chat.

| | |
|---|---|
| **Server URL** | `https://api.joomni.com/mcp` (also shown in **Settings › MCP Connections**) |
| **Transport** | Streamable HTTP, stateless, plain JSON responses |
| **Auth** | `Authorization: Bearer joomni_mcp_…` (a connection key), or OAuth sign-in where your app supports it |
| **Plan** | Business and above, and every store during its free trial |

## 1. Create a connection key

1. In the Joomni dashboard open **Settings › MCP Connections** and click **Create key**.
2. Name it after the app, e.g. *Claude Desktop*. Use one key per app so you can cut one off without the others.
3. Choose what it may **read**. Every area is ticked by default; untick what it shouldn't see.
4. Optionally tick **Also let it make changes** (products, orders, pages…). Without it the key can look but not touch.
5. Optionally tick **Let it put code on your website** (`pages:code`). Only if you want it to write custom HTML/CSS/JS sections; see [safety](safety.md).
6. Copy the key. It's shown once.

## 2. Add it to your app

### Claude (claude.ai, desktop and mobile)

**Settings › Connectors › Add custom connector.** Paste the server URL, then paste your key when asked for a token. Turn the connector on in a chat from the tools menu.

### ChatGPT

**Settings › Connectors › Developer mode.** Add the URL as an MCP server and paste your key as the bearer token.

### Claude Code

```bash
claude mcp add --transport http joomni https://api.joomni.com/mcp \
  --header "Authorization: Bearer joomni_mcp_your_key_here"
```

### Cursor

Copy [`configs/cursor-mcp.json`](../configs/cursor-mcp.json) to `.cursor/mcp.json` (project) or `~/.cursor/mcp.json` (everywhere) and set `JOOMNI_MCP_KEY` in your environment.

### VS Code (Copilot agent mode)

Copy [`configs/vscode-mcp.json`](../configs/vscode-mcp.json) to `.vscode/mcp.json`. VS Code asks for the key the first time and stores it securely.

### Claude Desktop through a local bridge

If your Claude Desktop build doesn't offer custom connectors, run the server through [`mcp-remote`](https://www.npmjs.com/package/mcp-remote): merge [`configs/claude_desktop_config.json`](../configs/claude_desktop_config.json) into your `claude_desktop_config.json` and put your key in `JOOMNI_AUTH`.

### Any other MCP client

Add an HTTP MCP server with the URL above and send the key as a bearer token. To see the raw protocol, run the scripts in [`clients/`](../clients).

## 3. Check it works

Ask: *"Give me a summary of my store."* The app calls `get_store_summary` and answers from your live data. Then try a few of the [ready-made prompts](../prompts).

## Joomni Studio (theme builders)

Studio sandboxes use the same URL. In Claude and ChatGPT you can sign in instead of pasting a key: add the connector, sign in with your Joomni account, choose the sandbox under **Studio sandboxes** and allow it to edit pages. See [studio.md](studio.md).

## Revoking access

**Settings › MCP Connections › Revoke.** The app loses access at once. The **Activity** tab lists every request each key made.
