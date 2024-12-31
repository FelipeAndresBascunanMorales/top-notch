import React from 'react';
import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <div className="relative py-32 overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Let's discuss how we can transform your business tools to the next level
          </p>
          
          <a 
            href="mailto:contact@topnotch.cl"
            className="inline-flex items-center gap-3 text-xl font-medium text-blue-500 hover:text-blue-600 transition-colors duration-300"
          >
            <Mail className="w-6 h-6" />
            contact@topnotch.cl
          </a>
        </div>
      </div>
    </div>
  );
}