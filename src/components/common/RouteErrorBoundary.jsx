import React from "react";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RouteErrorBoundary = ({ error, resetError }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    resetError?.();
    navigate(-1);
  };

  const handleGoHome = () => {
    resetError?.();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-orange-600/20 rounded-full flex items-center justify-center border-2 border-orange-600/50 animate-pulse">
            <AlertCircle className="w-8 h-8 text-orange-500" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-3">Page Load Error</h2>

        <p className="text-gray-400 mb-8">
          This page couldn't be loaded properly. Please try again.
        </p>
        {process.env.NODE_ENV === "development" && error && (
          <div className="mb-6 p-4 bg-black/50 rounded-lg border border-orange-900/30 text-left">
            <p className="text-orange-400 text-sm font-mono">
              {error.message || error.toString()}
            </p>
          </div>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleGoBack}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>

          <button
            onClick={handleGoHome}
            className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default RouteErrorBoundary;
