import React from "react";
import { FaGithub, FaLink } from "react-icons/fa"; // Import icons from react-icons

const Projects = () => {
  const projects = [
    {
      name: "Medisphere",
      description:
        "A healthcare platform connecting patients with doctors for online consultations and health management, allowing easy access to healthcare services.",
      techStack: "MERN (MongoDB Express.js React.js Node.js)",
      role: "Full-stack Developer",
      githubLink: "https://github.com/prabhjeet13/medisphere",
      deployLink: "https://medisphere-rho.vercel.app/",
      features: [
        "Patient and doctor profiles with secure login and management",
        "Appointment booking system with reminders and scheduling",
        "Real-time chat for consultations with doctors",
        "E-prescription and health record management system",
        "Appointment tracking and notifications for patients",
        "Using REACT_REDUX for state-management globally",
      ],
    },
    {
      name: "KnowledgeStream",
      description:
        "An ed-tech platform for students and instructors to upload and access courses, facilitating seamless learning and teaching.",
      techStack: "MERN (MongoDB Express.js React.js Node.js)",
      role: "Full-stack Developer",
      githubLink: "https://github.com/prabhjeet13/studySingh",
      deployLink: "https://github.com/prabhjeet13/studySingh",
      features: [
        "Course uploads with Cloudinary integration for multimedia content",
        "User authentication and management with JWT",
        "Interactive UI for students and instructors with real-time updates",
        "Admin panel for managing courses, users, and content",
        "Real-time notifications for course updates and events",
        "Using REACT_REDUX for state-management globally",
      ]
    },
    {
      name: "@eatSleepCode",
      description:
        "An online judge platform that allows users to practice coding problems, execute their code in various languages, and receive feedback.",
      techStack: "MERN (MongoDB Express.js React.js Node.js)",
      role: "Full-stack Developer",
      githubLink: "https://github.com/prabhjeet13/eatsleepcode",
      deployLink: "https://eatsleepcode.vercel.app/",
      features: [
        "Code execution in multiple languages",
        "User authentication and authorization with session management",
        "Test case generation and automated verdict for code submissions",
        "Real-time feedback on code performance and accuracy",
        "Problem-solving leaderboard and user statistics",
        "Using REACT_REDUX for state-management globally",
      ]
    },
    {
      name: "User Management App",
      description:
        "A comprehensive platform to manage users with features such as secure authentication, role-based access control, and user activity tracking.",
      techStack: "MERN (MongoDB Express.js React.js Node.js)",
      role: "Full-stack Developer",
      githubLink: "https://github.com/prabhjeet13/user_management_app",
      deployLink: "https://user-management-app-eight-pi.vercel.app/",
      features: [
        "Add new User",
        "Edit User Details",
        "Delete a User",
        "Using React-Flow for displaying users beautifully",
        "Using REACT_REDUX for state-management globally",
      ]
    },
  ];

  return (
    <div id="projects" className="py-20 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500">
      <h2 className="text-3xl font-bold text-center mb-10 uppercase text-black">Projects</h2>
      <div className="mx-auto flex flex-col items-center justify-center gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r  rounded-full shadow-lg p-8 transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-teal-400 to-blue-500 w-full max-w-3xl cursor-pointer"
          >
            <div className="bg-yellow-400 p-2 m-2 rounded-md">
              <h3 className="text-2xl font-semibold mb-4 text-black capitalize">{project.name}</h3>
              <p className="mb-4 text-lg text-black">{project.description}</p>
              <p className="italic text-black font-bold uppercase bg-gradient-to-r from-pink-400 to-blue-400 w-fit p-2 rounded-md">{project.techStack}</p>
            </div>
              <div className="bg-purple-500 p-2 m-2 rounded-md">
                <p className="text-xl font-semibold text-black uppercase italic"><strong>Role:</strong> {project.role}</p>
              </div>
            <div className="bg-yellow-500 p-2 m-2 rounded-md">
              <h3 className="font-semibold mt-4 text-black text-2xl">Features:</h3>
              <ul className="list-disc pl-5 mt-2 text-black text-xl flex flex-col gap-3">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
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
    </div>
  );
};

export default Projects;
