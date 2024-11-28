import { readFile, writeFile } from 'fs/promises';

try {
  const buffer = await readFile('.editorconfig');
  await writeFile('.editorconfig.copy', buffer);
  console.log('Copy done');
} catch (err) {
  console.log(err.message);
}
