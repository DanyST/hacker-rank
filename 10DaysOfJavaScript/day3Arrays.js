// https://www.hackerrank.com/challenges/js10-arrays/problem

function getSecondLargest(nums) {
    let uniqueNumbers = nums.filter((num, index) => nums.indexOf(num) === index).sort((a, b) => a - b);
    return uniqueNumbers[uniqueNumbers.length -2];
}