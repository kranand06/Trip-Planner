import React from 'react';

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800">
      
      {/* 404 Text */}
      <h1 className="text-5xl font-bold text-gray-300 tracking-widest mb-6">
        404
      </h1>

      {/* Oops Message */}
      <span className="text-9xl font-extrabold text-orange-400 animate-pulse mb-4">
        Oops!
      </span>


      {/* Message */}
      <p className="text-lg text-center mb-8 max-w-md">
        The page you're looking for doesn't exist or has floated into space. 🚀
      </p>

      {/* Animation */}
      <div className="relative flex items-center justify-center w-48 h-48 mb-10">
        <div className="absolute w-40 h-40 bg-gray-300 rounded-full animate-spin-slow"></div>
        <div className="absolute w-16 h-16 bg-orange-300 rounded-full animate-bounce"></div>
      </div>

      {/* Button */}
      <a
        href="/"
        className="px-8 py-3 bg-black text-white rounded-lg shadow-lg hover:bg-gray-900 transition duration-200"
      >
        Back to Home
      </a>
    </div>
  );
};

export default Error404;