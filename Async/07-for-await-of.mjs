import { setInterval } from 'node:timers/promises'

// function interval(delayMs) {
//   return new Promise((resolve, reject) => {
//     setInterval(() => {
//       resolve();
//     }, delayMs);
//   });
// }

for await (const event of setInterval(400)) {
  console.log('400ms')
}

// Exemple fictif :
// for await (const event of btnEl.addEventListener('click')) {
//   console.log('click')
// }
