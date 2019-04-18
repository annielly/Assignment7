/*eslint-env browser*/

var recipe = {
    "title": "Guacamole",
    "serves": 4,
    "ingredients": [[3, 'Avocados'], [1, "Lime"], [1, "Teaspoon Salt"], ["1/2", "Cup Onion"], [3, "Tablespoons Cilantro"], [2, "Diced Tomatoes"], [1, "Teaspoon Garlic"], [1, "Pinch of Ground Pepper"]]
};
window.console.log(recipe.title + "\nServes: " + recipe.serves + "\nIngredients:");

for (var i = 0; i < recipe.ingredients.length; i += 1) {
    window.console.log("- " + recipe.ingredients[i].join(" "));
}