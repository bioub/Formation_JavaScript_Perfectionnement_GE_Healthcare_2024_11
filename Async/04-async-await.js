const fs = require('fs/promises');

async function copy() {
  try {
    const buffer = await fs.readFile('.editorconfig');
    await fs.writeFile('.editorconfig.copy', buffer);
    console.log('Copy done');
  } catch (err) {
    console.log(err.message);
  }
}

async function main() {
  await copy();

}

main();
