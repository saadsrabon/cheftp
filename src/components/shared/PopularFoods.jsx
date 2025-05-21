import React from 'react';
import Popular1 from '../../assets/image (1).png'
import Popular2 from '../../assets/image (2).png'
import Popular3 from '../../assets/image (3).png'


const PopularFoods = () => {
    return (
        <section className="py-16 bg-white">
            {/* Popular Foods Section */}
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Popular Foods</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Food Item 1 */}
                    <div className="food-item">
                        <img
                            src={Popular1}
                            alt="Steak dish"
                            className="w-full h-104 object-cover mb-4"
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
                    <div className="food-item relative ">
                        <div className="absolute inset-0 border-4 border-red-600 -z-10"></div>
                        <div className="p-4 bg-[#C51212]">
                            <img
                                src={Popular2}
                                alt="Fish dish"
                                className="w-full h-104 object-cover mb-4"
                            />
                            <h3 className="text-2xl font-medium mb-2">food Item Name</h3>
                            <p className="text-black mb-4">
                                A delightful combination of flavors and textures, crafted to satisfy every craving.
                            </p>
                            <button className="border-2 border-black hover:bg-black hover:text-white text-black font-medium py-2 px-8 transition duration-300">
                                Order Now
                            </button>
                        </div>
                    </div>

                    {/* Food Item 3 */}
                    <div className="food-item">
                        <img
                            src={Popular3}
                            alt="Filet mignon"
                            className="w-full h-104 object-cover mb-4"
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
        
        
    );
};

export default PopularFoods;
