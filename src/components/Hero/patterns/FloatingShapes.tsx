export function FloatingShapes() {
  return (
    <div className="absolute top-40 left-40 w-60 h-60 opacity-10">
      <div className="absolute inset-0 transform-gpu animate-morph">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-blue-500 rounded-3xl animate-slow-spin" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-red-500 rounded-3xl animate-reverse-spin blur-sm" />
      </div>
      <div className="absolute inset-0 transform-gpu rotate-45 scale-75">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-red-600 rounded-3xl animate-float blur-sm" />
      </div>
    </div>
  );
}