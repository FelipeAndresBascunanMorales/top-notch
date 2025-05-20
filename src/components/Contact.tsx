import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <div className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Geometric Patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500" />
        <div className="absolute top-10 right-10 w-32 h-32 border-8 border-blue-500/10 rounded-full" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-red-500/5 rotate-45 transform" />
        <div className="absolute top-40 left-1/2 w-20 h-20 bg-yellow-500/5 rounded-lg" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Let's discuss how I can transform your business tools to the next level
            </p>
            
            <div className="pt-8">
              <a 
                href="mailto:contact@topnotch.cl"
                className="inline-flex items-center gap-3 text-xl font-medium relative group py-2 px-6"
              >
                <span className="absolute inset-0 w-full h-full bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Mail className="w-6 h-6 text-blue-500 relative z-10" />
                <span className="text-blue-500 relative z-10">contact@topnotch.cl</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}