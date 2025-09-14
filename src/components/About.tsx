import React from 'react';
import { Award, Users, Calendar, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Calendar, number: '2+', label: 'Years Experience' },
    { icon: Target, number: '10+', label: 'Projects Completed' },
    { icon: Users, number: '5+', label: 'Team Members Led' },
    { icon: Award, number: '3+', label: 'Certifications' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated civil engineer with extensive experience in infrastructure development, 
            project management, and sustainable construction practices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Background</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As a dedicated Project Coordinator and Civil Engineer, I bring expertise in project management 
              and engineering with strong skills in organization, problem-solving, and collaboration. 
              Currently working on major infrastructure projects including the Carabao Headquarters Project.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My experience spans from luxury resort developments to industrial facilities, where I've 
              successfully coordinated multidisciplinary teams, managed design reviews, and ensured 
              compliance with safety and quality standards across all project phases.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Project Coordination & Management</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Civil & Structural Engineering</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Design Coordination & Review</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Safety & Quality Compliance</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Core Competencies</h4>
              <div className="space-y-4">
                {[
                  { skill: 'Project Coordination', level: 95 },
                  { skill: 'AutoCAD & Revit', level: 85 },
                  { skill: 'Site Supervision', level: 90 },
                  { skill: 'Quality Control', level: 88 },
                  { skill: 'Team Coordination', level: 92 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{item.skill}</span>
                      <span className="text-sm text-gray-500">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                <IconComponent className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;