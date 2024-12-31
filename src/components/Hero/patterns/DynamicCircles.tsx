export function DynamicCircles() {
  return (
    <div className="absolute bottom-20 left-40 opacity-10">
      <div className="relative w-48 h-48">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="absolute transform-gpu"
            style={{
              left: `${(i % 3) * 40}px`,
              top: `${Math.floor(i / 3) * 40}px`,
            }}
          >
            <div 
              className="w-8 h-8 bg-gradient-to-br from-blue-500 to-red-500 rounded-full transform-gpu transition-all duration-700"
              style={{
                animation: `pulse ${2 + i * 0.2}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
            <div 
              className="absolute inset-0 bg-gradient-to-br from-blue-400 to-red-400 rounded-full blur-sm transform scale-110"
              style={{
                animation: `pulse ${2 + i * 0.2}s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}