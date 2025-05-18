import { useState } from "react";

// Main component that contains both forms
export default function FormsContainer() {
  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto p-4 gap-16">
      <RequestServicesForm />
      <ContactForm />
    </div>
  );
}

// Request a Services Form Component
const RequestServicesForm = () => {
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
    <div className="w-full max-w-2xl bg-stone-50 p-8 rounded">
      <h1 className="text-center text-3xl font-medium text-stone-900 mb-6">Request a Services</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-stone-800 mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-stone-800 mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-stone-800 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-stone-800 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-stone-800 mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-stone-800 mb-1">Total Guest</label>
            <input
              type="text"
              name="totalGuests"
              value={formData.totalGuests}
              onChange={handleChange}
              className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-stone-800 mb-1">Event Date</label>
            <input
              type="text"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-stone-800 mb-1">Event Date</label>
            <input
              type="text"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-stone-800 mb-1">Event Type</label>
            <div className="relative">
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none appearance-none pr-8"
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
          <div>
            <label className="block text-sm text-stone-800 mb-1">Menu</label>
            <div className="relative">
              <select
                name="menu"
                value={formData.menu}
                onChange={handleChange}
                className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none appearance-none pr-8"
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

        <div>
          <label className="block text-sm text-stone-800 mb-2">Items</label>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="truffleMushroom"
                name="truffleMushroom"
                checked={formData.items.truffleMushroom}
                onChange={handleChange}
                className="mr-2 h-4 w-4"
              />
              <label htmlFor="truffleMushroom" className="text-sm text-stone-800">Truffle Mushroom Crostini</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="figTart"
                name="figTart"
                checked={formData.items.figTart}
                onChange={handleChange}
                className="mr-2 h-4 w-4"
              />
              <label htmlFor="figTart" className="text-sm text-stone-800">Fig and Goat Cheese Tart</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="caviar"
                name="caviar"
                checked={formData.items.caviar}
                onChange={handleChange}
                className="mr-2 h-4 w-4"
              />
              <label htmlFor="caviar" className="text-sm text-stone-800">Caviar and Avocado Canapé</label>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-stone-800 text-white px-6 py-2 text-sm font-medium"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "+13845837498",
    email: "john@example.com",
    message: "Hello Travis Pena, I would like to order..."
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
    <div className="w-full max-w-2xl bg-stone-50 p-8 rounded">
      <h1 className="text-center text-3xl font-medium text-stone-900 mb-6">Contact</h1>
      
      <div className="grid grid-cols-12 gap-8">
        {/* Left side - Description and Social Media */}
        <div className="col-span-5">
          <p className="text-sm text-stone-700 mb-8">
            As your personal chef, I bring an unparalleled, restaurant-quality 
            dining experience right to your home. From crafting exquisite dishes 
            to curating every detail, I transform each meal into a memorable 
            culinary journey, ensuring every bite is a celebration of flavor, 
            quality, and sophistication.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-stone-800">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
              </svg>
            </a>
            <a href="#" className="text-stone-800">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-stone-800">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
            <a href="#" className="text-stone-800">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Right side - Form */}
        <div className="col-span-7">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-stone-800 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-stone-800 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-stone-800 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-stone-800 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-stone-800 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none resize-none"
              />
            </div>

            <div className="flex mt-6">
              <button
                type="submit"
                className="bg-stone-800 text-white px-6 py-2 text-sm font-medium"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { RequestServicesForm, ContactForm };