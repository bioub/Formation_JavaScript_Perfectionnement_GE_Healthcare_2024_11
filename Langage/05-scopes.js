globalThis.globalVar = 'globalVar';
const fileVar = 'fileVar';

function externe() {
  const closureVar = 'closureVar';
  function interne() {
    const localVar = 'localVar';
    if (true) {
      const blockVar = 'blockVar';
      console.log(blockVar);
      console.log(localVar);
      console.log(closureVar);
      console.log(fileVar);
      console.log(globalVar);
    }
  }
  interne();
}

externe();
