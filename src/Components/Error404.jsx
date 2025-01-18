import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-4 sm:px-8">

      <h1 className="text-4xl sm:text-5xl font-bold text-gray-300 tracking-widest mb-6">
        404
      </h1>
      <span className="text-6xl sm:text-9xl font-extrabold text-orange-400 animate-pulse mb-4">
        Oops!
      </span>
      <p className="text-lg sm:text-xl text-center mb-8 max-w-md">
        The page you're looking for doesn't exist or has floated into space. 🚀
      </p>
      <div className="relative flex items-center justify-center w-32 sm:w-48 h-32 sm:h-48 mb-10">
        <div className="absolute w-32 sm:w-40 h-32 sm:h-40 bg-gray-300 rounded-full animate-spin-slow"></div>
        <div className="absolute w-12 sm:w-16 h-12 sm:h-16 bg-orange-300 rounded-full animate-bounce"></div>
      </div>
      <Link
        to="/"
        className="px-6 sm:px-8 py-3 bg-black text-white rounded-lg shadow-lg hover:bg-gray-900 transition duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Error404;