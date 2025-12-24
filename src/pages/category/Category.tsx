import { useParams } from "react-router-dom";

export default function CategoryPage(){
    const {categoryName} = useParams();

    return (
        <div>
            <h1>Category</h1>
            <p> Show your recipes for {categoryName}
            </p>
        </div>
    )
}