import React, { useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Carabao Headquarter Project',
      category: 'Civil Engineering',
      location: 'Bangkok, Thailand',
      year: 'Aug 2025 - Present',
      image: '/carabo.jpeg',
      description: 'Currently serving as Civil Engineer for the Carabao Headquarter Project, inspecting project and structural works to ensure design, quality, and safety compliance.',
      features: ['Project Works Inspection', 'Quality Compliance', 'Safety Protocols', 'Progress Monitoring']
    },
    {
      id: 2,
      title: 'Centara Reserve Krabi Resort',
      category: 'Design Coordination',
      location: 'Krabi, Thailand',
      year: 'Feb 2025 - Present',
      image: '/krabi.jpeg',
      description: 'Design Coordinator for luxury resort project, coordinating multidisciplinary design team and maintaining drawing logs with streamlined review processes.',
      features: ['Design Coordination', 'Drawing Management', 'Client Reporting', 'Team Collaboration']
    },
    {
      id: 3,
      title: 'Canopy by Hilton Bangkok',
      category: 'Project Coordination',
      location: 'Bangkok, Thailand',
      year: 'Jun 2024 - Aug 2025',
      image: '/canopy.jpeg',
      description: 'Project Coordinator for Hilton hotel project, coordinating communication among international consultants, contractors, and Hilton team.',
      features: ['International Coordination', 'Progress Monitoring', 'Risk Management', 'Client Relations']
    },
    {
      id: 4,
      title: 'Thai Oil Clean Fuel Project (CFP)',
      category: 'Project Engineering',
      location: 'Chon Buri, Thailand',
      year: 'Mar 2022 - Aug 2023',
      image: '/samsung.jpeg',
      description: 'Project Engineer supporting refinery upgrade execution, ensuring compliance with schedule, safety, and quality standards.',
      features: ['Refinery Engineering', 'Safety Compliance', 'Procurement Coordination', 'Progress Reporting']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing successful project engineering projects across various sectors, 
            demonstrating expertise in construction development and construction management
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Project Images */}
          <div className="lg:col-span-7">
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{projects[activeProject].location}</span>
                  <Calendar className="h-4 w-4 ml-4 mr-2" />
                  <span className="text-sm">{projects[activeProject].year}</span>
                </div>
                <h3 className="text-2xl font-bold">{projects[activeProject].title}</h3>
                <p className="text-blue-200 text-sm">{projects[activeProject].category}</p>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-xl p-8 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {projects[activeProject].title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {projects[activeProject].description}
              </p>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Project Features</h4>
              <ul className="space-y-2 mb-8">
                {projects[activeProject].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeProject === index
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;