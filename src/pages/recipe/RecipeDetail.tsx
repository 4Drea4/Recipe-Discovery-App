import { useParams } from "react-router-dom";

export default function RecipeDetailPage(){
    const {recipeId} = useParams();
     
    return (
        <div>
            <h1> Recipe Details</h1>
            <p>View recipe id: {recipeId} </p>
        </div>
    )
}