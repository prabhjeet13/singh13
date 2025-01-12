// src/components/Contact.js

import React from 'react';
import linkedin from '../images/linked in.png';
// import leetcode from './images/leetcode.png';
import github from '../images/github.png';
import { MdOutlineMailOutline } from "react-icons/md";
const Contact = () => {
  return (
    <section id="contact" className="p-32 bg-gradient-to-r from-purple-600 to-cyan-200">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Connect with Me</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/prabhjeet13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background hover:text-accent transition-colors flex flex-col items-center"
            aria-label="GitHub"
          >
            <img src= {github} className='w-30 h-20' />
            <span className="mt-2">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/prabhjeet-singh-gambhir-29b481172/"
            target="_blank"
            className="text-background hover:text-accent transition-colors flex flex-col items-center"
            aria-label="LinkedIn"
          >
            <img src = {linkedin} className='w-30 h-20'/>
            <span className="mt-2">LinkedIn</span>
          </a>
          <a
            href="mailto:prabhjeetsingh2000@gmail.com"
            className="text-background hover:text-accent transition-colors flex flex-col items-center"
            aria-label="Email"
          >
            
            <MdOutlineMailOutline className='text-7xl text-red-600'/>
            <span className="mt-2">Email</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
