// Iterative Fibonacci
function fib(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i-1] + sequence[i-2]);
  }
  return sequence;
}

// Recursive Fibonacci
function fibRec(n, sequence = [0, 1]) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (sequence.length >= n) return sequence.slice(0, n);

  const nextNum = sequence[sequence.length - 1] + sequence[sequence.length - 2];
  return fibRec(n, [...sequence, nextNum]);
}

// Testing
console.log(fib(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
