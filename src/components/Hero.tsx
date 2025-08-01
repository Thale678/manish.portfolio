import React from 'react';
import { MapPin, Phone, Mail, Linkedin, Code, Server, Cloud } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  Manish Thale
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 font-medium">
                Middleware & Backend Developer
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                6+ years of experience building robust microservices and integration platforms 
                with Java, Spring Boot, AWS, and IBM middleware tools. Passionate about 
                creating scalable solutions and optimizing system performance.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Code className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">6+ Years</p>
                  <p className="text-sm text-gray-600">Experience</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <Server className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Microservices</p>
                  <p className="text-sm text-gray-600">Architecture</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <Cloud className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">AWS</p>
                  <p className="text-sm text-gray-600">Cloud Expert</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Thane, Maharashtra</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91 8806219018</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>thale678.ht@gmail.com</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg"
              >
                Get In Touch
              </button>
              <a
                href="https://linkedin.com/in/manish-thale"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Code className="h-12 w-12 text-white" />
                    </div>
                    <p className="text-lg font-semibold text-gray-900">Middleware</p>
                    <p className="text-sm text-gray-600">Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;