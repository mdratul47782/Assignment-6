'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import recipes from '../app/data/recipes.json';

function AuthorDetails({ recipeTitle }) {
  const searchParams = useSearchParams();
  const [categoryId, setCategoryId] = useState(null);
  const [similarRecipes, setSimilarRecipes] = useState([]);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (searchParams) {
      // Fetch the categoryId from the query parameters
      const currentCategoryId = searchParams.get('category');
      setCategoryId(currentCategoryId);

      // Decode the recipeTitle
      const decodedTitle = decodeURIComponent(recipeTitle);

      // Find the current recipe
      const currentRecipe = recipes.find((r) => r.title === decodedTitle);
      setRecipe(currentRecipe);

      if (currentCategoryId) {
        // Filter recipes with the same category_id
        const filteredRecipes = recipes.filter(
          (r) => r.category_id === currentCategoryId && r.title !== decodedTitle
        );
        setSimilarRecipes(filteredRecipes.slice(0, 4));
      }
    }
  }, [recipeTitle, searchParams]);

  if (!recipe) {
    return (
      <main className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-500 mt-20">Recipe not found.</p>
      </main>
    );
  }

  return (
    <div className="bg-white text-gray-800">
      <main className="container mx-auto px-4 py-8">
        <article>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{recipe.title}</h1>
          <div className="flex items-center space-x-4 mb-6">
            <img src="/avater.png" alt="Author" className="w-8 h-8 rounded-full" />
            <span className="text-gray-600">{recipe.author}</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">{recipe.cooking_time}</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">{recipe.published_date}</span>
          </div>
          <img
            src={`/thumbs/${recipe.thumbnail}`}
            alt={recipe.title}
            className="w-full h-auto mb-8 rounded-lg"
          />
          <p className="text-gray-600 mb-8">
            {recipe.description || 'This recipe does not have a detailed description available.'}
          </p>
        </article>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-8">You might also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {similarRecipes.length > 0 ? (
              similarRecipes.map((similarRecipe) => (
                <a
                  key={similarRecipe.title}
                  href={`/authorDetails/${encodeURIComponent(similarRecipe.title)}?category=${similarRecipe.category_id}`}
                  className="block"
                >
                  <img
                    src={`/thumbs/${similarRecipe.thumbnail}`}
                    alt={similarRecipe.title}
                    className="w-full h-60 object-cover rounded-lg mb-2"
                  />
                  <h3 className="font-semibold">{similarRecipe.title}</h3>
                </a>
              ))
            ) : (
              <p className="text-gray-500">No similar recipes available.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default AuthorDetails;
