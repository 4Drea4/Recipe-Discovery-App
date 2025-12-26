import {Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import type { SearchResponse } from "../../types";

export default function SearchPage(){
    const [searchParams] = useSearchParams();
   
    const query = searchParams.get("query");

    const url= query ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}` : null;

    const {data,error} =useFetch<SearchResponse>(url);
    if(!query){
        return (
            <div>
                <h1>Search</h1>
                <p>Type a recipe</p>
            </div>
        )
    }
    if (error) return <p>{error}</p>
    if (!data) return <p>Searching {query}</p>

    if(!data.meals || data.meals.length === 0){

        return(
            <div>
                <h1 className="title">Search</h1>
                <p className="text">{query}: No results found </p>
                <p className="text">
                <Link to ='/'>Back to Categories</Link>
                </p>
            </div>
        )
    }
    return (
        <div>
            <h1 className="title">Search Results</h1>
            <p className="text"> Seraching for {query} </p>

            <ul className="unorderedList">
                {data.meals.map((meal) => (
                    <li className="list" key={meal.idMeal}>
                        <Link to = {`/recipe/${meal.idMeal}`}>{meal.strMeal}</Link>
                    </li>
                )
            )}
            </ul>
        </div>
    )
}