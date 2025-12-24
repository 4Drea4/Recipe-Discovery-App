
//home page categories
export type Category = {
    idCategory:string;
    category: string;
    categoryThumbnail: string;
    categoryDescription:string;
}

//preview for recipe list
export type RecipePreview={
    idMeal:string;
    meal: string;
    mealThumbnail: string;
}

//used for recipe detail page
export type RecipeDetail ={
    idMeal:string;
    meal: string;
    mealThumbnail:string;
    recipeInstructions: string;
//ts safety
    [key:string] : string | null | undefined;
}

