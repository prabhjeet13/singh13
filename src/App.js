import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import namaste from './images/namaste.png';
import psg  from './images/psg.png'
import About from './components/About';
import Contact from './components/Contact';
// Import other sections like About, Contact etc.

const App = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Add sections for Home, About, Contact, etc. */}
        <section id="home" className="h-screen p-5 bg-gradient-to-b from-blue-500 to-blue-300 flex items-center gap-52 justify-center">
          <div className='flex flex-col gap-5'>
              <div className='flex items-center gap-3'>
                    <span className="text-white text-5xl font-bold uppercase"> Sat Shri A Akal </span>
                    <span><img src = {namaste} /></span>
              </div>
              
              <h1 className="text-white text-2xl font-bold"> I am Prabhjeet Singh </h1>
              <p className='text-2xl font-mono font-semibold'>"Building Innovative Solutions with Full-Stack Expertise"</p>
              <div className='text-xl font-semibold text-orange-900 flex  gap-5'>
                <p>prabhjeetsingh2000@gmail.com</p>
                <p>prabhjeetsg100@gmail.com</p>
                <p>+91 8920197546</p>
              </div>
          </div>

          <img src={psg} className='rounded-full w-96 h-96'/>

        </section>
        <section id="about" className="py-20 bg-gray-100">
           <About/> 
        </section>
        <section id="about" className="py-20 bg-gray-100">
           <Contact/>
        </section>
        <section id = "projects">
          <Projects />
        </section>
      </main>
    </div>
  );
};

export default App;
