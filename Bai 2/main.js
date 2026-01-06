// 1. Lấy 1 phần tử cần thiết
// import { myVar } from "./named.js";
// console.log(myVar);

//2. Lấy một số phần tử cần thiết
// import { myVar, myFunction } from "./named.js";
// console.log(myVar);
// myFunction();

// 3. Lấy tất cả
import * as name from "./named.js";
console.log(name.myVar);
name.myFunction();
// console.log(name.df2); //undefined

import df2, { myVar, myFunction } from "./named.js";
console.log(df2);

// 4. Import default
// import df from "./default.js";
// console.log(df);

import total from "./default.js";
console.log(total(1, 2));

// 5. Đổi tên khi import
// 5.1 Import default: đặt tên tùy ý
import tuyY from "./default.js";
console.log(tuyY(2, 3));

// 5.2 Import named: đặt với as
import { myVar as tenMoi } from "./named.js";
console.log(tenMoi);
