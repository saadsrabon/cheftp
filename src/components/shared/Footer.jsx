import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from '../../assets/logo.png'

const Footer = () => {
  const [email, setEmail] = useState('');
    //function to go a section
    // const scrollToSection = (sectionId) => {
    //     const section = document.getElementById(sectionId);
    //     if (section) {
    //         section.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };
    return (
        <footer className="bg-[#212121] border-t-red-600 border-t-2 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Logo and Social */}
                    <div className="flex flex-col items-center md:items-start space-y-6">
                        {/* Logo */}
                        <div className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex-shrink-0">
                            <img src={logo} alt="Company Logo" className="w-full h-full object-contain" />
                        </div>
                        
                        {/* Social Section */}
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-marcellus mb-4">Follow Us</h3>
                            <div className="flex justify-center md:justify-start space-x-4">
                                <a 
                                    href="#" 
                                    className="text-red-600 hover:text-red-400 transition-colors duration-300 p-2 hover:bg-gray-800 rounded-full"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={24} />
                                </a>
                                <a 
                                    href="#" 
                                    className="text-red-600 hover:text-red-400 transition-colors duration-300 p-2 hover:bg-gray-800 rounded-full"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={24} />
                                </a>
                                <a 
                                    href="#" 
                                    className="text-red-600 hover:text-red-400 transition-colors duration-300 p-2 hover:bg-gray-800 rounded-full"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a 
                                    href="#" 
                                    className="text-red-600 hover:text-red-400 transition-colors duration-300 p-2 hover:bg-gray-800 rounded-full"
                                    aria-label="YouTube"
                                >
                                    <Youtube size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Information Links */}
                    <div className="flex flex-col items-center md:items-start lg:justify-start">
                        <h3 className="text-2xl font-marcellus mb-6">Information</h3>
                        <ul className="space-y-3 text-center md:text-left">
                            <li>
                                <a 
                                    href="#services" 
                                    className="hover:text-red-600 transition-colors duration-200 text-gray-300 hover:text-red-400 inline-block py-1"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#about" 
                                    className="hover:text-red-600 transition-colors duration-200 text-gray-300 hover:text-red-400 inline-block py-1"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#about" 
                                    className="hover:text-red-600 transition-colors duration-200 text-gray-300 hover:text-red-400 inline-block py-1"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#contact" 
                                    className="hover:text-red-600 transition-colors duration-200 text-gray-300 hover:text-red-400 inline-block py-1"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Subscribe Section */}
                    <div className="flex flex-col items-center md:items-start md:col-span-2 lg:col-span-1">
                        <h3 className="text-2xl font-marcellus mb-6">Subscribe</h3>
                        <p className="mb-6 text-gray-300 text-center md:text-left leading-relaxed max-w-sm">
                            Subscribe our newsletter to stay updated and get special offers.
                        </p>
                        <div className="w-full max-w-sm">
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-grow bg-gray-800 border border-gray-700 text-white p-3 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent rounded sm:rounded-r-none transition-all duration-200"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button className="bg-[#C51212] hover:bg-red-600 text-white px-6 py-3 transition-colors duration-300 font-medium rounded sm:rounded-l-none whitespace-nowrap">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="text-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 Travis Pena. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;