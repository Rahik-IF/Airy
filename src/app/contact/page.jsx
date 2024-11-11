'use client'
import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaPhone } from 'react-icons/fa';
import { useSubmitContactFormMutation } from '../../../redux/features/contactApi';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [submitContactForm, { isLoading, isSuccess, isError, error }] = useSubmitContactFormMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage('');

    try {
      const result = await submitContactForm(formData).unwrap();

      if (isSuccess) {
        setResponseMessage('Message sent successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: ''
        });
      }
    } catch {
      setResponseMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-orange-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-orange-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-orange-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:border-orange-500"
              rows="4"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white rounded-full py-2 font-semibold hover:bg-orange-700 transition duration-200"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>

        {/* Response Message */}
        {responseMessage && (
          <p className={`text-center mt-4 ${isError ? 'text-red-600' : 'text-green-600'}`}>
            {isError ? error?.data?.message || responseMessage : responseMessage}
          </p>
        )}

        {/* Contact Info Section */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
          <div className="flex flex-col items-center space-y-2 text-gray-600">
            <div className="flex items-center space-x-2">
              <FaFacebook className="text-lg" />
              <span>www.xxxxxxxxxxxx</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaTwitter className="text-lg" />
              <span>www.xxxxxxxxxxxx</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-lg" />
              <span>+8801XXXXXXXXX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
