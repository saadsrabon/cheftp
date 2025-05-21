import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import logo from '../../assets/logo.png'


const Footer = () => {
  const [email, setEmail] = useState('');
    
    return (
        <footer className="bg-[#212121] text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Logo and Social */}
                    <div className="flex flex-col items-center md:items-start">
                        {/* logo */}
                        <div className="mb-8 w-40 h-40">
                                    <img src={logo} alt="" />
                        </div>
                        {/* Social */}
                        <h3 className="text-xl font-marcellus mb-4">Follow Us</h3>
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
                    <div className="flex flex-col  text-start items-center md:items-start">
                        <h3 className="text-2xl font-marcellus mb-6">Information</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="hover:text-red-600 transition duration-200">Services</a></li>
                            <li><a href="#" className="hover:text-red-600 transition duration-200">About Us</a></li>
                            <li><a href="#" className="hover:text-red-600 transition duration-200">FAQ</a></li>
                            <li><a href="#" className="hover:text-red-600 transition duration-200">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Subscribe Section */}
                    <div className="flex flex-col items-start justify-start text-start md:items-start">
                        <h3 className="text-2xl font-marcellus mb-6">Subscribe</h3>
                        <p className="mb-4">Subscribe our newsletter to stay updated and get special offers.</p>
                        <div className="flex w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-grow bg-gray-800 border-none text-white p-3 focus:outline-none focus:ring-1 focus:ring-red-600"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className="bg-[#C51212] hover:bg-red-600 text-white px-6 py-3 transition duration-300">
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
    );
};

export default Footer;