const fs = require("fs");

const file = fs.readFileSync("./day1.txt").toString();

const arr1 = [];
const arr2 = [];
for (line of file.split("\n")) {
  arr1.push(line.split("  ")[0]);
  arr2.push(line.split("  ")[1]);
}
arr1.sort((a, b) => a - b);
arr2.sort((a, b) => a - b);

let acum = 0;
for (let i = 0; i < arr1.length; i++) {
  acum += Math.abs(arr1[i] - arr2[i]);
}
console.log(acum);
