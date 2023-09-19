"use strict";
const rgb = function (r, g, b) {
  const hex = (x) => {
    if (x > 255) return "FF";
    if (x < 0) return "00";
    return x.toString(16).padStart(2, "0").toUpperCase();
  };
  return hex(r) + hex(g) + hex(b);
};
