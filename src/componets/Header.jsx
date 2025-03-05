import React from 'react';
import MainNavigation from '../componets/MainNavigation.jsx';
import logo from '../assets/Logo.png'
import logo2 from '../assets/Logo2.png'

const Header = () => {
  return (
    <header 
      className={`
        relative z-10 p-6 flex justify-between items-center 
        bg-space-cadet bg-opacity-30 border-b border-asparagus
      `}
    >
      <h1 
        className={`
          text-3xl font-bold tracking-wide 
          text-olivine
        `}
      >
       <img src={logo} alt="logo" className="top-0 left-15 h-20"/>
      </h1>
      <MainNavigation />
    </header>
  );
};

export default Header;