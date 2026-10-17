"""
A tiny MCP client for the Joomni server: JSON-RPC over HTTP POST, standard
library only (Python 3.9+). The server is stateless and answers with JSON.

    JOOMNI_MCP_KEY=joomni_mcp_... python clients/python/joomni_mcp.py
    JOOMNI_MCP_KEY=joomni_mcp_... python clients/python/joomni_mcp.py get_store_summary
    JOOMNI_MCP_KEY=joomni_mcp_... python clients/python/joomni_mcp.py query_products '{"status": "LOW_STOCK"}'
"""

import itertools
import json
import os
import sys
import urllib.error
import urllib.request

DEFAULT_URL = "https://api.joomni.com/mcp"
PROTOCOL_VERSION = "2025-06-18"
_ids = itertools.count(1)


def rpc(method, params=None):
    key = os.environ.get("JOOMNI_MCP_KEY")
    if not key:
        sys.exit("Set JOOMNI_MCP_KEY to your connection key (Settings › MCP Connections).")
    url = os.environ.get("JOOMNI_MCP_URL", DEFAULT_URL)
    body = json.dumps({"jsonrpc": "2.0", "id": next(_ids), "method": method, "params": params or {}}).encode()
    req = urllib.request.Request(
        url,
        data=body,
        method="POST",
        headers={
            "Authorization": f"Bearer {key}",
            "Content-Type": "application/json",
            "Accept": "application/json, text/event-stream",
            "MCP-Protocol-Version": PROTOCOL_VERSION,
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=60) as res:
            payload = json.load(res)
    except urllib.error.HTTPError as e:
        hints = {401: "The key was rejected.", 403: "MCP needs the Business plan or the free trial.", 429: "Rate limited; try again shortly."}
        sys.exit(hints.get(e.code, f"HTTP {e.code} from {url}"))
    if "error" in payload:
        sys.exit(f"{payload['error'].get('message')} ({payload['error'].get('code')})")
    return payload["result"]


def text_of(result):
    return "\n".join(c.get("text", "") for c in result.get("content", []) if c.get("type") == "text")


def main():
    rpc("initialize", {"protocolVersion": PROTOCOL_VERSION, "capabilities": {}, "clientInfo": {"name": "joomni-mcp-examples", "version": "1.0.0"}})
    if len(sys.argv) == 1:
        tools = rpc("tools/list").get("tools", [])
        print(f"Tools ({len(tools)})")
        for t in tools:
            print(f"  {t['name']:<30} {(t.get('description') or '').split('. ')[0]}")
        return
    name = sys.argv[1]
    args = json.loads(sys.argv[2]) if len(sys.argv) > 2 else {}
    result = rpc("tools/call", {"name": name, "arguments": args})
    print(text_of(result))
    if result.get("isError"):
        sys.exit(1)


if __name__ == "__main__":
    main()
