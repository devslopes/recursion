// 1. Factorial of a Number
// Write a recursive function to compute the factorial of a given number n.
// Factorial of n (denoted as n!) is defined as: n! = n * (n-1) * (n-2) * ... * 1
//
// Example Test Cases:
// console.log(factorial(5)); // Output: 120
// console.log(factorial(0)); // Output: 1

function factorial(n) {}

// 2. Sum of an Array
// Write a recursive function to calculate the sum of all numbers in an array.
//
// Example Test Cases:
// console.log(sumArray([1, 2, 3, 4])); // Output: 10
// console.log(sumArray([])); // Output: 0
// console.log(sumArray([5])); // Output: 5

function sumArray(arr) {
  // Your code here
}

// 3. Reverse a String
// Write a recursive function that reverses a given string.
//
// Example Test Cases:
// console.log(reverseString("hello")); // Output: "olleh"
// console.log(reverseString("racecar")); // Output: "racecar"
// console.log(reverseString("abc")); // Output: "cba"

function reverseString(str) {
  // Your code here
}

// 4. Check if a String is a Palindrome
// Write a recursive function to check if a string is a palindrome (reads the same forward and backward).
//
// Example Test Cases:
// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello"));   // Output: false
// console.log(isPalindrome("a"));       // Output: true

function isPalindrome(str) {
  // Your code here
}

// 5. Compute the N-th Fibonacci Number
// Write a recursive function to compute the nth Fibonacci number.
// The Fibonacci sequence is defined as:
// F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)
// Bonus: Memoize this function with a closure so the cache persists between function calls.
//
// Example Test Cases:
// console.log(fibonacci(6)); // Output: 8
// console.log(fibonacci(0)); // Output: 0
// console.log(fibonacci(1)); // Output: 1

function fibonacci(n) {
  // Your code here
}

// 6. Flatten a Nested Array
// Write a recursive function to flatten an array that contains nested arrays into a single-level array.
// Bonus: Add an input number that allows us to control how many nested levels are flattened.
//
// Example Test Cases:
// console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // Output: [1, 2, 3, 4, 5]
// console.log(flattenArray([])); // Output: []

type NestedNumberArray = (number | NestedNumberArray)[];

function flattenArray(
  arr: NestedNumberArray,
  level = Infinity,
  count = 0
): NestedNumberArray {
  const result: NestedNumberArray = [];

  const processArray = (arr: NestedNumberArray) => {
    for (const ele of arr) {
      if (Array.isArray(ele) && count < level) {
        count++;
        processArray(ele);
      } else {
        result.push(ele);
      }
    }
  };

  processArray(arr);

  return result;
}

console.log(flattenArray([1, [2, [3, 4], 5], 6], 2));

// 7. Count the Number of Occurrences of a Value in an Array
// Write a recursive function that counts how many times a given value appears in an array.
//
// Example Test Cases:
// console.log(countOccurrences([1, 2, 3, 4, 2, 2, 5], 2)); // Output: 3
// console.log(countOccurrences([1, 1, 1, 1, 1], 1)); // Output: 5
// console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // Output: 0

function countOccurrences(arr: number[], value: number, count = 0): number {
  if (arr.length === 0) return count;
  if (arr[0] === value) count++;
  return countOccurrences(arr.slice(1), value, count);
}

console.log(countOccurrences([1, 1, 1, 1, 1], 1));

// 8. Find the Maximum Number in an Array
// Write a recursive function that finds and returns the maximum value in an array.
//
// Example Test Cases:
// console.log(findMax([1, 5, 3, 9, 2])); // Output: 9
// console.log(findMax([7, 7, 7, 7])); // Output: 7
// console.log(findMax([-1, -2, -3, -4])); // Output: -1

function findMax(arr: number[], max: number = -Infinity): number {
  if (arr.length === 0) {
    return max;
  }
  if (arr[0] > max) {
    max = arr[0];
  }
  return findMax(arr.slice(1), max);
}

console.log(findMax([1, 5, 3, 9, 2]));
