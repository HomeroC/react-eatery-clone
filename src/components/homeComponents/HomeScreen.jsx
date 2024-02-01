import React from "react";
import AdBanner from "./AdBanner";
import { useState, useEffect } from "react";
import SearchRecipe from "./SearchRecipe";
import axios from "axios";



const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const url = "https://recipes.devmountain.com";


  const getRecipes = () => {
    axios.get(`${url}/recipes`)
    .then((res) => {
      setRecipes(res.data);
      console.log(res.data);
    })
  }

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      <SearchRecipe recipes={recipes} />
    </div>
  );
};

export default HomeScreen;
