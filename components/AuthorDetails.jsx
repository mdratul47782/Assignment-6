'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import recipes from '../app/data/recipes.json';

function AuthorDetails({ recipeTitle }) {
  const searchParams = useSearchParams();
  const [similarRecipes, setSimilarRecipes] = useState([]);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (searchParams) {
      // Decode the recipeTitle
      const decodedTitle = decodeURIComponent(recipeTitle);

      // Find the current recipe
      const currentRecipe = recipes.find((r) => r.title === decodedTitle);
      setRecipe(currentRecipe);

      const currentCategoryId = searchParams.get('category');
      if (currentCategoryId) {
        // Filter recipes by category_id, excluding the current recipe
        const filteredRecipes = recipes
          .filter((r) => r.category_id === currentCategoryId && r.title !== decodedTitle)
          .slice(0, 4); // Limit to 4 recipes
        setSimilarRecipes(filteredRecipes);
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
            <Image
              src="/avater.png"
              alt="Author"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-600">{recipe.author}</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">{recipe.cooking_time}</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">{recipe.published_date}</span>
          </div>
          <Image
            src={`/thumbs/${recipe.thumbnail}`}
            alt={recipe.title}
            width={800}
            height={600}
            className="w-full h-auto mb-8 rounded-lg"
            priority
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
                  <Image
                    src={`/thumbs/${similarRecipe.thumbnail}`}
                    alt={similarRecipe.title}
                    width={300}
                    height={200}
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
