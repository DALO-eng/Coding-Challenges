"use strict";

const validatePIN = function (pin) {
  const digits = pin.split("");
  const allNumbers = digits.every((digit) => !isNaN(parseInt(digit)));
  const validLength = digits.length === 4 || digits.length === 6;
  return validLength && allNumbers;
};
