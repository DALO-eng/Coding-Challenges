"use strict";
const cakes = function (recipe, available) {
  const ingredientsNames = Object.keys(recipe);
  const availableAmounts = [];
  for (let ingredient of ingredientsNames) {
    let amountAvailable = Math.floor(
      available[ingredient] / recipe[ingredient]
    );
    if (isNaN(amountAvailable)) return 0;
    availableAmounts.push(amountAvailable);
  }
  return Math.min(...availableAmounts);
};
