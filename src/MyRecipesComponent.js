function MyRecipesComponent({label, image, calories, ingredients}){
    return(
        <div className="recipe">
        <h2>{label}</h2>
        <img src = {image} />
        <p>{calories.toFixed()} calories</p>
        <ul>
            {ingredients.map(ingredient =>
                <li>{ingredient}</li>)}
        </ul>
        </div>
    )
}

export default MyRecipesComponent;