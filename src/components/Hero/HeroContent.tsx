import { ChevronRight } from 'lucide-react';

export function HeroContent() {
  return (
    <div className="max-w-3xl relative z-10">
      <div className="relative">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">
          <span className="relative inline-block">
            <span className="relative z-10">Delivering</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-500 transform skew-x-12" />
          </span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
            Top-Notch
          </span>{' '}
          Software Solutions
        </h1>
      </div>
      
      <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
        We craft exceptional business tools and custom software solutions 
        that elevate your operations to new heights.
      </p>

      <button className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 relative overflow-hidden pointer-events-auto">
        <span className="relative z-10 flex items-center gap-2">
          Let's Build Together
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </button>
    </div>
  );
}