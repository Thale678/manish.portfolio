import React from 'react';
import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Manish Thale</h3>
            <p className="text-gray-400">Middleware Developer | Backend Specialist</p>
          </div>

          <div className="flex justify-center items-center space-x-2 text-gray-400 mb-8">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
            <Code className="h-4 w-4 text-blue-400" />
            <span>and</span>
            <Coffee className="h-4 w-4 text-yellow-600" />
            <span>by Manish</span>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              <div>
                <h4 className="font-semibold mb-2 text-white">Quick Links</h4>
                <div className="space-y-1">
                  <p className="text-gray-400">Home</p>
                  <p className="text-gray-400">About</p>
                  <p className="text-gray-400">Experience</p>
                  <p className="text-gray-400">Skills</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Technologies</h4>
                <div className="space-y-1">
                  <p className="text-gray-400">Java & Spring Boot</p>
                  <p className="text-gray-400">IBM Middleware</p>
                  <p className="text-gray-400">AWS Cloud</p>
                  <p className="text-gray-400">Microservices</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-white">Contact</h4>
                <div className="space-y-1">
                  <p className="text-gray-400">Thane, Maharashtra</p>
                  <p className="text-gray-400">+91 8806219018</p>
                  <p className="text-gray-400">thale678.ht@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {currentYear} Manish Thale. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;