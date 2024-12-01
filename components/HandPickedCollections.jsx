import React from 'react';
import Image from 'next/image';
import recipes from '../app/data/recipes.json'; 

function HandPickedCollections() {
  
  const handPicked = recipes.slice(0, 2); 

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">Hand-Picked Collections</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {handPicked.map((recipe) => (
          <div
            key={recipe.category_id} // Ensure unique keys
            className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer"
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={recipe.thumbnail.startsWith('/') ? recipe.thumbnail : `/thumbs/${recipe.thumbnail}`}
                alt={recipe.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              />
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0"
            >
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <a href="./recipes.html" className="text-orange-300 hover:underline">
                View Collection
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HandPickedCollections;
