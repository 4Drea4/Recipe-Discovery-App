
//home page categories
export type Category = {
    idCategory:string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription:string;
}

//preview for recipe list
export type RecipePreview={
    idMeal:string;
    strMeal: string;
    strMealThumb: string;
}

//used for recipe detail page
export type RecipeDetail ={
    idMeal:string;
    strMeal: string;
    strMealThumb:string;
    strInstructions: string;
//ts safety
    [key:string] : string | null | undefined;
}

export type CategoriesResponse = {
    categories: Category[];
}