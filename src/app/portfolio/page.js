import Link from "next/link";
import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A fully responsive e-commerce website built with Tailwind CSS, offering seamless shopping experience.",
      image: "/images/project1.jpg",
      link: "/portfolio",
    },
    {
      title: "Personal Blog",
      description: "A clean and modern personal blog with Tailwind CSS for responsive design and fast loading times.",
      image: "/images/project2.jpg",
      link: "/portfolio",
    },
    {
      title: "Business Landing Page",
      description: "A professional business landing page, designed to highlight your services and convert visitors into clients.",
      image: "/images/project3.jpg",
      link: "/portfolio",
    },
    {
      title: "Photography Portfolio",
      description: "A sleek photography portfolio that showcases images in a clean, minimalistic style with smooth animations.",
      image: "/images/project4.jpg",
      link: "/portfolio",
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Our Portfolio
        </h1>

        {/* Intro Section */}
        <div className="text-center mb-12">
          <p className="text-lg leading-7 text-gray-600">
            Take a look at some of our previous projects. We've worked on a wide variety of websites, from e-commerce platforms to personal blogs, all using Tailwind CSS for a modern, responsive design.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
