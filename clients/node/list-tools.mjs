#!/usr/bin/env node
/**
 * Which tools, prompts and resources does my key unlock?
 *
 *   JOOMNI_MCP_KEY=joomni_mcp_... node clients/node/list-tools.mjs
 */
import { initialize, rpc } from './mcp.mjs';

const info = await initialize();
console.log(`Connected to ${info.serverInfo?.name ?? 'Joomni'} ${info.serverInfo?.version ?? ''}\n`);

const { tools = [] } = await rpc('tools/list');
console.log(`Tools (${tools.length})`);
for (const t of tools) {
  const firstLine = (t.description ?? '').split(/(?<=\.)\s/)[0];
  console.log(`  ${t.name.padEnd(30)} ${firstLine}`);
}

for (const [method, key, label] of [['prompts/list', 'prompts', 'Prompts'], ['resources/list', 'resources', 'Resources']]) {
  try {
    const items = (await rpc(method))[key] ?? [];
    console.log(`\n${label} (${items.length})`);
    for (const p of items) console.log(`  ${(p.name ?? p.uri).padEnd(30)} ${p.description ?? p.uri ?? ''}`);
  } catch {
    // Not every key unlocks prompts or resources.
  }
}
