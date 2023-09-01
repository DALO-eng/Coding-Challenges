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
cakes(
  { flour: 500, sugar: 200, eggs: 1 },
  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
);

cakes(
  { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
  { sugar: 500, flour: 2000, milk: 2000 }
);
