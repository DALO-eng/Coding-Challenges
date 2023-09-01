"use strict";

const persistence = function (num) {
  let count = 0;
  while (num.toString().split("").length !== 1) {
    num = num
      .toString()
      .split("")
      .reduce((a, b) => Number(a) * Number(b));
    count++;
  }
  return count;
};
console.log(persistence(999));
