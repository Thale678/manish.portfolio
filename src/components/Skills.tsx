import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, 
  Server, 
  Cloud, 
  Database, 
  GitBranch, 
  Settings, 
  Monitor,
  Zap,
  Shield,
  Layers
} from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedElements, setAnimatedElements] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const tabs = [
    {
      id: 0,
      title: "Programming Languages",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "Java", description: "6+ years of enterprise Java development including Java 8/11/17 features, multithreading, collections framework, exception handling, and design patterns. Extensive experience in building scalable backend applications and enterprise solutions." },
        { name: "Spring Boot", description: "Expert in Spring Boot framework for building production-ready microservices. Proficient in Spring Security, Spring Data JPA, Spring Cloud, dependency injection, AOP, and creating RESTful web services with comprehensive testing strategies." },
        { name: "JavaScript", description: "Full-stack JavaScript development including ES6+ features, async/await, promises, DOM manipulation, and Node.js for backend services. Experience with modern JavaScript frameworks and build tools for enterprise applications." },
        { name: "SQL", description: "Advanced SQL skills including complex joins, subqueries, stored procedures, triggers, indexing strategies, query optimization, and database performance tuning. Experience with Oracle, MySQL, and PostgreSQL databases." }
      ]
    },
    {
      id: 1,
      title: "Microservices & APIs",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "REST APIs", description: "Expert in designing and implementing RESTful web services following industry best practices. Proficient in API versioning, documentation with Swagger/OpenAPI, authentication/authorization, rate limiting, and comprehensive error handling strategies." },
        { name: "Microservices", description: "Extensive experience in microservices architecture including service decomposition, inter-service communication, distributed data management, circuit breakers, service discovery, and implementing resilience patterns for fault-tolerant systems." },
        { name: "Reactive Programming", description: "Proficient in reactive programming paradigms using Spring WebFlux, RxJava, and reactive streams. Experience in building non-blocking, asynchronous applications that handle high-throughput and low-latency requirements efficiently." },
        { name: "API Gateway", description: "Hands-on experience with Kong Gateway for API management, including request/response transformation, authentication, rate limiting, load balancing, monitoring, and implementing comprehensive API security policies." }
      ]
    },
    {
      id: 2,
      title: "IBM Middleware",
      icon: <Layers className="h-5 w-5" />,
      skills: [
        { name: "IBM Integration Bus", description: "3+ years of experience with IBM IIB/ACE for enterprise service bus implementations. Skilled in message flows, ESQL programming, message routing, transformation, and integration with various enterprise systems and protocols." },
        { name: "IBM App Connect", description: "Proficient in IBM App Connect Enterprise for cloud and on-premises integration solutions. Experience in creating integration flows, API management, event-driven architectures, and connecting diverse applications and data sources." },
        { name: "IBM MQ", description: "Expert in IBM MQ for reliable messaging solutions including queue management, clustering, security configuration, performance tuning, and implementing robust message-driven architectures for enterprise applications." },
        { name: "DataPower", description: "Hands-on experience with IBM DataPower Gateway for XML/JSON processing, protocol transformation, security enforcement, load balancing, and implementing comprehensive API security and governance policies." }
      ]
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      icon: <Cloud className="h-5 w-5" />,
      skills: [
        { name: "AWS", description: "Comprehensive AWS experience including EC2, S3, Lambda, RDS, API Gateway, CloudFormation, and ECS. Skilled in designing scalable cloud architectures, implementing serverless solutions, and optimizing costs while ensuring high availability and security." },
        { name: "Docker", description: "Expert in containerization using Docker for application packaging, deployment, and scaling. Experience with Docker Compose, multi-stage builds, container optimization, security best practices, and container orchestration strategies." },
        { name: "Jenkins", description: "Extensive experience in Jenkins for CI/CD automation including pipeline creation, build automation, deployment strategies, plugin management, and integrating with various tools for comprehensive DevOps workflows." },
        { name: "CI/CD Pipelines", description: "Proficient in designing and implementing end-to-end CI/CD pipelines using Jenkins, GitLab CI, and AWS CodePipeline. Experience in automated testing, code quality gates, deployment strategies, and infrastructure as code practices." }
      ]
    }
  ];

  const tools = [
    { name: "GitHub", icon: <GitBranch className="h-8 w-8" />, color: "text-gray-700" },
    { name: "Jenkins", icon: <Settings className="h-8 w-8" />, color: "text-blue-600" },
    { name: "AWS", icon: <Cloud className="h-8 w-8" />, color: "text-orange-500" },
    { name: "Docker", icon: <Monitor className="h-8 w-8" />, color: "text-blue-500" },
    { name: "IntelliJ", icon: <Code className="h-8 w-8" />, color: "text-purple-600" },
    { name: "Postman", icon: <Zap className="h-8 w-8" />, color: "text-orange-600" },
    { name: "ELK Stack", icon: <Database className="h-8 w-8" />, color: "text-yellow-600" },
    { name: "Kong Gateway", icon: <Shield className="h-8 w-8" />, color: "text-green-600" }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 ${
            isVisible ? 'animate-bounceIn' : 'opacity-0'
          }`}>
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My technical expertise spans across various technologies and platforms, 
            with deep knowledge in middleware development and cloud solutions.
          </p>
        </div>

        {/* Tabbed Skills Section */}
        <div className={`mb-16 ${
          isVisible ? 'animate-slideInUp' : 'opacity-0'
        }`}>
          {/* Tab Navigation */}
          <div className={`flex flex-wrap justify-center mb-8 bg-gray-100 rounded-xl p-2 max-w-4xl mx-auto ${
            isVisible ? 'animate-flipIn' : 'opacity-0'
          }`} style={{ animationDelay: '0.3s' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-300 flex-1 sm:flex-none min-w-0 transform ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md transform scale-105 tab-glow'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200 hover:scale-102'
                }`}
              >
                {tab.icon}
                <span className="text-sm sm:text-base truncate">{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gray-50 rounded-xl p-6 sm:p-8 overflow-hidden">
            <div 
              key={activeTab}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {tabs[activeTab].skills.map((skill, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-6 shadow-sm border border-gray-200 skill-card-hover ${
                    isVisible 
                      ? index % 2 === 0 
                        ? 'animate-slideInLeft' 
                        : 'animate-slideInRight'
                      : 'opacity-0'
                  }`}
                  style={{ 
                    animationDelay: isVisible ? `${0.6 + index * 0.15}s` : '0ms'
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0 ${
                      isVisible ? 'animate-pulse' : ''
                    }`} style={{ animationDelay: `${1 + index * 0.1}s` }}></div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{skill.name}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className={`mb-8 ${
          isVisible ? 'animate-slideInUp' : 'opacity-0'
        }`}>
          <h3 className={`text-2xl font-semibold text-gray-900 mb-8 text-center ${
            isVisible ? 'animate-zoomInRotate' : 'opacity-0'
          }`} style={{ animationDelay: '0.7s' }}>
            Tools & Technologies
          </h3>
        </div>
        
        {/* Tools Grid with 3D Flip Animation */}
        <div className={`${
          isVisible ? 'animate-slideInUp' : 'opacity-0'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-500 group cursor-pointer skill-card-hover ${
                  isVisible ? 'animate-flipIn animate-float' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: isVisible ? `${1 + index * 0.1}s` : '0ms',
                  animationDuration: `${3 + (index % 3)}s`
                }}
                onMouseEnter={() => {
                  setAnimatedElements(prev => new Set([...prev, index]));
                }}
              >
                <div className={`${tool.color} group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 mb-3 ${
                  animatedElements.has(index) ? 'animate-pulse' : ''
                }`}>
                  {tool.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 text-center group-hover:text-blue-600 transition-colors duration-200">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;