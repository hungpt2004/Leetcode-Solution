/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
   let count = 0;
   let result;

   return function(...args){
       if(count < 1) {
           result = fn(...args);
           count++;
           return result;
       }
       return undefined
   }
};

/**
* let fn = (a,b,c) => (a + b + c)
* let onceFn = once(fn)
*
* onceFn(1,2,3); // 6
* onceFn(2,3,6); // returns undefined without calling fn
*/
