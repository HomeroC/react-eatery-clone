import React from 'react'
import './RecipeCard.css'

function RecipeCard() {
  return (
    <div className="recipe-card">
      <div className="recipe-img">
        <img
          src="https://www.atablefullofjoy.com/wp-content/uploads/2020/02/German-Chocolate-Cake-Recipe-SQUARE.jpg"
          alt=""
        />
          </div>
          <h3>
            German Chocolate Cake
          </h3>
          <button className='see-more'>See More</button>
    </div>
  );
}

export default RecipeCard