import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "John",
        lastName: "Doe",
        phoneNumber: "+13845837498",
        email: "john@example.com",
        message: "Hello Travis Pena. I would like to order..."
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle form submission logic here
    };

    return (
        <div className="w-full bg-stone-50 py-12 px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-stone-900 mb-8">Contact</h1>
                
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Left side - Description and Social Media */}
                    <div className="md:w-1/2">
                        <p className="text-stone-700 text-start mb-8 leading-relaxed">
                            As your personal chef, I bring an unparalleled, restaurant-quality dining experience 
                            right to your home. From online exquisite dishes to curating every detail, I transform 
                            each meal into a memorable culinary journey, ensuring every bite is a celebration of 
                            flavor, quality, and sophistication.
                        </p>

                        <div className="flex space-x-4">
                            <a href="#" className="text-stone-700 hover:text-stone-900">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-stone-700 hover:text-stone-900">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-stone-700 hover:text-stone-900">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-stone-700 hover:text-stone-900">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Right side - Form */}
                    <div className="md:w-1/2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full px-0 py-2 border-0 border-b border-stone-300 focus:ring-0 focus:border-stone-500 bg-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-1">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full px-0 py-2 border-0 border-b border-stone-300 focus:ring-0 focus:border-stone-500 bg-transparent"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className="w-full px-0 py-2 border-0 border-b border-stone-300 focus:ring-0 focus:border-stone-500 bg-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-0 py-2 border-0 border-b border-stone-300 focus:ring-0 focus:border-stone-500 bg-transparent"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-0 py-2 border-0 border-b border-stone-300 focus:ring-0 focus:border-stone-500 bg-transparent resize-none"
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="bg-stone-800 hover:bg-stone-700 text-white px-8 py-3 text-sm font-medium transition-colors duration-200 hover:cursor-pointer"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;