/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
   let cache = new Map();
   let count = 0;
   return function(...args) {
       // create special key
       const cacheKey = args.join(',');
       // if already have key => get result from map
       if(cache.has(cacheKey)){
           count++; // increase count 
           console.log(cache.get(cacheKey))
           return cache.get(cacheKey);
       }
       // if not set a key and value
       const result = fn(...args);
       cache.set(cacheKey, result);
       return result
   }
}


let callCount = 0;
const memoizedFn = memoize(function (a, b) {
	 callCount += 1;
   return a + b;
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
console.log(callCount) // 1 
