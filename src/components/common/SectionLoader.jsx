import React from "react";

const SectionLoader = () => {
  return (
    <div className="py-32 flex justify-center items-center bg-white">
      <div className="relative">
        {/* Outer Ring */}
        <div className="w-16 h-16 border-2 border-blue-100 border-t-blue-500 rounded-full animate-spin"></div>
        
        {/* Inner Dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
      </div>
    </div>
  );
};

export default SectionLoader;
