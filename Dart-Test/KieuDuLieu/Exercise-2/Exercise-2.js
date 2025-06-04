let newArray = [1, 2, 3, 4, 5]; // Mảng số
let newArrayObject = [
    { name: 'Dart', version: 2.0 },
    { name: 'Flutter', version: 3.0 },
];

console.log(newArray.map((item) => item));
console.log(newArrayObject.map((item) => item.name + ' - ' + item.version));
