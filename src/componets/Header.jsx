import MainNavigation from '../componets/MainNavigation.jsx';
import logo from '../assets/Logo.png'


const Header = () => {
  return (
    <header 
      className={`
        relative z-10 p-6 flex justify-between items-center 
        bg-ebony bg-opacity-80 border-b border-asparagus
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