#!/usr/bin/env node
/**
 * Call one tool and print the result.
 *
 *   node clients/node/call-tool.mjs get_store_summary
 *   node clients/node/call-tool.mjs query_products '{"status":"LOW_STOCK"}'
 *
 * Writes that need confirmation answer with a preview first. Run the same
 * call again with "confirm": true to make the change.
 */
import { rpc, textOf } from './mcp.mjs';

const [name, json = '{}'] = process.argv.slice(2);
if (!name) {
  console.error('Usage: node clients/node/call-tool.mjs <tool_name> [json-arguments]');
  process.exit(2);
}

let args;
try {
  args = JSON.parse(json);
} catch {
  console.error('The arguments must be JSON, e.g. \'{"limit": 5}\'');
  process.exit(2);
}

const result = await rpc('tools/call', { name, arguments: args });
console.log(textOf(result));
if (result.isError) process.exit(1);
