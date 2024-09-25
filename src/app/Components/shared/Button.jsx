import React from 'react'

const Button = ({ children, onClick, className, content, variant = 'primary', size = 'md', ...props }) => {
  const baseStyles = 'rounded-lg py-2 transition-colors';
  
  const variants = {
    primary: 'bg-[#9280D9] rounded-lg text-white py-2  hover:bg-gradient-to-r from-[#A54A99] to-[#490692] duration-300 mt-2',
    secondary: '',
    outline: 'bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white',
    addButtons: 'bg-gray-700  text-white w-[150px] h-[40px] py-2 flex justify-center items-center rounded-md hover:bg-gray-800 '
  };

  const sizes = {
    sm: 'text-sm px-2 py-1',
    md: 'text-md px-4 py-2',
    lg: 'text-lg px-6 py-3',        
  };

  const variantClasses = variants[variant] || variants.primary || variants.secondary 
  const sizeClasses = sizes[size] || sizes.md;

  return (
    <button 
      className={`${baseStyles} ${variantClasses} ${sizeClasses} ${className || ''}`}
      onClick={onClick}
      {...props}
    >
      {content || children}
    </button>
  );
};

export default Button
