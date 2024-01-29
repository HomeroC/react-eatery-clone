import React from 'react'
import AdBanner from './AdBanner'
import { useState, useEffect } from 'react'

const HomeScreen = () => {  
  const [recipes, setRecipes] = useState([])
  const url = "https://recipes.devmountain.com";

  const getRecipes = async () => {
    let data = await fetch({ url })
    let res = await data.json()
    console.log(res)
    setRecipes(res)
    }
 
  useEffect(() => { 
    getRecipes()
  }, [])


  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen