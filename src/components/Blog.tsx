import React from 'react';

export function Blog() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4"> 
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" alt="Blog Post 1" className="w-full h-48 object-cover rounded-lg" />
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">Technology</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Blog Post 1</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                <a href="#" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">Read More</a>
            </div>
        </div>
      </div>
    </div>
  );
}

