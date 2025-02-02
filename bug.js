function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // This branch is unreachable
  } else {
    return a + b;
  }
}

console.log(foo(0,0)); // Unexpected output: 0