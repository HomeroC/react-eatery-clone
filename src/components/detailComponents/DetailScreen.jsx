import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./DetailScreen.css";
import DetailImage from "./DetailImage";

const DetailScreen = () => {
  const { id } = useParams();
  // The rest of your component...
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
      </section>
    </div>
  );
};

export default DetailScreen;
