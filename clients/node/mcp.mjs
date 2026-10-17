/**
 * A tiny MCP client for the Joomni server: JSON-RPC over HTTP POST, no
 * dependencies (Node 18+ fetch). The server is stateless and answers with
 * plain JSON, so one request is one round trip.
 *
 * For a full client, use the official SDK (@modelcontextprotocol/sdk); this
 * file is here so you can see exactly what goes over the wire.
 */

export const DEFAULT_URL = 'https://api.joomni.com/mcp';
const PROTOCOL_VERSION = '2025-06-18';

let nextId = 1;

export async function rpc(method, params = {}, { url = process.env.JOOMNI_MCP_URL || DEFAULT_URL, key = process.env.JOOMNI_MCP_KEY } = {}) {
  if (!key) throw new Error('Set JOOMNI_MCP_KEY to your connection key (Settings › MCP Connections).');
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      // Streamable HTTP clients must accept both; Joomni answers with JSON.
      Accept: 'application/json, text/event-stream',
      'MCP-Protocol-Version': PROTOCOL_VERSION,
    },
    body: JSON.stringify({ jsonrpc: '2.0', id: nextId++, method, params }),
  });

  if (res.status === 401) throw new Error('The key was rejected: revoked, mistyped, or for another server.');
  if (res.status === 403) throw new Error('Forbidden: MCP connections need the Business plan or the free trial.');
  if (res.status === 429) throw new Error(`Rate limited. Try again in ${res.headers.get('retry-after') ?? 'a few'} seconds.`);

  const body = await res.json().catch(() => null);
  if (!body) throw new Error(`Unexpected ${res.status} response from ${url}`);
  if (body.error) throw new Error(`${body.error.message} (${body.error.code})`);
  return body.result;
}

/** The handshake every MCP client starts with. */
export function initialize() {
  return rpc('initialize', {
    protocolVersion: PROTOCOL_VERSION,
    capabilities: {},
    clientInfo: { name: 'joomni-mcp-examples', version: '1.0.0' },
  });
}

/** Tool results are a list of content blocks; Joomni returns one text block. */
export function textOf(result) {
  return (result?.content ?? []).filter((c) => c.type === 'text').map((c) => c.text).join('\n');
}
