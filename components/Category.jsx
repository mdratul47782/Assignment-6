import React from 'react';
import Link from 'next/link'; 
import categories from '../app/data/categories.json'; 
import Image from 'next/image';
function Category() {
  return (
    <main className="container mx-auto px-4 py-8 mt-[100px]">
      <h1 className="text-5xl font-bold mb-12">Categories</h1>

      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {/* Map through categories and render each one */}
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/recipes/${category.id}`} // Navigate to recipes page with category ID
            className="text-center"
          >
            <div>
              <div className="overflow-hidden rounded-full mb-4 relative cursor-pointer">
                <Image
                  src={category.image} // Dynamically use the image from the JSON
                  width={150} 
                  height={150}
                  alt={category.name}
                  className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <h2 className="text-xl font-semibold">{category.name}</h2> {/* Dynamically use the name */}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Category;
