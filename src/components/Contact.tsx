import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 8806219018",
      link: "tel:+918806219018"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Alternate",
      value: "+91 7020259201",
      link: "tel:+917020259201"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "thale678.ht@gmail.com",
      link: "mailto:thale678.ht@gmail.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Thane, Maharashtra",
      link: null
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/manish-thale-6b738297/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 text-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out through any of the following channels. 
                I typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center justify-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 max-w-md mx-auto">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-900 hover:text-blue-600 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-900">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 max-w-md mx-auto">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="mailto:thale678.ht@gmail.com?subject=Job Opportunity"
                  className="block text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  → Email for Job Opportunities
                </a>
                <a
                  href="mailto:thale678.ht@gmail.com?subject=Project Collaboration"
                  className="block text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  → Discuss Project Collaboration
                </a>
                <a
                  href="https://www.linkedin.com/in/manish-thale-6b738297/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                  → Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;