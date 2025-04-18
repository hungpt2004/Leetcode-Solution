/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
   let value = init;
   return {
       increment: () => ++value,
       reset: () => {
         value = init;
         return value;
       },
       decrement: () => --value
   }
};

/**
* const counter = createCounter(5)
* counter.increment(); // 6
* counter.reset(); // 5
* counter.decrement(); // 4
*/

// Giải thích 
/*
 * Khi return ++value => giá trị tăng rồi mới trả về 
 * Khi return value++ => giá trị trả về là giá trị cũ, sau hàm này mới tăng
*/