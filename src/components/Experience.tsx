import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Cognizant",
      position: "Middleware Developer",
      duration: "July 2022 – Present",
      location: "Mumbai, India",
      description: "Working on enterprise middleware solutions and microservices architecture",
      responsibilities: [
        "Developed and maintained microservices using Spring Boot and Java",
        "Implemented AWS cloud deployments and managed CI/CD pipelines",
        "Collaborated in Agile delivery teams to optimize system performance",
        "Designed REST APIs and integrated with various third-party services",
        "Mentored junior developers and conducted technical reviews"
      ],
      technologies: ["Java", "Spring Boot", "AWS", "Microservices", "REST APIs", "CI/CD"]
    },
    {
      company: "Mindcraft",
      position: "Middleware Developer/Lead",
      duration: "Feb 2019 – June 2022",
      location: "Pune, India",
      description: "Led middleware development projects and enterprise integration solutions",
      responsibilities: [
        "Developed enterprise integrations using IBM Integration Bus and App Connect",
        "Led a team of 5 developers and mentored junior team members",
        "Automated CI/CD pipelines and improved deployment processes",
        "Implemented message queuing solutions using IBM MQ",
        "Collaborated with cross-functional teams for system integration"
      ],
      technologies: ["IBM Integration Bus", "IBM App Connect", "IBM MQ", "DataPower", "Java", "Jenkins"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My journey as a Middleware Developer, building robust enterprise solutions 
            and leading development teams.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center space-x-2 text-blue-600 mb-2">
                    <Briefcase size={16} />
                    <span className="text-sm font-medium">{exp.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.position}</h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-2">{exp.company}</h4>
                  
                  <div className="flex items-center space-x-2 text-gray-500 mb-4">
                    <MapPin size={14} />
                    <span className="text-sm">{exp.location}</span>
                  </div>

                  <p className="text-gray-600 mb-4">{exp.description}</p>

                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-900 mb-2">Key Responsibilities:</h5>
                    <ul className="space-y-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-gray-600 text-sm flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;