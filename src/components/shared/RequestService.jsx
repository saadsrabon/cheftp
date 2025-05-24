import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const RequestService = () => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "+13845837498",
    email: "john@example.com",
    address: "4532 New Mirage Blvd, Las Vegas, NV 89191",
    totalGuests: "5",
     eventDate: new Date(),
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
const handleDateChange = (date) => {
    setFormData(prev => ({
      ...prev,
      eventDate: date
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div id="request" className="w-full   bg-stone-50 p-8 rounded">
      <h1 className="text-center text-3xl font-medium text-stone-900 mb-6">Request a Services</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-stone-800 mb-1 text-left">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-stone-800 mb-1 text-left">Last Name</label>
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
            <label className="block text-sm text-stone-800 mb-1 text-left">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-stone-800 mb-1 text-left">Email</label>
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
            <label className="block text-sm text-stone-800 mb-1 text-left">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-stone-800 mb-1 text-left">Total Guest</label>
            <input
              type="text"
              name="totalGuests"
              value={formData.totalGuests}
              onChange={handleChange}
              className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 items-start">
          <div class="border-b border-stone-300">
            <label className="block text-sm text-stone-800 mb-1 text-left">Event Date</label>
            
            <DatePicker
              selected={formData.eventDate}
              onChange={handleDateChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="MMMM d, yyyy h:mm aa"
              className="flex  pb-1 bg-transparent focus:outline-none text-left"
            />
          </div>
          <div>
            <label className="block text-sm text-stone-800 mb-1 text-left">Event Type</label>
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
                <option value="Other">Other</option>
              </select>
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L11 1" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            {formData.eventType === "Other" && (
              <div className="mt-2">
                <input
                  type="text"
                  name="otherEventType"
                  value={formData.otherEventType}
                  onChange={handleChange}
                  placeholder="Please specify event type"
                  className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none"
                />
              </div>
            )}
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

export default RequestService;