import React from "react";
import recipes from "@/app/data/recipes.json";
import categories from "@/app/data/categories.json";

function Page({ params }) {
  const { category, recipeTitle } = params;

  // Decode the title
  const decodedTitle = decodeURIComponent(recipeTitle);

  // Find the recipe by title
  const recipe = recipes.find((r) => r.title === decodedTitle);
  if (!recipe) return <p>Recipe not found.</p>;

  const categoryName = categories.find((c) => c.id === recipe.category_id)?.name || "Unknown";

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <p className="text-gray-600 mb-4">Category: {categoryName}</p>
      <p className="text-gray-600 mb-4">{recipe.description}</p>
      <p className="text-gray-600">Cooking Time: {recipe.cooking_time}</p>
      <p className="text-gray-600">Author: {recipe.author}</p>
    </div>
  );
}

export default Page;
