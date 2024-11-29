import React from 'react'

function Footer() {
  return (
    <footer class="bg-gray-100 py-8">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8">
        <div>
          <a href="/index.html" class="text-3xl font-bold">
            <img src="/lws-kitchen.png" class="h-10" />
          </a>
          <p class="text-gray-600 mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
        <div>
          <h4 class="font-semibold mb-4">LWS Kitchen</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-600 hover:text-orange-500">About us</a></li>
            <li><a href="#" class="text-gray-600 hover:text-orange-500">Careers</a></li>
            <li><a href="#" class="text-gray-600 hover:text-orange-500">Contact us</a></li>
            <li><a href="#" class="text-gray-600 hover:text-orange-500">Feedback</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Legal</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-600 hover:text-orange-500">Terms</a></li>
            <li><a href="#" class="text-gray-600 hover:text-orange-500">Conditions</a></li>
            <li><a href="#" class="text-gray-600 hover:text-orange-500">Cookies</a></li>
            <li><a href="#" class="text-gray-600 hover:text-orange-500">Copyright</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Follow</h4>
          <ul class="space-y-2">
            <li><a href="#" class="text-gray-600 hover:text-orange-500">Facebook</a></li>
            <li><a href="#" class="text-gray-600 hover:text-orange-500">Twitter</a></li>
            <li><a href="#" class="text-gray-600 hover:text-orange-500">Instagram</a></li>
            <li><a href="#" class="text-gray-600 hover:text-orange-500">Youtube</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer