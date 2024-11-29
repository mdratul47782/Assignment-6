import React from 'react';
import recipes from '../app/data/recipes.json'; // Import recipes data

function AuthorDetails({ recipeTitle }) {
  // Decode the recipeTitle (if it's URL-encoded)
  const decodedTitle = decodeURIComponent(recipeTitle);

  // Find the recipe based on the title
  const recipe = recipes.find((r) => r.title === decodedTitle);

  if (!recipe) {
    return (
      <main className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-500 mt-20">Recipe not found.</p>
      </main>
    );
  }

  return (
    <body className="bg-white text-gray-800">
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
          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-4">
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                Share
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
                Save
              </button>
            </div>
          </div>
          <img
            src={`/thumbs/${recipe.thumbnail}`} // Dynamic thumbnail
            alt={recipe.title}
            className="w-full h-auto mb-8 rounded-lg"
          />
          <p className="text-gray-600 mb-8">
            {recipe.description || 'This recipe does not have a detailed description available.'}
          </p>

          <h2 className="text-3xl font-bold mb-4">Before you begin</h2>
          <p className="mb-8">
            Food qualities braise chicken cuts bowl through slices butternut snack. Tender meat juicy dinners. One-pot low heat plenty of time adobo fat raw soften fruit. Sweet renders bone-in marrow richness kitchen, fricassee basted putter.
          </p>

          <h2 className="text-3xl font-bold mb-4">Here are the basics</h2>
          <p className="mb-8">
            Juicy meatballs brisket slammin' baked shoulder. Juicy smoker soy sauce burgers brisket. Polenta mustard hunk greens. Wine technique snack skewers chuck excess. Oil heat slowly. Slices natural delicious, set aside magic tbsp skillet, bay leaves brown centerpiece. Fruit soften edges frond slices onion snack pork steam on wines excess technique cup; Cover smoker soy sauce.
          </p>

          <blockquote className="text-3xl font-bold italic text-center my-12 px-4">
            "One cannot think well, love well, sleep well, if one has not dined well."
          </blockquote>
          <p className="text-center text-gray-600 mb-12">— Virginia Woolf, A Room of One's Own</p>

          <h2 className="text-3xl font-bold mb-4">In the kitchen</h2>
          <p className="mb-8">
            Gastronomy atmosphere set aside. Slice butternut cooking home. Delicious romantic undisturbed raw platter will meld.
          </p>

          <img
            src="/thumbs/thumb-15.jpg" // Static image
            alt="Cooking in kitchen"
            className="w-full h-auto mb-8 rounded-lg max-w-xl mx-auto"
          />

          <p className="mb-8">
            Juicy meatballs brisket slammin' baked shoulder. Juicy smoker soy sauce burgers brisket.
          </p>
        </article>

        <section className="my-12">
          <h2 className="text-3xl font-bold mb-8">You might also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <img src="/thumbs/thumb-10.jpg" alt="Recipe 1" className="w-full h-60 object-cover rounded-lg mb-2" />
              <h3 className="font-semibold">Strawberries and Cream Cake</h3>
            </div>
            <div>
              <img src="/thumbs/thumb-11.jpg" alt="Recipe 2" className="w-full h-60 object-cover rounded-lg mb-2" />
              <h3 className="font-semibold">No-Bake Cheesecake</h3>
            </div>
            <div>
              <img src="/thumbs/thumb-12.jpg" alt="Recipe 3" className="w-full h-60 object-cover rounded-lg mb-2" />
              <h3 className="font-semibold">Peanut Butter Banana Cake</h3>
            </div>
            <div>
              <img src="/thumbs/thumb-13.jpg" alt="Recipe 4" className="w-full h-60 object-cover rounded-lg mb-2" />
              <h3 className="font-semibold">Banana Bread Cake</h3>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
}

export default AuthorDetails;
