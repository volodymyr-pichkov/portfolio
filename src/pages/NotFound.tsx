const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-red-500">
          404
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mt-2 sm:mt-4">
          Page Not Found
        </p>
      </div>
    </div>
  );
};

export default NotFound;
