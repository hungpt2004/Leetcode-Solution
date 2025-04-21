/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
   return new Promise(resolve => setTimeout(resolve, millis))
}

/** 
* let t = Date.now()
* sleep(100).then(() => console.log(Date.now() - t)) // 100
*/

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });