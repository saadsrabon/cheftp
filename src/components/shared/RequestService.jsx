import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const RequestService = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
    totalGuests: '',
    eventDate: new Date(),
    eventType: 'Anniversary',
    otherEventType: '',
    items: {
      truffleMushroom: false,
      figTart: false,
      caviar: false
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedDate = formData.eventDate.toLocaleString();

    const templateParams = {
      user_name: `${formData.firstName} ${formData.lastName}`,
      user_email: formData.email,
      user_subject: 'Service Request Form Submission',
      user_message: `
        Phone: ${formData.phoneNumber}
        Address: ${formData.address}
        Guests: ${formData.totalGuests}
        Event Type: ${formData.eventType === 'Other' ? formData.otherEventType : formData.eventType}
        Event Date: ${formattedDate}
        Menu Items: ${Object.keys(formData.items).filter(key => formData.items[key]).join(', ') || 'None'}
      `,
      client_logo_url: 'https://cheftp.com/assets/logo-C_YKTxIx.png'
    };

    try {
      await emailjs.send('service_us6o5pd', 'template_iv8bl6t', templateParams, '2ox7-3gdQnHMcDfGD');
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Request Submitted Successfully!',
        showConfirmButton: false,
        timer: 2000
      });
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: '',
        totalGuests: '',
        eventDate: new Date(),
        eventType: 'Anniversary',
        otherEventType: '',
        items: {
          truffleMushroom: false,
          figTart: false,
          caviar: false
        }
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Please try again later.',
        showConfirmButton: false,
        timer: 2000
      });
    }
  };

  return (
    <div id="request" className="w-full bg-stone-50 p-8 rounded">
      <h1 className="text-center text-3xl font-medium text-stone-900 mb-6">Request a Service</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-stone-800 mb-1 text-left">First Name</label>
            <input name="firstName" value={formData.firstName} onChange={handleChange} className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none" required />
          </div>
          <div>
            <label className="block text-sm text-stone-800 mb-1 text-left">Last Name</label>
            <input name="lastName" value={formData.lastName} onChange={handleChange} className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none" required />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-stone-800 mb-1 text-left">Phone Number</label>
            <input name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none" required />
          </div>
          <div>
            <label className="block text-sm text-stone-800 mb-1 text-left">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none" required />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm text-stone-800 mb-1 text-left">Address</label>
            <input name="address" value={formData.address} onChange={handleChange} className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none" required />
          </div>
          <div>
            <label className="block text-sm text-stone-800 mb-1 text-left">Total Guests</label>
            <input name="totalGuests" value={formData.totalGuests} onChange={handleChange} className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none" required />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 items-start">
          <div>
            <label className="block text-sm text-stone-800 mb-1 text-left">Event Date</label>
            <DatePicker selected={formData.eventDate} onChange={handleDateChange} showTimeSelect dateFormat="MMMM d, yyyy h:mm aa" className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm text-stone-800 mb-1 text-left">Event Type</label>
            <select name="eventType" value={formData.eventType} onChange={handleChange} className="w-full border-b border-stone-300 pb-1 bg-transparent focus:outline-none">
              <option value="Anniversary">Anniversary</option>
              <option value="Birthday">Birthday</option>
              <option value="Corporate">Corporate</option>
              <option value="Wedding">Wedding</option>
              <option value="Other">Other</option>
            </select>
            {formData.eventType === 'Other' && (
              <input name="otherEventType" value={formData.otherEventType} onChange={handleChange} placeholder="Please specify" className="w-full mt-2 border-b border-stone-300 pb-1 bg-transparent focus:outline-none" />
            )}
          </div>
        </div>

        {/* <div>
          <label className="block text-sm text-stone-800 mb-1 text-left">Menu Items</label>
          <div className="flex flex-col space-y-2">
            <label><input type="checkbox" name="truffleMushroom" checked={formData.items.truffleMushroom} onChange={handleChange} /> Truffle Mushroom</label>
            <label><input type="checkbox" name="figTart" checked={formData.items.figTart} onChange={handleChange} /> Fig Tart</label>
            <label><input type="checkbox" name="caviar" checked={formData.items.caviar} onChange={handleChange} /> Caviar</label>
          </div>
        </div> */}

        <div className="flex justify-center mt-8">
          <button type="submit" className="bg-stone-800 text-white px-6 py-2 text-sm font-medium">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RequestService;
