import React from 'react'
import Image from 'next/image'
function Deliciousness() {
  return (
    <section class="mb-16 bg-orange-100 p-8 rounded-lg overflow-hidden">
    <h2 class="text-3xl font-bold mb-4">Deliciousness to your inbox</h2>
    <p class="text-gray-600 mb-4">Enjoy weekly hand picked recipes and recommendations</p>
    <form class="flex flex-col md:flex-row gap-4">
      <input type="email" placeholder="Email Address" class="flex-grow px-4 py-2 rounded-full" />
      <button type="submit" class="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600">
        Join
      </button>
    </form>
  </section>
  )
}

export default Deliciousness