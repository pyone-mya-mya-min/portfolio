import React from 'react';
import { Monitor, Wrench, Users, Brain, Globe, Award } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Monitor,
      title: 'Technical Skills',
      skills: [
        'Microsoft 365',
        'Microsoft Project', 
        'Primavera P6',
        'AutoCAD',
        'Revit'
      ]
    },
    {
      icon: Wrench,
      title: 'Engineering Skills',
      skills: [
        'Project Engineering',
        'Site Supervision',
        'Quality Control',
        'Safety Management'
      ]
    },
    {
      icon: Users,
      title: 'Management Skills',
      skills: [
        'Team Coordination',
        'Project Management',
        'Design Coordination',
        'Progress Reporting',
        'Stakeholder Communication'
      ]
    },
    {
      icon: Brain,
      title: 'Soft Skills',
      skills: [
        'Critical Thinking',
        'Problem Solving',
        'Organization',
        'Collaboration',
        'Innovation'
      ]
    },
    {
      icon: Globe,
      title: 'Languages',
      skills: [
        'Burmese (Native)',
        'English (Fluent)',
        'Chinese - Mandarin (Elementary)'
      ]
    },
    {
      icon: Award,
      title: 'Certifications',
      skills: [
        'Autodesk Revit (Udemy)',
        'Primavera P6 (Udemy)',
        'Project Management Diploma (SFU)'
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skill set spanning technical expertise, project management, 
            and engineering solutions for complex construction projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {category.title}
                </h3>
                
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;