// 1️⃣ Factorial of a Number
function factorial(n: number): number {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// Example Test Cases:
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1

// 2️⃣ Sum of an Array
function sumArray(arr: number[]): number {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

// Example Test Cases:
console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([])); // 0
console.log(sumArray([5])); // 5

// 3️⃣ Reverse a String
function reverseString(str: string): string {
  if (str.length <= 1) return str;
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}

// Example Test Cases:
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("racecar")); // "racecar"
console.log(reverseString("abc")); // "cba"

// 4️⃣ Check if a String is a Palindrome
function isPalindrome(str: string): boolean {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

// Example Test Cases:
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("a")); // true

// 5️⃣ Compute the N-th Fibonacci Number (with Memoization)
function fibonacci(n: number, memo: Record<number, number> = {}): number {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

// Example Test Cases:
console.log(fibonacci(6)); // 8
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1

// 6️⃣ Flatten a Nested Array
type NestedArray = (number | NestedArray)[];

function flattenArray(arr: NestedArray, depth = Infinity, level = 0): number[] {
  return arr.reduce<number[]>((acc, val) => {
    if (Array.isArray(val) && level < depth) {
      acc.push(...flattenArray(val, depth, level + 1));
    } else {
      acc.push(val as number);
    }
    return acc;
  }, []);
}

// Example Test Cases:
console.log(flattenArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
console.log(flattenArray([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]
console.log(flattenArray([])); // []

// 7️⃣ Count the Number of Occurrences of a Value in an Array
function countOccurrences(arr: number[], value: number): number {
  if (arr.length === 0) return 0;
  return (arr[0] === value ? 1 : 0) + countOccurrences(arr.slice(1), value);
}

// Example Test Cases:
console.log(countOccurrences([1, 2, 3, 4, 2, 2, 5], 2)); // 3
console.log(countOccurrences([1, 1, 1, 1, 1], 1)); // 5
console.log(countOccurrences([1, 2, 3, 4, 5], 6)); // 0

// 8️⃣ Find the Maximum Number in an Array
function findMax(arr: number[]): number {
  if (arr.length === 1) return arr[0];
  return Math.max(arr[0], findMax(arr.slice(1)));
}

// Example Test Cases:
console.log(findMax([1, 5, 3, 9, 2])); // 9
console.log(findMax([7, 7, 7, 7])); // 7
console.log(findMax([-1, -2, -3, -4])); // -1
