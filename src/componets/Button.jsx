import React from 'react';
import { COLORS } from '/src/Utils/COLORS.jsx';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  icon: Icon 
}) => {
  const variants = {
    primary: `px-4 py-2 rounded-full transition-all hover:scale-105 
      text-[${COLORS.text}] bg-[${COLORS.accent2}]`,
    secondary: `px-3 py-1 rounded-md 
      text-[${COLORS.accent3}] border border-[${COLORS.accent2}]`
  };

  return (
    <button 
      onClick={onClick}
      className={`flex items-center space-x-2 ${variants[variant]} ${className}`}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
};

export default Button;