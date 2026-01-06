// Cách 1: khai báo biến, hàm, class rồi mới export
// const myVar = 100;

// function myFunction() {
//   console.log("Xin chào đây là hàm");
// }

// export { myVar, myFunction };

// Cách 2: export tại nơi khai báo
export const myVar = 10;
export function myFunction() {
  console.log("Xin chào đây là hàm");
}

// file có 1 export default
let df2 = "Đây là biến default 2 trong named.js";
export default df2;
