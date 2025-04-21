/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(...promises) {
    return Promise.all(promises)
    .then(result => {
        return result.reduce((a,b) => a+b,0)
    })
};

promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

addTwoPromises(promise1, promise2).then(result => console.log(result))

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */