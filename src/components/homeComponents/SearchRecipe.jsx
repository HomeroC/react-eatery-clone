import React, { useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import "./Home.css";
import { ImSearch } from "react-icons/im";

function SearchRecipe({ recipes }) {
  const [search, setSearch] = useState("");

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />;
    });

  return (
    <div>
      <div className="search-container">
        <div className="search-bar">
          <ImSearch className="search-icon" />
          <input type="text" placeholder="Search a Recipe" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>
      <div className="recipe-container">
        {recipeDisplay ? recipeDisplay : <h3>No Recipes Found</h3>}
      </div>
    </div>
  );
}

export default SearchRecipe;
