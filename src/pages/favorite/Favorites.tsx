import { Link } from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext"; 
import { useFetch } from "../../hooks/useFetch";
import type { RecipeDetailResponse } from "../../types";
import type { FavoriteId } from "../../types";

function FavoriteRecipe({recipeId}: {recipeId: FavoriteId}){
    const {removeFavorite} = useFavorites();

const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`;

const {data, error} = useFetch<RecipeDetailResponse>(url);

if(error) return <li> Error loading {recipeId} from favorites</li>
if(!data) return <li>Loading {recipeId} from favorites</li>

const recipe = data.meals?.[0];
if(!recipe) return <li>I cant find this recipde {recipeId}</li>

return(
    <li className="list">
        <Link to={`/recipe/${recipeId}`}>{recipe.strMeal}</Link>
        <button className="button" onClick={()=> removeFavorite(recipeId)}>Remove</button>
  
    </li>

)
}
export default function FavoritesPage(){
    const {favoriteIds} = useFavorites();
    return ( 
        <div>
            <p className="text">
                <Link to ='/'>Back to Categories</Link>
            </p>

            <h1 className="title">Favorites</h1>
            {favoriteIds.length === 0 ? (
                <p className="text">No favorites yet</p>
            ): (
                <ul className="unorderedList">
                    {favoriteIds.map((id) => (
                        <FavoriteRecipe key={id} recipeId={id}/>
                    )
                )}
                </ul>
            )
            }
           
        </div>
    )
}