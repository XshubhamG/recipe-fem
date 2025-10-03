import "./style.css";

import Img from './assets/images/image-omelette.jpeg';

const recipe = {
	title: "Simple Omelette Recipe",
	description:
		"An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.",
	preparationTime: {
		total: "Approximately 10 minutes",
		preparation: "5 minutes",
		cooking: "5 minutes",
	},
	ingredients: [
		"2-3 large eggs",
		"Salt, to taste",
		"Pepper, to taste",
		"1 tablespoon of butter or oil",
		"Optional fillings: cheese, diced vegetables, cooked meats, herbs",
	],
	instructions: [
		"Beat the eggs: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
		"Heat the pan: Place a non-stick frying pan over medium heat and add butter or oil.",
		"Cook the omelette: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
		"Add fillings (optional): When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
		"Fold and serve: When the omelette is almost set, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
		"Enjoy: Serve hot, with additional salt and pepper if needed.",
	],
	nutrition: {
		calories: "277kcal",
		carbs: "0g",
		protein: "20g",
		fat: "22g",
	},
};

const appElement = document.querySelector<HTMLDivElement>("#app");
if (appElement) {
	appElement.innerHTML = `
<main class="recipe-container">
  <article class="recipe-card">
    <header class="recipe-header">
      <img src="${Img}" alt="Simple omelette on a white plate with herbs and vegetables" class="recipe-image">
      <h1 class="recipe-title">${recipe.title}</h1>
      <p class="recipe-description">
        ${recipe.description}
      </p>
    </header>

    <section class="preparation-time">
      <h2 class="preparation-title">Preparation time</h2>
      <ul class="preparation-list">
        <li><strong>Total:</strong> ${recipe.preparationTime.total}</li>
        <li><strong>Preparation:</strong> ${recipe.preparationTime.preparation}</li>
        <li><strong>Cooking:</strong> ${recipe.preparationTime.cooking}</li>
      </ul>
    </section>

    <section class="ingredients">
      <h2 class="section-title">Ingredients</h2>
      <ul class="ingredients-list">
        ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
      </ul>
    </section>

    <section class="instructions">
      <h2 class="section-title">Instructions</h2>
      <ol class="instructions-list">
        ${recipe.instructions.map((instruction) => `<li>${instruction}</li>`).join("")}
      </ol>
    </section>

    <section class="nutrition">
      <h2 class="section-title">Nutrition</h2>
      <p class="nutrition-description">
        The table below shows nutritional values per serving without the additional fillings.
      </p>
      <table class="nutrition-table">
        <tbody>
          <tr>
            <td>Calories</td>
            <td class="nutrition-value">${recipe.nutrition.calories}</td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td class="nutrition-value">${recipe.nutrition.carbs}</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td class="nutrition-value">${recipe.nutrition.protein}</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td class="nutrition-value">${recipe.nutrition.fat}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </article>
</main>
`;
}
