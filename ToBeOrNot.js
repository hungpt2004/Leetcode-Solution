/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
   return {
      toBe: function (subVal) {
         if (val === subVal) return true;
         throw new Error("Not Equal")
      },
      notToBe: function (subVal) {
         if (val !== subVal) return true; 
         throw new Error("Equal")
      }
   }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */


// ✔️ JavaScript cho phép lồng function thoải mái
// ✔️ Các function bên trong có thể truy cập biến của function cha (closure)
// ✔️ Đây là một trong những đặc trưng quan trọng của JS