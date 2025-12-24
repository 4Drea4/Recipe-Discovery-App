import { useFetch } from "../../hooks/useFetch"
import type { CategoriesResponse } from "../../types";

export default function Home() {
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
        <div>
            <h1>Recipe Discovery</h1>
            <ul>
                 {data.categories.map((category) => (
                <li key= {category.idCategory}>
                    {category.strCategory}
                </li>
          
        ))}

    
            </ul>
        </div>
    )
}