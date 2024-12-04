const fs = require("fs");

const file = fs.readFileSync("./day1-2.txt").toString();

const arr1 = [];
const arr2 = [];
for (line of file.split("\n")) {
  arr1.push(line.split("   ")[0]);
  arr2.push(line.split("   ")[1]);
}

let acum = 0;
for (let id of arr1) {
  for (let id2 of arr2) {
    if (id === id2) {
      acum += Number(id);
    }
  }
}
console.log(acum);
