"use strict";

const solution = function (str) {
  if (str.length % 2 !== 0) str = str + "_";
  const pairs = [];
  for (let i = 0; i < str.length; i = i + 2) {
    pairs.push(str[i] + str[i + 1]);
  }
  return pairs;
};
