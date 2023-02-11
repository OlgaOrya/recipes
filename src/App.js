import { useCallback, useEffect, useState } from 'react';
import './App.css';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const MY_ID = "e9c2136d";
  const MY_KEY = "2c1295b309a6bacb965f506c1b126fd0";

  const [mySearch,setMySearch] = useState('');
  const [myRecipes,setMyRecipes] = useState([]);
  const [wordSubmitted,setWordSubmitted] = useState('avocado');
    
    const getRecipe = useCallback (async () =>{
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecipes(data.hits)
  }, [wordSubmitted])

  useEffect(() =>{
    getRecipe()
  },[getRecipe])


const myRecipeSearch = (e) =>{
  console.log(e.target.value);
  setMySearch(e.target.value)
}

const finalSearch = (e) =>{
  e.preventDeafault();
  setWordSubmitted(mySearch);
}

  return (
  <div className='App'>
    <div className='container'>
      <video autoPlay muted loop>
        <source src ={video} type ="video/mp4" />
      </video>
      <h1>Find a Recipe</h1>
    </div>

    <div className='container'>
    <form onSubmit ={finalSearch}>
      <input className='search' placeholder='Search...' onChange={myRecipeSearch}>
      </input>
    </form>
    </div>

    <div className='container'>
      <button>
        <img src ="https://img.icons8.com/fluency/48/000000/fry.png" width="20px" />
      </button>
    </div>
    
    <div>
    {myRecipes.map(element => (
      <MyRecipesComponent
      label ={element.recipe.label} 
      image ={element.recipe.image} 
      calories = {element.recipe.calories} 
      ingredients = {element.recipe.ingredientLines}/>
      ))}
    </div>
  </div>
  );
}

export default App;
