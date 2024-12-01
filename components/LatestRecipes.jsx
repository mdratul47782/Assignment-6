import React from "react";
import Image from "next/image";
import Link from "next/link"; 
import recipes from "../app/data/recipes.json";

function LatestRecipes() {
  
  const latestRecipes = [...recipes]
    .sort((a, b) => new Date(b.published_date) - new Date(a.published_date))
    .slice(0, 4);

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {latestRecipes.map((recipe, index) => (
          <div key={index}>
            <Link
              href={{
                pathname: `/authorDetails/${encodeURIComponent(recipe.title)}`, 
                query: { category: recipe.category_id },
              }}
              className="block"
            >
              <div className="w-full h-[300px] relative mb-4">
                <Image
                  src={`/thumbs/${recipe.thumbnail}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  alt={recipe.title} 
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
              <p className="text-gray-600">{recipe.cooking_time}</p>
              <p className="text-gray-600">By {recipe.author}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LatestRecipes;
