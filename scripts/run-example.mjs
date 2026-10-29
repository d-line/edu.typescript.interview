import { register } from 'node:module';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const examplePath = process.argv[2];

if (!examplePath) {
  console.error('Usage: npm run example -- <path-to-example.ts>');
  process.exit(1);
}

register('ts-node/esm', import.meta.url);
process.argv.splice(1, 2, resolve(examplePath));

try {
  await import(pathToFileURL(process.argv[1]).href);
} catch (error) {
  console.error(error);
  process.exitCode = 1;
}
