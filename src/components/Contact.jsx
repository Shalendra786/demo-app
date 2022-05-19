import React, { useState } from "react";
import Navbaar from './Navbar';
import './Contact.css';
import {
 Button
} from 'reactstrap';

const Contact = () => {
  const [submitted, setSubmitted] = useState({ name: '', email: '', message: '' });
  const handleSubmit = (e) => {
    // e.preventDefault()
    localStorage.setItem('data', JSON.stringify(submitted))
  };
  const handleChange = (e) => {
    setSubmitted({ ...submitted, [e.target.name]: e.target.value })
  }
  return (
    <>
      <Navbaar />
      <div className="form">
        <form
          onSubmit={handleSubmit}
        >
          <div className="mb-3 pt-0">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              value={submitted.name}
              onChange={handleChange}
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <input
              type="email"
              placeholder="Email"
              name="email"

              value={submitted.email}
              onChange={handleChange}
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <textarea
              placeholder="Your message"
              name="message"

              value={submitted.message}
              onChange={handleChange}
              className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="mb-3 pt-0">
            <a href={'/contact'}>
            <Button
            color="success"
            outline
              
              type="submit"
            >
              Send a message
            </Button>
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;