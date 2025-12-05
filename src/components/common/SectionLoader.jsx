import React from "react";

const SectionLoader = () => {
  return (
    <div className="py-24 flex justify-center items-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-purple-600/20 border-t-purple-600 rounded-full animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-600 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};
export default SectionLoader;
