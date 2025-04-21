/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
 
var map = function(arr, fn) {   
   return arr.map(fn)
}

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 