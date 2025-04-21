/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
   return function(x) {
     let result = x;
     for (let i = functions.length - 1; i >= 0; i--) {
       result = functions[i](result);
       console.log(`Step ${i}:`, result);
     }
     return result;
   }
};

// Danh sách hàm
const functions = [x => x + 1, x => x * x, x => 2 * x];

// Gọi compose để nhận hàm mới
const fn = compose(functions);

// Gọi hàm fn với đầu vào là 5
console.log("Final result:", fn(5));
