// Tạo map
let map = new Map();
map.set("name", "Dart");
map.set("name2", "Flutter");

// Print map
console.log("Duyệt map");
map.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
});

// Tìm kiếm trong map
console.log("Tìm kiếm trong map");
map.forEach((value, key) => {
  if (value.includes("Dart")) {
    console.log(`Key: ${key}, Value: ${value}`);
  }
});

// Kiểm tra phần tử trùng trong mảng
let array = [1, 2, 3, 4, 5, 1, 2]; // Mảng số nguyên
const functionCheckDuplicateElement = (arr) => {
  const duplicate = new Set(); // Luu thabng trung lap
  const unique = new Set(); // Luu thang khong trung lap
  arr.forEach((item) => {
    if (unique.has(item)) {
      duplicate.add(item);
      console.log(`Phần tử trùng: ${item}`);
    } else {
      unique.add(item);
    }
  });
  return Array.from(duplicate).toString();
};

console.log(
  "Kiểm tra phần tử trùng trong mảng:",
  functionCheckDuplicateElement(array)
);
 