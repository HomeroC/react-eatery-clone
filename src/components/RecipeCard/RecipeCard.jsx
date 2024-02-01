import React from "react";
import "./RecipeCard.css";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };

  return (
    <div className="recipe-card">
      <div className="recipe-img">
        <img src={recipe.image_url} alt=""/>
      </div>
      <h3>${recipe.recipe_name}</h3>
      <button className="see-more" onClick={handleClick}>
        See More
      </button>
    </div>
  );
}

export default RecipeCard;
