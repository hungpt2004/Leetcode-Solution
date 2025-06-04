const array = [1, 2, 3, 4, 5]; // Mảng số nguyên

const findNumberInArray = (arr, number) => {
    return arr.indexOf(number);
};

console.log(findNumberInArray(array, 3)); // In ra chỉ số của số 3 trong mảng, kết quả là 2