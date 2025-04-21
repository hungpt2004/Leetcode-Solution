/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
   // saveTimeoutId
   const timeoutId = setTimeout(() => fn(...args), t);
   console.log(`Time out Id: ${timeoutId}`);
   return function () {
      console.log(`Đã clear timeout`)
      clearTimeout(timeoutId)
   }
};

fn = (x) => x * 5;
args = [2]; 
t = 20;

cancellable(fn,args,t)

/**
*  const result = [];
*
*  const fn = (x) => x * 5;
*  const args = [2], t = 20, cancelTimeMs = 50;
*
*  const start = performance.now();
*
*  const log = (...argsArr) => {
*      const diff = Math.floor(performance.now() - start);
*      result.push({"time": diff, "returned": fn(...argsArr)});
*  }
*       
*  const cancel = cancellable(log, args, t);
*
*  const maxT = Math.max(t, cancelTimeMs);
*           
*  setTimeout(cancel, cancelTimeMs);
*
*  setTimeout(() => {
*      console.log(result); // [{"time":20,"returned":10}]
*  }, maxT + 15)
*/