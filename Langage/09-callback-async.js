setTimeout(() => console.log('A'), 500);
setTimeout(() => console.log('B'), 0);
setTimeout(() => console.log('C'), 1000);
setTimeout(() => console.log('D'), 500);
console.log('E');


// pile d'appels
// ^
// |
// |                      [log]          [log][log]         [log]
// |[st][st][st][st][log]⟳[cbB]⟳         [cbA][cbD]⟳        [cbC]X
// +-----------------------3ms-----------500----------------1000ms--> temps
// Sortie :         E      B

// File d'attente (0ms): cbB
// File d'attente (3ms):
// File d'attente (500ms): cbA - cbD
// File d'attente (501ms): cbD
// File d'attente (502ms):
// File d'attente (1000ms): cbC
// File d'attente (1001ms):

// Event Loop (Browser)
// do {
//   executeJavaScript();
//   paintPage();
// } while (thereIsJavaScriptToExecute)

// https://www.youtube.com/watch?v=cCOL7MC4Pl0
