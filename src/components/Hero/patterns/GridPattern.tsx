export function GridPattern() {
  return (
    <div className="absolute w-full opacity-20 z-10 top-24">
      <div className="grid grid-cols-6 gap-2 transform-gpu transition-transform duration-700">
        {Array.from({ length: 54 }).map((_, i) => (
          <div 
            key={i} 
            className="group relative"
            style={{ 
              animation: `matrix-float ${4 + i % 3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          >
            <div 
              className="w-full h-24 rounded transform transition-all duration-200 group-hover:scale-110 group-hover:rotate-45"
              style={{ 
                animation: `matrix-pulse ${3 + i % 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`,
                backgroundColor: `hsl(${210 + i * 8}, 70%, ${50 + (i % 3) * 5}%)`,
                boxShadow: `0 0 20px hsla(${210 + i * 8}, 70%, 50%, 0.3)`,
              }}
            />
            <div 
              className="absolute inset-0 rounded opacity-50 blur-sm"
              style={{ 
                animation: `matrix-glow ${2 + i % 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.15}s`,
                backgroundColor: `hsl(${210 + i * 8}, 70%, 50%)`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}