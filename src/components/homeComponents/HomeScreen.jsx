import React from "react";
import AdBanner from "./AdBanner";
import { useState, useEffect } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { ImSearch } from "react-icons/im";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const url = "https://recipes.devmountain.com";

  const getRecipes = async () => {
    let data = await fetch({ url });
    let res = await data.json();
    console.log(res);
    setRecipes(res);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      <div className="search-container">
        <div className="search-bar">
          <ImSearch className="search-icon" />
          <input type="text" placeholder="Search a Recipe" />
        </div>
      </div>
      <RecipeCard />
    </div>
  );
};

export default HomeScreen;
