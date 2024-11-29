import React from 'react';
import recipes from '../app/data/recipes.json';
import categories from '../app/data/categories.json'; // Import categories data

function Recipes({ categoryId }) {
  // Filter recipes based on the selected categoryId
  const filteredRecipes = recipes.filter((recipe) => recipe.category_id === categoryId);

  // Find the category name using the categoryId
  const category = categories.find((cat) => cat.id === categoryId);

  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            {category ? category.name : 'Unknown Category'}{' '}
            <span className="text-gray-500 text-2xl font-normal">
              ({recipes.length} Recipes)
            </span>
          </h1>
          <p className="text-gray-600">
            Explore a variety of delicious recipes in this category.
          </p>
        </div>
      </div>

      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.title}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={`/thumbs/${recipe.thumbnail}`} // Dynamically use the thumbnail
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-semibold text-lg mb-2">{recipe.title}</h2>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No recipes found in this category.</p>
      )}
    </main>
  );
}

export default Recipes;
