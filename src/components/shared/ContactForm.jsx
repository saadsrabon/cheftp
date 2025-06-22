import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
const ContactForm = () => {
    const [formDatas, setFormData] = useState({
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const templateParams = {
            user_name: formDatas.firstName + ' ' + formDatas.lastName,
            user_email: formDatas.email,
            user_subject: "New Contact Form Submission",
            // phone_number: formDatas.phoneNumber,
            user_message: formDatas.message,
            client_logo_url: "https://cheftp.com/assets/logo-C_YKTxIx.png", // Replace with your logo URL
        };

        try {
            const result = await emailjs.send(
                'service_us6o5pd',
                'template_ti1plvf',
                templateParams,
               '2ox7-3gdQnHMcDfGD'
                
            );
  console.log("Email sent", result);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Form Submitted Successfully",
                showConfirmButton: false,
                timer: 1500,
            });
            setFormData({
                firstName: "",
                lastName: "",
                phoneNumber: "",
                email: "",
                message: ""
            });
        } catch (error) {
            console.error("EmailJS Error", error);
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Please try again later.",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <div id="contact" className="w-full bg-stone-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mb-8 sm:mb-12 lg:mb-16">Contact</h1>
                
                <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
                    {/* Left side - Description and Social Media */}
                    <div className="lg:w-1/2 space-y-6 sm:space-y-8">
                        <p className="text-stone-700 text-start text-base sm:text-lg leading-relaxed sm:leading-relaxed lg:leading-loose">
                            As your personal chef, I bring an unparalleled, restaurant-quality dining experience 
                            right to your home. From online exquisite dishes to curating every detail, I transform 
                            each meal into a memorable culinary journey, ensuring every bite is a celebration of 
                            flavor, quality, and sophistication.
                        </p>

                        <div className="flex space-x-6 pt-2">
                            <a href="#" className="text-stone-700 hover:text-stone-900 transition-colors duration-200">
                                <Facebook size={24} className="sm:w-6 sm:h-6" />
                            </a>
                            <a href="#" className="text-stone-700 hover:text-stone-900 transition-colors duration-200">
                                <Instagram size={24} className="sm:w-6 sm:h-6" />
                            </a>
                            <a href="#" className="text-stone-700 hover:text-stone-900 transition-colors duration-200">
                                <Linkedin size={24} className="sm:w-6 sm:h-6" />
                            </a>
                            <a href="#" className="text-stone-700 hover:text-stone-900 transition-colors duration-200">
                                <Youtube size={24} className="sm:w-6 sm:h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Right side - Form */}
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                                <div className="space-y-2">
                                    <label className="block text-sm text-left sm:text-base font-medium text-stone-700">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formDatas.firstName}
                                        onChange={handleChange}
                                        className="w-full px-0 py-3 sm:py-4 border-0 border-b border-stone-300 focus:ring-0 focus:border-stone-500 bg-transparent text-base sm:text-lg transition-colors duration-200"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm sm:text-base text-left  font-medium text-stone-700">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formDatas.lastName}
                                        onChange={handleChange}
                                        className="w-full px-0 py-3 sm:py-4 border-0 border-b border-stone-300 focus:ring-0 focus:border-stone-500 bg-transparent text-base sm:text-lg transition-colors duration-200"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                                <div className="space-y-2">
                                    <label className="block text-sm sm:text-base font-medium text-stone-700 text-left">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={formDatas.phoneNumber}
                                        onChange={handleChange}
                                        className="w-full px-0 py-3 sm:py-4 border-0 border-b border-stone-300 focus:ring-0 focus:border-stone-500 bg-transparent text-base sm:text-lg transition-colors duration-200"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-sm sm:text-base font-medium text-stone-700 text-left">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formDatas.email}
                                        onChange={handleChange}
                                        className="w-full px-0 py-3 sm:py-4 border-0 border-b border-stone-300 focus:ring-0 focus:border-stone-500 bg-transparent text-base sm:text-lg transition-colors duration-200"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-sm sm:text-base font-medium text-stone-700 text-left">Message</label>
                                <textarea
                                    name="message"
                                    value={formDatas.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-0 py-3 sm:py-4 border-0 border-b border-stone-300 focus:ring-0 focus:border-stone-500 bg-transparent resize-none text-base sm:text-lg transition-colors duration-200"
                                />
                            </div>

                            <div className="pt-6 sm:pt-8">
                                <button
                                    type="submit"
                                  
                                    className="bg-stone-800 hover:bg-stone-700 text-white px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-medium transition-colors duration-200 hover:cursor-pointer w-full sm:w-auto"
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