const fs = require('fs/promises');
const path = require('path');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');


async function cleanDist() {
  await fs.rm(distPath, {force: true, recursive: true})
  await fs.mkdir(distPath);
}

async function buildJs() {
  // const bufferHorloge = await fs.readFile(horlogeJsPath);
  // const bufferIndex = await fs.readFile(indexJsPath);
  const buffers = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  await fs.appendFile(appJsDistPath, buffers[0]);
  await fs.appendFile(appJsDistPath, buffers[1]);
}

async function buildHtml() {
  let contentStr = await fs.readFile(indexHtmlPath, { encoding: 'utf-8' });

  contentStr = contentStr.replace('<script src="./js/horloge.js"></script>', '<script src="./app.js"></script>')
                          .replace('<script src="./js/index.js"></script>', '');


  await fs.writeFile(indexHtmlDistPath, contentStr);
}

// fs.readFile
// fs.writeFile
// fs.rm('', {force: true, recursive: true})
// fs.mkdir
// fs.appendFile
async function build() {
  await cleanDist();
  await buildJs();
  await buildHtml();
}

build();
