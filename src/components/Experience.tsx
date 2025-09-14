import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      period: 'Jun 2024 - Present',
      position: 'Project Coordinator',
      company: 'Project Planning Services PLC. (PPS)',
      location: 'Bangkok, Thailand',
      description: 'Currently serving as Civil Engineer on the Carabao Headquarters Project and Design Coordinator for Centara Reserve Krabi Resort.',
      achievements: [
        'Inspect civil and structural works ensuring design, quality, and safety compliance',
        'Coordinate multidisciplinary design team across resort facilities',
        'Reduced approval time to maximum 2 days through streamlined review processes',
        'Maintain incident-free operations through safety protocol enforcement'
      ]
    },
    {
      period: 'Mar 2022 - Aug 2023',
      position: 'Project Engineer',
      company: 'Samsung E&A (Thailand) Co., Ltd.',
      location: 'Chon Buri, Thailand',
      description: 'Supported refinery upgrade execution, ensuring compliance with schedule, safety, and quality standards.',
      achievements: [
        'Supported execution of refinery upgrade with strict safety and quality compliance',
        'Identified risks and proposed mitigation strategies preventing critical path delays',
        'Coordinated procurement for materials, equipment, and services ensuring timely delivery',
        'Led mechanical walkdowns (MCWD) and prepared mark-up drawings for turnover packages'
      ]
    }
  ];

  const certifications = [
    'Autodesk Revit Beginner to Intermediate Level - Udemy',
    'Primavera P6 Project Planning and Scheduling Masterclass - Udemy',
    'Diploma in Project Management - Strategy First University (SFU)'
  ];

  const education = [
    {
      degree: 'Master of Engineering',
      institution: 'Asian Institute of Technology',
      year: '2019 - 2021',
      specialization: 'Construction, Engineering and Infrastructure Management'
    },
    {
      degree: 'Bachelor of Engineering',
      institution: 'West Yangon Technological University',
      year: '2012 - 2018',
      specialization: 'Civil Engineering'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experience & Qualifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven track record of delivering exceptional engineering solutions 
            across diverse projects and industries
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Professional Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Professional Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-blue-600">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{exp.position}</h4>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="mt-2 sm:mt-0 sm:text-right">
                      <div className="flex items-center text-gray-600 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{exp.description}</p>
                  
                  <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-start mb-4">
                      <Building className="h-6 w-6 text-blue-600 mt-1 mr-3" />
                      <div>
                        <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                        <p className="text-blue-600 font-medium">{edu.institution}</p>
                        <p className="text-gray-600 text-sm">{edu.year}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">{edu.specialization}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Skills Highlight */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Technical Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['AutoCAD', 'Revit', 'SAP2000', 'ETABS', 'Project Management', 'Quality Control'].map((skill, index) => (
                  <span key={index} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;