function foo(a, b) {
  return a + b; // Remove the unreachable code branch
}

console.log(foo(0,0)); // Correct output: 0