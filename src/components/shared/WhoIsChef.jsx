import React from 'react';
import ChefCooking from '../../assets/image000001.png'

const WhoIsChef = () => {
    return (
        <section className="bg-gray-100">

            <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
                <h1 className="text-4xl md:text-5xl font-marcellus text-brown-900 mb-10">Who is Chef Pena?</h1>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="md:order-2 text-start">
                        <h2 className="text-2xl md:text-3xl  text-brown-800 mb-4 font-marcellus ">Traveling Chef, Travis Pena</h2>
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
                        <button className="bg-[#351814] hover:bg-[#794841] hover:cursor-pointer text-white font-medium py-3 px-6 rounded-sm transition duration-300">
                            Request a Service
                        </button>
                    </div>
                    <div className="">
                        <div className="bg-white p-2 shadow-lg">
                            <img
                                src={ChefCooking}
                                alt="Chef Travis Pena cooking"
                                className="w-full md:h-[450px] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoIsChef;