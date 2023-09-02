"use strict";

const productFib = function (prod) {
  let firstFibNumber = 0;
  let secondFibNumber = 1;
  while (firstFibNumber * secondFibNumber < prod) {
    let aux = firstFibNumber + secondFibNumber;
    firstFibNumber = secondFibNumber;
    secondFibNumber = aux;
  }
  return [
    firstFibNumber,
    secondFibNumber,
    firstFibNumber * secondFibNumber === prod,
  ];
};
