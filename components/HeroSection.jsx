'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import recipes from "../app/data/recipes.json";
import categories from "../app/data/categories.json";

function HeroSection() {
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRecipeIndex((prevIndex) => (prevIndex + 1) % recipes.length);
    }, 5000); // Change recipe every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const currentRecipe = recipes[currentRecipeIndex];
  const categoryName = categories.find(
    (category) => category.id === currentRecipe.category_id
  )?.name;

  if (!currentRecipe) {
    return <p>No recipe data available.</p>;
  }

  return (
    <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            src={`/thumbs/${currentRecipe.thumbnail}`}
            alt={currentRecipe.title}
            className="w-full h-[450px] object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{currentRecipe.title}</h1>
          <p className="text-gray-600 mb-4">{currentRecipe.description}</p>
          <Link
            href={{
              pathname: `/authorDetails/${currentRecipe.title}`,
              query: { category: categoryName },
            }}
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
