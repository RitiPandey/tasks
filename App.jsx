// src/App.jsx
import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";
import "./App.css";

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = [
    {
      name: "Spaghetti Carbonara",
      ingredients: [
        "Spaghetti",
        "Pancetta",
        "Eggs",
        "Parmesan cheese",
        "Black pepper",
      ],
      steps: [
        "Boil pasta until al dente.",
        "Cook pancetta in a pan until crispy.",
        "Mix eggs and Parmesan cheese in a bowl.",
        "Combine pasta, pancetta, and egg mixture.",
        "Season with black pepper and serve.",
      ],
    },
    {
      name: "Chicken Curry",
      ingredients: [
        "Chicken breasts",
        "Curry powder",
        "Coconut milk",
        "Onion",
        "Garlic",
        "Ginger",
      ],
      steps: [
        "Sauté onions, garlic, and ginger in a pan.",
        "Add chicken and cook until browned.",
        "Stir in curry powder and coconut milk.",
        "Simmer until chicken is cooked through.",
        "Serve with rice.",
      ],
    },
    // Add more recipes as needed
  ];

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="App">
      <h1>Recipe Book</h1>
      <div className="recipe-container">
        <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
        {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}
      </div>
    </div>
  );
}

export default App;
