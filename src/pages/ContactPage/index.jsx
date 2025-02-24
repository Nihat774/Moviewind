import React from 'react';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { IoLogoInstagram } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className=" mx-auto min-h-[80vh] md:min-h-[70vh] flex flex-col justify-center">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <p className="text-lg mb-3">
        If you have any questions or suggestions, feel free to reach out to us!
      </p>
      
      <div className="mb-3">
        <h2 className="text-2xl font-semibold mb-2">Email</h2>
        <p className="text-lg">youremail@example.com</p>
      </div>
      
      <div className="mb-3">
        <h2 className="text-2xl font-semibold mb-2">Phone</h2>
        <p className="text-lg">+123 456 7890</p>
      </div>

      <div className="mb-3">
        <h2 className="text-2xl font-semibold mb-2">Follow Us</h2>
        <div className="flex space-x-4">
          <Link href="https://twitter.com" className=" text-blue-500"><FaTwitterSquare className='text-2xl' /></Link>
          <Link href="https://facebook.com" className=" text-blue-500"><FaSquareFacebook className='text-2xl' /></Link>
          <Link href="https://instagram.com" className=" text-pink-500"><IoLogoInstagram  className='text-2xl'/></Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
