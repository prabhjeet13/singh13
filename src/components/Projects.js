import React from "react";
import { FaGithub, FaLink } from "react-icons/fa"; // Import icons from react-icons

const Projects = () => {
  const projects = [
    {
      name: "KnowledgeStream",
      description: "An ed-tech platform for students and instructors to upload and access courses, facilitating seamless learning and teaching.",
      techStack: "MERN (MongoDB, Express.js, React.js, Node.js)",
      role: "Full-stack Developer",
      githubLink: "https://github.com/prabhjeet13/studySingh",
      deployLink: "https://yourdeployedlink.com",
      features: [
        "Course uploads with Cloudinary integration for multimedia content",
        "User authentication and management with JWT",
        "Interactive UI for students and instructors with real-time updates",
        "Admin panel for managing courses, users, and content",
        "Real-time notifications for course updates and events",
      ],
      achievements: [
        "Successfully integrated Cloudinary to enable efficient media management",
        "Implemented a responsive UI to ensure accessibility across devices",
        "Optimized the backend to handle large video files and prevent downtime",
      ],
    },
    {
      name: "Medisphere",
      description: "A healthcare platform connecting patients with doctors for online consultations and health management, allowing easy access to healthcare services.",
      techStack: "React.js, Node.js, MongoDB",
      role: "Full-stack Developer",
      githubLink: "https://github.com/prabhjeet13/medisphere",
      deployLink: "https://medisphere-rho.vercel.app/",
      features: [
        "Patient and doctor profiles with secure login and management",
        "Appointment booking system with reminders and scheduling",
        "Real-time chat for consultations with doctors",
        "E-prescription and health record management system",
        "Appointment tracking and notifications for patients",
      ],
      achievements: [
        "Improved patient-doctor interaction through real-time chat functionality",
        "Implemented secure login using JWT for user authentication",
        "Developed a smooth and intuitive appointment booking system",
      ],
    },
    {
      name: "@eatSleepCode",
      description: "An online judge platform that allows users to practice coding problems, execute their code in various languages, and receive feedback.",
      techStack: "MERN (MongoDB, Express.js, React.js, Node.js)",
      role: "Full-stack Developer",
      githubLink: "https://github.com/prabhjeet13/eatsleepcode",
      deployLink: "https://eatsleepcode.vercel.app/",
      features: [
        "Code execution in multiple languages",
        "User authentication and authorization with session management",
        "Test case generation and automated verdict for code submissions",
        "Real-time feedback on code performance and accuracy",
        "Problem-solving leaderboard and user statistics",
      ],
      achievements: [
        "Developed a highly scalable backend to handle concurrent user submissions",
        "Created a detailed leaderboard to encourage friendly competition among users",
        "Optimized the problem-solving experience by automatically generating test cases for each problem",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
      <h2 className="text-3xl font-bold text-center mb-10 uppercase text-black">Projects</h2>
      <div className="mx-auto flex flex-col items-center justify-center gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r  rounded-lg shadow-lg p-8 transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-teal-400 to-blue-500 w-full max-w-3xl cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-4 text-black">{project.name}</h3>
            <p className="mb-4 text-lg text-black">{project.description}</p>
            <p className="italic text-black bg-gradient-to-r from-yellow-400 to-green-500 w-fit p-2 rounded-md">{project.techStack}</p>
            <div className="mt-6">
              <p className="text-xl font-semibold text-black"><strong>Role:</strong> {project.role}</p>
              <h4 className="font-semibold mt-4 text-black">Features:</h4>
              <ul className="list-disc pl-5 mt-2 text-black">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <h4 className="font-semibold mt-4 text-black">Achievements:</h4>
              <ul className="list-disc pl-5 mt-2 text-black">
                {project.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-6 mt-6 justify-center">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
                <FaGithub size={30} />
              </a>
              <a href={project.deployLink} target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600">
                <FaLink size={30} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
