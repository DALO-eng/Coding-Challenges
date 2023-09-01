"use strict";

const binaryArrayToNumber = function (arr) {
  const binary = arr.join("");
  return parseInt(binary, 2);
};
