"use strict";

const dirReduc = function (arr) {
  let previousDir = "";
  let currentIndex = 0;
  const opposites = {
    north: "south",
    south: "north",
    east: "west",
    west: "east",
  };
  while (currentIndex < arr.length) {
    if (previousDir === opposites[arr[currentIndex].toLowerCase()]) {
      arr.splice(currentIndex - 1, 2);
      currentIndex = 0;
      previousDir = "";
    } else {
      previousDir = arr[currentIndex].toLowerCase();
      currentIndex++;
    }
  }
  return arr;
};
