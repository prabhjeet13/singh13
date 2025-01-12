import React from "react";
import psg  from '../images/psg.png'
function About() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="w-48 h-48 mb-6">
        <img
          src= {psg}
          alt="psg"
          className="w-full h-full rounded-md shadow-lg"
        />
      </div>
      <h2 className="text-4xl font-bold mb-4">I’m Prabhjeet Singh</h2>
      <p className="text-center text-xl px-4 md:px-8 max-w-2xl leading-relaxed">
        Passionate software developer with experience in MERN stack.
        I have worked on various projects such as Online Judge and Ed-tech and Medisphere platforms and many more to go.
      </p>
      <a href="./images/prabhjeet_singh_gambhir_resume.pdf" download = "prabhjeet_singh_gambhir_resume.pdf">
        <button className="mt-6 bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-400 hover:scale-90 transition-all duration-300">
          Download Resume
        </button>
      </a>
    </section>
  );
}

export default About;
// import React from "react";
// import { useSpring, animated } from '@react-spring/web';
// import resume from '../images/resume.pdf'
// const About = () => {
//   const animationProps = useSpring({
//     opacity: 1,
//     transform: "translateY(0)",
//     from: { opacity: 0, transform: "translateY(20px)" },
//   });

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = '../images/resume.pdf'; // Replace with your resume path
//     link.download = "prabhjeet_singh_gambhir_resume.pdf";
//     link.click();
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex items-center justify-center py-12 px-4">
//       <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
//         <animated.h1 style={animationProps} className="text-4xl font-bold text-center text-gray-800 mb-4">
//           About Me
//         </animated.h1>
//         <animated.p style={animationProps} className="text-lg text-gray-700 mb-6">
//           I am a full-stack developer with expertise in the MERN stack, Flask, and React. I love building innovative solutions and continuously improving my skills in web development.
//         </animated.p>
//         <animated.h2 style={animationProps} className="text-2xl font-semibold text-gray-800 mb-4">
//           Skills
//         </animated.h2>
//         <animated.ul style={animationProps} className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
//           <li>Languages: JavaScript, C++ </li>
//           <li>Frontend: React.js, Tailwind CSS, HTML, CSS</li>
//           <li>Backend: Node.js, Express.js</li>
//           <li>Databases: MongoDB, MySQL</li>
//         </animated.ul>
//         <button
//           onClick={handleDownload}
//           className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-300"
//         >
//           Download Resume
//         </button>
//       </div>
//     </div>
//   );
// };

// export default About;
