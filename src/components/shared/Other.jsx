
import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function ChefWebsite() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero/About Section */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <h1 className="text-4xl md:text-5xl font-bold text-brown-900 mb-6">Who is Chef Pena?</h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-brown-800 mb-4">Traveling Chef, Travis Pena</h2>
              <p className="text-gray-700 mb-4">
                Chef Travis Pena, also known as the Traveling Chef, is gaining recognition for his culinary
                expertise and personalized dining experiences in Las Vegas.
              </p>
              <p className="text-gray-700 mb-4">
                Chef Travis has over 11 years of experience in the culinary industry, having worked as
                both a corporate chef and a personal chef. He studied at The Culinary Academy of Las
                Vegas and previously served as the Executive Chef at Hewlett Packard Global
                Headquarters in Palo Alto, California.
              </p>
              <p className="text-gray-700 mb-4">
                He views cooking as a passion and a form of artistic expression. Chef Travis emphasizes
                the importance of elevating simple ingredients to create elegant dishes, showcasing his
                creativity and skill in the kitchen.
              </p>
              <p className="text-gray-700 mb-6">
                Chef Travis Pena's combination of professional experience, culinary passion, and
                personalized service makes him a notable figure in the Las Vegas dining landscape.
              </p>
              <button className="bg-brown-800 hover:bg-brown-900 text-white font-medium py-3 px-6 rounded-sm transition duration-300">
                Request a Service
              </button>
            </div>
            <div className="md:order-1">
              <div className="bg-white p-2 shadow-lg">
                <img 
                  src="/api/placeholder/600/600" 
                  alt="Chef Travis Pena cooking" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Foods Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Popular Foods</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Food Item 1 */}
            <div className="food-item">
              <img 
                src="/api/placeholder/400/300" 
                alt="Steak dish" 
                className="w-full h-64 object-cover mb-4" 
              />
              <h3 className="text-2xl font-medium mb-2">food Item Name</h3>
              <p className="text-gray-700 mb-4">
                A delightful combination of flavors and textures, crafted to satisfy every craving.
              </p>
              <button className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 font-medium py-2 px-8 transition duration-300">
                Order Now
              </button>
            </div>

            {/* Food Item 2 - Highlighted */}
            <div className="food-item relative">
              <div className="absolute inset-0 border-4 border-red-600 -z-10"></div>
              <div className="p-4 bg-white">
                <img 
                  src="/api/placeholder/400/300" 
                  alt="Fish dish" 
                  className="w-full h-64 object-cover mb-4" 
                />
                <h3 className="text-2xl font-medium mb-2">food Item Name</h3>
                <p className="text-gray-700 mb-4">
                  A delightful combination of flavors and textures, crafted to satisfy every craving.
                </p>
                <button className="border-2 border-red-600 hover:bg-red-600 hover:text-white text-red-600 font-medium py-2 px-8 transition duration-300">
                  Order Now
                </button>
              </div>
            </div>

            {/* Food Item 3 */}
            <div className="food-item">
              <img 
                src="/api/placeholder/400/300" 
                alt="Filet mignon" 
                className="w-full h-64 object-cover mb-4" 
              />
              <h3 className="text-2xl font-medium mb-2">food Item Name</h3>
              <p className="text-gray-700 mb-4">
                A delightful combination of flavors and textures, crafted to satisfy every craving.
              </p>
              <button className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 font-medium py-2 px-8 transition duration-300">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo and Social */}
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-8">
                <div className="w-40 h-40 rounded-full border-2 border-white p-1 flex items-center justify-center relative">
                  <div className="w-full h-full rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs mb-1">TRAVELING</div>
                      <div className="font-script text-xl mb-1">Travis Pena</div>
                      <div className="text-xs">CHEF</div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-red-600 hover:text-red-400 transition duration-300">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-red-600 hover:text-red-400 transition duration-300">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-red-600 hover:text-red-400 transition duration-300">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-red-600 hover:text-red-400 transition duration-300">
                  <Youtube size={24} />
                </a>
              </div>
            </div>

            {/* Information Links */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-2xl font-bold mb-6">Information</h3>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-gray-300 transition duration-300">Services</a></li>
                <li><a href="#" className="hover:text-gray-300 transition duration-300">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300 transition duration-300">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-300 transition duration-300">Contact Us</a></li>
              </ul>
            </div>

            {/* Subscribe Section */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-2xl font-bold mb-6">Subscribe</h3>
              <p className="mb-4">Subscribe our newsletter to stay updated and get special offers.</p>
              <div className="flex w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow bg-gray-800 border-none text-white p-3 focus:outline-none focus:ring-1 focus:ring-red-600"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 Travis Pena. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}