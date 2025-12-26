import { useParams, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import type {RecipesByCategoryResponse} from '../../types';

export default function CategoryPage(){
    const {categoryName} = useParams();
if (!categoryName){
    return<p className="text">Missing category </p>
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
        <div className="page">
            <p className="text">
                <Link to='/'>Back to categories</Link>
            </p>
            <h1 className="title">{categoryName}</h1>

            <ul className="cardGrid">
            {data.meals.map((meal) => (
                <li className="card" key={meal.idMeal}>
                    <Link className='cardLink' to={`/recipe/${meal.idMeal}`}>
                    <img 
                    className="cardImage"
                    src={meal.strMealThumb}
                    />
                    <div className="cardBody">
                    <h2 className="cardTitle">{meal.strMeal}
                    </h2>
                    <p className="cardText">See Recipe!</p>
                    </div>
                    </Link>

                </li>
            )) }


            </ul>
          
        </div>
    )
}