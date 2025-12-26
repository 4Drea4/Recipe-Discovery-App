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
        return <p className="text">No recipes found</p>
    }

    return (
        <div>
            <h1 className="title">{categoryName}</h1>

            <ul className="unorderedList">
            {data.meals.map((meal) => (
                <li className="list" key={meal.idMeal}>
                    <Link to={`/recipe/${meal.idMeal}`}>{meal.strMeal}</Link>

                </li>
            ))
            }


            </ul>
            <p className="text"  >{categoryName}
            </p>
        </div>
    )
}