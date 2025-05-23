import React, { useState } from 'react';

const RequestService = () => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "+13845837498",
    email: "john@example.com",
    address: "4532 New Mirage Blvd, Las Vegas, NV 89191",
    totalGuests: "5",
    eventDate: "16 June, 2025",
    eventType: "Anniversary",
    menu: "Appetizer",
    items: {
      truffleMushroom: true,
      figTart: true,
      caviar: true
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      setFormData(prev => ({
        ...prev,
        items: {
          ...prev.items,
          [name]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="w-full bg-stone-50 p-4 sm:p-6 lg:p-8 rounded">
      <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-medium text-stone-900 mb-6 sm:mb-8 lg:mb-10">Request a Service</h1>
      
      <div className="max-w-4xl mx-auto">
        <div onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="space-y-2">
              <label className="block text-sm sm:text-base text-stone-800">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border-b border-stone-300 pb-2 sm:pb-3 bg-transparent focus:outline-none focus:border-stone-500 text-base sm:text-lg transition-colors duration-200"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm sm:text-base text-stone-800">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border-b border-stone-300 pb-2 sm:pb-3 bg-transparent focus:outline-none focus:border-stone-500 text-base sm:text-lg transition-colors duration-200"
              />
            </div>
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="space-y-2">
              <label className="block text-sm sm:text-base text-stone-800">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border-b border-stone-300 pb-2 sm:pb-3 bg-transparent focus:outline-none focus:border-stone-500 text-base sm:text-lg transition-colors duration-200"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm sm:text-base text-stone-800">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-stone-300 pb-2 sm:pb-3 bg-transparent focus:outline-none focus:border-stone-500 text-base sm:text-lg transition-colors duration-200"
              />
            </div>
          </div>

          {/* Address & Total Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="space-y-2">
              <label className="block text-sm sm:text-base text-stone-800">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border-b border-stone-300 pb-2 sm:pb-3 bg-transparent focus:outline-none focus:border-stone-500 text-base sm:text-lg transition-colors duration-200"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm sm:text-base text-stone-800">Total Guests</label>
              <input
                type="text"
                name="totalGuests"
                value={formData.totalGuests}
                onChange={handleChange}
                className="w-full border-b border-stone-300 pb-2 sm:pb-3 bg-transparent focus:outline-none focus:border-stone-500 text-base sm:text-lg transition-colors duration-200"
              />
            </div>
          </div>

          {/* Event Date - Full Width */}
          <div className="space-y-2">
            <label className="block text-sm sm:text-base text-stone-800">Event Date</label>
            <input
              type="text"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full border-b border-stone-300 pb-2 sm:pb-3 bg-transparent focus:outline-none focus:border-stone-500 text-base sm:text-lg transition-colors duration-200"
            />
          </div>

          {/* Event Type & Menu */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="space-y-2">
              <label className="block text-sm sm:text-base text-stone-800">Event Type</label>
              <div className="relative">
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full border-b border-stone-300 pb-2 sm:pb-3 bg-transparent focus:outline-none focus:border-stone-500 appearance-none pr-8 text-base sm:text-lg transition-colors duration-200"
                >
                  <option value="Anniversary">Anniversary</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Corporate">Corporate</option>
                  <option value="Wedding">Wedding</option>
                </select>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L11 1" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-sm sm:text-base text-stone-800">Menu</label>
              <div className="relative">
                <select
                  name="menu"
                  value={formData.menu}
                  onChange={handleChange}
                  className="w-full border-b border-stone-300 pb-2 sm:pb-3 bg-transparent focus:outline-none focus:border-stone-500 appearance-none pr-8 text-base sm:text-lg transition-colors duration-200"
                >
                  <option value="Appetizer">Appetizer</option>
                  <option value="Main Course">Main Course</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Full Menu">Full Menu</option>
                </select>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L6 6L11 1" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Items Section */}
          <div className="space-y-4">
            <label className="block text-sm sm:text-base text-stone-800 font-medium">Items</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="truffleMushroom"
                  name="truffleMushroom"
                  checked={formData.items.truffleMushroom}
                  onChange={handleChange}
                  className="h-4 w-4 sm:h-5 sm:w-5 text-stone-800 rounded focus:ring-stone-500"
                />
                <label htmlFor="truffleMushroom" className="text-sm sm:text-base text-stone-800 leading-relaxed">Truffle Mushroom Crostini</label>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="figTart"
                  name="figTart"
                  checked={formData.items.figTart}
                  onChange={handleChange}
                  className="h-4 w-4 sm:h-5 sm:w-5 text-stone-800 rounded focus:ring-stone-500"
                />
                <label htmlFor="figTart" className="text-sm sm:text-base text-stone-800 leading-relaxed">Fig and Goat Cheese Tart</label>
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  id="caviar"
                  name="caviar"
                  checked={formData.items.caviar}
                  onChange={handleChange}
                  className="h-4 w-4 sm:h-5 sm:w-5 text-stone-800 rounded focus:ring-stone-500"
                />
                <label htmlFor="caviar" className="text-sm sm:text-base text-stone-800 leading-relaxed">Caviar and Avocado Canapé</label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6 sm:pt-8">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-stone-800 hover:bg-stone-700 text-white px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-medium transition-colors duration-200 hover:cursor-pointer w-full sm:w-auto"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestService;