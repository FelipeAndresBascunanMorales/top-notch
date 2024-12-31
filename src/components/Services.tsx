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
    <div className="relative py-32 overflow-hidden">
      {/* Geometric Background Patterns */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full" />
        <div className="absolute top-60 right-20 w-60 h-60 bg-red-500 rotate-45 transform" />
        <div className="absolute bottom-20 left-1/2 w-40 h-40 bg-yellow-500 rounded-lg -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 relative inline-block">
            Our Expertise
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500" />
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-8">
            We specialize in developing powerful business tools that drive growth and efficiency
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl text-white shadow-lg inline-block group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}