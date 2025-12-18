import React from 'react';
import { ArrowRight } from 'lucide-react';

const VARIANTS = {
  primary: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-blue-glow-lg hover:scale-105',
  secondary: 'bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 shadow-soft',
  outline: 'border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white',
  ghost: 'text-slate-500 hover:text-blue-600 hover:bg-blue-50',
};

const SIZES = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon = false,
  onClick, 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-300 cursor-pointer';
  const variantStyles = VARIANTS[variant] || VARIANTS.primary;
  const sizeStyles = SIZES[size] || SIZES.md;

  return (
    <button
      className={`group ${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
      {icon && (
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      )}
    </button>
  );
};

export default Button;
