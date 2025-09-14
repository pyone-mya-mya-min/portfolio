import React from 'react';
import { Building, Cog, Shield, Users, ClipboardCheck, Lightbulb } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Building,
      title: 'Civil Engineering',
      description: 'Civil and structural works inspection, design compliance verification, and quality assurance for construction projects.'
    },
    {
      icon: Cog,
      title: 'Project Coordination',
      description: 'Comprehensive project coordination services including team management, progress monitoring, and stakeholder communication.'
    },
    {
      icon: Shield,
      title: 'Safety & Quality Control',
      description: 'Implementation of safety protocols and quality control measures to ensure compliance with industry standards.'
    },
    {
      icon: Users,
      title: 'Design Coordination',
      description: 'Coordination of multidisciplinary design teams, drawing management, and design review processes.'
    },
    {
      icon: ClipboardCheck,
      title: 'Progress Reporting',
      description: 'Detailed progress reporting and documentation to keep stakeholders informed and projects on track.'
    },
    {
      icon: Lightbulb,
      title: 'Technical Review',
      description: 'Shop drawing reviews, material submittal approvals, and technical documentation management.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Engineering Services
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive civil engineering services tailored to meet your project requirements 
            with precision, safety, and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="mr-2">Learn More</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Start Your Next Project?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
            Let's discuss how we can bring your engineering vision to life with our expertise 
            and commitment to excellence.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;