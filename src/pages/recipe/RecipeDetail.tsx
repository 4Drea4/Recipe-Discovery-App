import { useParams , Link} from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import type { RecipeDetailResponse } from "../../types";

export default function RecipeDetailPage(){
    const {recipeId} = useParams();
     
    if (!recipeId){
        return <p> The recipe id is missing</p>

    }
    const url= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(recipeId)}`;


    const {data, error} =useFetch<RecipeDetailResponse>(url);

    if(error) return <p>{error}</p>
    if (!data) return <p> Loading recipe..</p>

    const recipe =data.meals?.[0];
    if (!recipe) {
        return <p> Cant seem to find this recipe</p>
    }
    return (
        <div>
            <p>
                <Link to='/'>Go back to Categories</Link>
            </p>
            <h1> {recipe.strMeal}</h1>
            {recipe.strMealThumb && (
                <img
                src={recipe.strMealThumb}
                />
            )}
            <h3>Instructions</h3>
            <p>{recipe.strInstructions}</p>
            <p>View recipe id: {recipeId} </p>
        </div>
    )
}