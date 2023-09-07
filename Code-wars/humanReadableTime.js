"use strict";

const humanReadable = function (seconds) {
  let humanTime = [];
  let equivalentSeconds = 3600;
  for (let i = 0; i < 3; i++) {
    let time = Math.floor(seconds / equivalentSeconds);
    seconds -= time * equivalentSeconds;
    equivalentSeconds /= 60;
    humanTime.push(time < 10 ? "0" + time : time);
  }
  return `${humanTime[0]}:${humanTime[1]}:${humanTime[2]}`;
};

console.log(humanReadable(3600));
