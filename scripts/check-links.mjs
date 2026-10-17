// Every relative link in every Markdown file points at a file that exists.
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

const files = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.')) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.md')) files.push(p);
  }
})('.');

let broken = 0;
for (const file of files) {
  for (const [, target] of readFileSync(file, 'utf8').matchAll(/\]\(([^)\s]+)\)/g)) {
    if (/^(https?:|mailto:|#)/.test(target)) continue;
    const path = join(dirname(file), target.split('#')[0]);
    if (!existsSync(path)) {
      console.error(`${file}: broken link ${target}`);
      broken++;
    }
  }
}
for (const file of readdirSync('configs')) JSON.parse(readFileSync(join('configs', file), 'utf8'));
console.log(broken ? `${broken} broken link(s)` : `${files.length} Markdown files, links OK; configs are valid JSON`);
process.exit(broken ? 1 : 0);
