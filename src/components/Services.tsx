import React from 'react';
import { Code2, Gauge, Lock, Workflow } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailored solutions designed to perfectly match your business requirements and workflows.'
  },
  {
    icon: Workflow,
    title: 'Business Process Automation',
    description: 'Streamline operations with intelligent automation tools that boost efficiency.'
  },
  {
    icon: Gauge,
    title: 'Performance Optimization',
    description: 'Enhance your existing systems for maximum speed and reliability.'
  },
  {
    icon: Lock,
    title: 'Secure Architecture',
    description: 'Build with security-first approach ensuring your data remains protected.'
  }
];

export function Services() {
  return (
    <div className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We specialize in developing powerful business tools that drive growth and efficiency
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="absolute -top-6 left-8 bg-blue-500 p-4 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}