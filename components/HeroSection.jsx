import React from "react";
import Link from "next/link";
import recipes from "../app/data/recipes.json";
import categories from "../app/data/categories.json";

function HeroSection() {
  const bestRecipe = recipes.reduce((best, current) => {
    if (
      current.rating &&
      current.rating.average_rating > (best?.rating?.average_rating || 0)
    ) {
      return current;
    }
    return best;
  }, null);

  if (!bestRecipe) {
    return <p>No recipe data available.</p>;
  }

  const categoryName = categories.find(
    (category) => category.id === bestRecipe.category_id
  )?.name;

  return (
    <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src={`/thumbs/${bestRecipe.thumbnail}`}
            alt={bestRecipe.title}
            className="w-full h-[450px] object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{bestRecipe.title}</h1>
          <p className="text-gray-600 mb-4">{bestRecipe.description}</p>
          <Link
            href={`/DetailsPage/${categoryName}/${encodeURIComponent(
              bestRecipe.title
            )}`}
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
