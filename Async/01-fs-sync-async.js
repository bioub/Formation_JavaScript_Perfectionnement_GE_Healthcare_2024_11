const fs = require('fs');

// Sync : lire le fichier .editorconfig
const buffer = fs.readFileSync('.editorconfig');
console.log(buffer.toString('utf-8'));

// ^
// |
// |[readFileSync                  ][log]
// +-------------------------------------->

// Async : lire le fichier .editorconfig
fs.readFile('.editorconfig', (err, buffer) => {
  console.log(buffer.toString('utf-8'));
});

// ^
// |                               [log]
// |[readFile]⟳                    [=> ]
// +-------------------------------------->
