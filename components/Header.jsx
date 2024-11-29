import React from 'react'
import Logo from "../public/lws-kitchen.png"
function Header() {
  return (
    <header class="container mx-auto px-4 py-4 shadow-lg fixed top-0 bg-white z-50">
    <nav class="flex justify-between items-center">
      <a href="/index.html" class="text-3xl font-bold">
        <img src="/lws-kitchen.png" class="h-10" />
      </a>
      <ul class="hidden md:flex space-x-6">
        <li><a href="./index.html" class="hover:text-orange-500">Home</a></li>
        <li><a href="./category.html" class="hover:text-orange-500">Categories</a></li>
        <li><a href="./recipes.html" class="hover:text-orange-500">Latest Recipes</a></li>
      </ul>
      <div class="flex items-center space-x-4">
        <a href="#" class="hover:text-orange-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </a>
      </div>
    </nav>
  </header>
  )
}

export default Header