
export function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="container mx-auto">
        <a href="/" className="inline-block">
          <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-red-500 rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
            <span className="text-2xl font-bold text-white">T</span>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"><span className="text-4xl font-bold text-white transition-all">Top Notch</span></div>
          </div>
        </a>
      </div>
    </div>
  );
}