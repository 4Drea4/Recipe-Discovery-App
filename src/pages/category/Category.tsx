import { useParams, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import type {RecipesByCategoryResponse} from '../../types';

export default function CategoryPage(){
    const {categoryName} = useParams();
if (!categoryName){
    return<p>Missing category </p>
}
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(categoryName)}`;

    const {data, error} =useFetch<RecipesByCategoryResponse>(url);
    if(error) {
        return <p>{error}</p>
    }
    if (!data) {
        return<p> Loading...</p>
    }

    if (!data.meals || data.meals.length===0) {
        return <p>No recipes found</p>
    }

    return (
        <div>
            <h1>{categoryName}</h1>

            <ul>
            {data.meals.map((meal) => (
                <li key={meal.idMeal}>
                    <Link to={`/recipe/${meal.idMeal}`}>{meal.strMeal}</Link>

                </li>
            ))
            }


            </ul>
            <p> Show your recipes for {categoryName}
            </p>
        </div>
    )
}