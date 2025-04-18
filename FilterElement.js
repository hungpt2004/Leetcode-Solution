/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

arr = [10,0,20,30];

fn = function greaterThan10(n){return n > 10} // -> boolean value return

var filter = function(arr, fn) {
   let newArray = [];
   arr.forEach((number, index) => {
       if(fn(number,index)){
           newArray.push(number)
       }
   })
   return newArray;
};

console.log(filter(arr,fn))