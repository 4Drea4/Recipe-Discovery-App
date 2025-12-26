import { useFetch } from "../../hooks/useFetch"
import type { CategoriesResponse } from "../../types";
import { Link } from "react-router-dom";

export default function Home() {
   console.log("Home is loading")
    const {data, error} = useFetch<CategoriesResponse>(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    if(error){
    return <p>{error}</p>
    }
    if (!data){
        return <p>It's loading..</p>
    }
    return(
        <div className="page">
            <h1 className="title">Recipe Discovery</h1>
            <ul className="unorderedList">
                 {data.categories.map((category) => (
                <li className="link" key= {category.idCategory}>
                 <Link to={`/category/${category.strCategory}`}>
                 <img
                 className="card"
                 src={category.strCategoryThumb}/>
                 <div className="card">
                    <h2 className="cardTitle">{category.strCategory}</h2>
                    <p className="cardText">{category.strCategoryDescription?.slice(0,110)}</p>
                 </div>
                
                 </Link>
                </li>
        ))}
            </ul>
        </div>
    )
}