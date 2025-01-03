import { GeometricPatterns } from './GeometricPatterns';
import { HeroContent } from './HeroContent';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/80" />
      </div>

      {/* Geometric Patterns */}
      <GeometricPatterns />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 pointer-events-none">
        <HeroContent />
      </div>
    </div>
  );
}