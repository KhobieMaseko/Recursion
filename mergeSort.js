// Merge helper function
function merge(left, right)
{
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length){
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Recursive Merge Sort
function mergeSort(arr)
{
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

// Testing
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13] Unsorted array
console.log(mergeSort([])); // [] Empty array
console.log(mergeSort([1])); // [1] Single element
console.log(mergeSort([1, 2, 3, 8, 24])); // [1, 2, 3, 8, 24] Sorted array
console.log(mergeSort([9, 8, 7, 6, 5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5, 6, 7, 8, 9] Reverse sorted array
