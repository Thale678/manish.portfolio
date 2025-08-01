import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My educational foundation in Computer Science that laid the groundwork 
            for my career in software development.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Bachelor of Engineering</h3>
                <p className="text-lg text-blue-600 font-semibold">Computer Science</p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Mumbai University</h4>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>2014 – 2018</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>Mumbai, Maharashtra</span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h5 className="font-semibold text-gray-900 mb-3">Key Highlights:</h5>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Strong foundation in computer science fundamentals including data structures, algorithms, and software engineering</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Specialized in software development, database management, and system architecture</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Completed projects in Java, web development, and enterprise application development</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-gray-700">Developed strong analytical and problem-solving skills through rigorous academic curriculum</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Certifications Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Professional Development</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">AWS Certified</h4>
              <p className="text-gray-600 text-sm">Cloud Solutions Architecture and Deployment</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
              <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-teal-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Spring Certified</h4>
              <p className="text-gray-600 text-sm">Spring Boot and Microservices Development</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
              <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-6 w-6 text-indigo-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">IBM Certified</h4>
              <p className="text-gray-600 text-sm">Integration Bus and Middleware Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;