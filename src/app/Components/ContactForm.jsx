"use client"
import { useState } from 'react';

function ContactForm() {
  const [First_Name, setFirstName] = useState('');
  const [Last_Name, setLastName] =useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ First_Name, email, message }),
      });
      const data = await response.json();
      if (data.success) {
        setSuccess('Message sent successfully!');
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
      } else {
        setError(data.error);
      }
    } catch (error) {
      setError('Error sending message. Please try again.');
    }
  };

  return (
    <div className="max-w-md sm:mx-auto p-5 pt-6 pb-8 mb-4 mt-5 mx-3 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4 sm:text-2xl ">Get in Touch</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">{error}</strong>
        </div>
      )}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
          <strong className="font-bold">{success}</strong>
        </div>
      )}
      <form onSubmit={handleSubmit} >
        <label className="block mb-2 sm:text-lg " htmlFor="name">
          First Name
          <input
            type="text"
            id="First Name"
            value={First_Name}
            onChange={(event) => setFirstName(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-400"
            placeholder="Your First Name"
          />
        </label>
        <label className="block mb-2 sm:text-lg" htmlFor="name">
          Last Name
          <input
            type="text"
            id="Last Name"
            value={Last_Name}
            onChange={(event) => setLastName(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-400"
            placeholder="Your Last name"
          />
        </label>
        <label className="block mb-2 sm:text-lg" htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-400"
            placeholder="your@email.com"
          />
        </label>
        <label className="block mb-2 sm:text-lg" htmlFor="message">
          Message
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-400"
            placeholder="Your message"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;