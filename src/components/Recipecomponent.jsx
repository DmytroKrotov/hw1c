import Recipe from "../models/Recipe"
import Ingredient from "../models/Ingredient"
import Ingredientscomponent from "./Ingredientscomponent"
import Img1 from "../img/1.jpeg"


 function Recipecomponent(){
    let myRecipe=new Recipe("My recipe",Img1,[new Ingredient("Sugar"),new Ingredient("Onion")],"cooking sequence");
    let id=1;
    return <div>
        <h1>My favorite recipe</h1>
        <p>Name: {myRecipe.name}</p>
        <img src={Img1}/>
        <h2>Ingredients :</h2>
        <ul>
            {myRecipe.ingredients.map((i)=><Ingredientscomponent key={++id} name={i.name}/>)}
        </ul>
        <p>{myRecipe.cooking}</p>
    </div>

    
}

export default Recipecomponent