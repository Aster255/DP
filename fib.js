let c = {
  0: 0,
  1: 1,
};

function fib(a) {
  if (c[a] != null) {
    return c[a];
  } else {
    c[a] = fib(a - 1) + fib(a - 2);
    return c[a];
  }
}

console.log(fib(3));
