import React from 'react';

const VARIANTS = {
  primary: 'relative bg-black text-white hover:text-gray-100',
  secondary: 'bg-transparent border border-white/20 text-white hover:bg-white/5',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
  ghost: 'text-gray-600 hover:bg-gray-100',
};

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-8 py-4 text-base', // Updated to match design
  lg: 'px-10 py-5 text-lg',
};

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 cursor-pointer';
  const variantStyles = VARIANTS[variant] || VARIANTS.primary;
  const sizeStyles = SIZES[size] || SIZES.md;

  if (variant === 'primary') {
    return (
      <div className={`relative group inline-block ${className}`}>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
        <button
          className={`${baseStyles} ${variantStyles} ${sizeStyles} w-full`}
          onClick={onClick}
          {...props}
        >
          {children}
        </button>
      </div>
    );
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
