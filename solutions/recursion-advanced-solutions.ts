function threeSum(arr: number[]): number[][] {
  arr.sort((a, b) => a - b); // Sorting helps with avoiding duplicates and efficient traversal
  const result: number[][] = [];

  function findTriplets(start: number, current: number[]) {
    if (current.length === 3) {
      if (current[0] + current[1] + current[2] === 0) {
        result.push([...current]);
      }
      return;
    }

    for (let i = start; i < arr.length; i++) {
      if (i > start && arr[i] === arr[i - 1]) continue; // Skip duplicates
      findTriplets(i + 1, [...current, arr[i]]);
    }
  }

  findTriplets(0, []);
  return result;
}

// Example Test Cases:
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 1, 1])); // []
console.log(threeSum([0, 0, 0])); // [[0, 0, 0]]

function rockPaperScissors(n: number): string[][] {
  const choices = ["rock", "paper", "scissors"];
  const result: string[][] = [];

  function generateRounds(roundsLeft: number, current: string[]) {
    if (roundsLeft === 0) {
      result.push([...current]);
      return;
    }

    for (const choice of choices) {
      generateRounds(roundsLeft - 1, [...current, choice]);
    }
  }

  generateRounds(n, []);
  return result;
}

// Example Test Cases:
console.log(rockPaperScissors(2));
/*
Expected Output:
[
  ["rock", "rock"], ["rock", "paper"], ["rock", "scissors"],
  ["paper", "rock"], ["paper", "paper"], ["paper", "scissors"],
  ["scissors", "rock"], ["scissors", "paper"], ["scissors", "scissors"]
]
*/

console.log(rockPaperScissors(1)); // [["rock"], ["paper"], ["scissors"]]
