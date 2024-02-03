import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./DetailScreen.css";
import DetailImage from "./DetailImage";

const DetailScreen = () => {
  const { id } = useParams();
  
  const [recipe, setRecipe] = useState({});
  const url = "https://recipes.devmountain.com";
  console.log(recipe);

  useEffect(() => {
    axios.get(`${url}/recipes/${id}`)
      .then((res) => {
      setRecipe(res.data);
    });
  }, []);

  return (
    <div>
      <section>
        <DetailImage image={recipe.image_url} title={recipe.recipe_name} />
        <div className="details-container">
          <div className="ingredients-container">
            <h2>Recipe</h2>
            <p>Prep Time: {recipe.prep_time}</p>
            <p>Cook Time: {recipe.cook_time}</p>
            <p>Serves: {recipe.serves}</p>
            <br />
            <h2>Ingredients</h2>
            {recipe.ingredients &&
              recipe.ingredients.map((ing, index) => {
                return (
                  <h4>
                    {ing.quantity} {ing.ingredient}
                  </h4>
                );
              })}
          </div>
          <div className="instructions">
            <h2>Instructions</h2>
            <p>
              {recipe.instructions && JSON.parse(recipe.instructions)}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailScreen;
