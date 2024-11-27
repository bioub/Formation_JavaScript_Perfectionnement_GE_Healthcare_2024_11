const fs = require('fs');

try {
  const buffer = fs.readFileSync('.editorconfig');
  fs.writeFileSync('.editorconfig.copy', buffer);
  console.log('Copy done');
} catch (err) {
  console.log(err.message);
}

// Callback Hell / Pyramid of doom
fs.readFile('.editorconfig', (err, buffer) => {
  if (err) {
    return console.log(err.message)
  } else {
    fs.writeFile('.editorconfig.copy', buffer, (err) => {
      if (err) {
        console.log(err.message)
      } else {
        console.log('Copy done');
      }
    });
  }
});
