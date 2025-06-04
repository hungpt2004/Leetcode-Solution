// Sắp xếp một mảng tăng dần hoặc giảm dần.
const array = [5, 3, 8, 1, 2]; // Mảng số nguyên
console.log('Mảng ban đầu:', array);
console.log('Mảng sắp xếp tăng dần:')
console.log(array.sort((a,b) => a -b));
console.log('Mảng sắp xếp giảm dần:')
console.log(array.sort((a,b) => b - a));
