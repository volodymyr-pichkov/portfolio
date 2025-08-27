import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-red-500">
          404
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mt-2 sm:mt-4">
          Page Not Found
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full sm:w-auto px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
