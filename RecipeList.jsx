// src/components/RecipeList.jsx
import React from "react";

const recipeList = ({ recipes, onRecipeClick }) => {
  return (
    <div className="recipe-list">
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index} onClick={() => onRecipeClick(recipe)}>
            {recipe.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default recipeList;
