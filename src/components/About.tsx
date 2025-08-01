import React from 'react';
import { CheckCircle, Code, Server, Cloud, Database } from 'lucide-react';

const About = () => {
  const highlights = [
    "6+ years of IT experience in full lifecycle software development",
    "Skilled in Spring Boot, microservices, REST APIs, CI/CD pipelines, and AWS",
    "Proficient in IBM Integration Bus, App Connect, DataPower, IBM MQ, and Kong API Gateway",
    "Strong background in enterprise integration and system optimization",
    "Experience in Agile delivery and mentoring junior developers"
  ];

  const expertise = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Backend Development",
      description: "Java, Spring Boot, microservices architecture, and RESTful APIs"
    },
    {
      icon: <Server className="h-8 w-8 text-teal-600" />,
      title: "Integration Platforms",
      description: "IBM Integration Bus, App Connect, DataPower, and enterprise messaging"
    },
    {
      icon: <Cloud className="h-8 w-8 text-indigo-600" />,
      title: "Cloud & DevOps",
      description: "AWS services, CI/CD pipelines, containerization, and deployment automation"
    },
    {
      icon: <Database className="h-8 w-8 text-green-600" />,
      title: "Data & Messaging",
      description: "IBM MQ, message queuing, data transformation, and API gateway management"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm a passionate Middleware Developer with extensive experience in building 
            scalable enterprise solutions and integration platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Professional Summary */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Summary</h3>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">10+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">2</div>
                <div className="text-gray-600">Companies</div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Areas of Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((area, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="mb-4">{area.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{area.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;