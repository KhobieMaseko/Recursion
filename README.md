# Recursion Project - Fibonacci & Merge Sort Algorithms

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

This project implements two classic recursive algorithms as part of The Odin Project curriculum:

1. Fibonacci sequence generator (both iterative and recursive versions)
2. Recursive merge sort algorithm

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

## Features

### Fibonacci Sequence
- `fib(n)` - Iterative implementation
- `fibRec(n)` - Recursive implementation
- Handles edge cases (n = 0, 1, negative numbers)

### Merge Sort
- `mergeSort(arr)` - Recursive implementation
- `merge(left, right)` - Helper function for merging sorted arrays
- Works with arrays of any length
- Preserves duplicate values

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:KhobieMaseko/Recursion.git
   ```

## Usage

Fibonacci Sequence
```bash
// From the command line:
node fibonacci.js

// Example usage in code:
console.log(fibs(8));    // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
```

Merge Sort
```bash
// From the command line:
node mergeSort.js

// Example usage in code:
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13] Unsorted array
console.log(mergeSort([])); // [] Empty array
console.log(mergeSort([1])); // [1] Single element
console.log(mergeSort([1, 2, 3, 8, 24])); // [1, 2, 3, 8, 24] Sorted array
console.log(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5, 6, 7, 8, 9] Reverse sorted array
```

## Testing

The project includes comprehensive test cases covering:

      Base cases

      Edge cases

      Large inputs

      Already sorted arrays

      Arrays with duplicates

To run all tests:

```bash
node fibonacci.js
node mergeSort.js
```



