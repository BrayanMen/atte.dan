import { Flame, Aperture, MoonStar } from 'lucide-react';

const MainNavigation = () => {
  const navItems = [
    {
      icon: Flame,
      text: 'Biografía'
    },
    {
      icon: Aperture,
      text: 'Fotografia'
    },
    {
      icon: MoonStar,
      text: 'Contacto'
    }
  ];;

  return (
    <nav className="flex space-x-4">
      {navItems.map(({ icon: Icon, text }) => (
        <>          
          <a
            key={text}
            href={`#${text.toLowerCase()}`}
            className={`
            hover:text-opacity-80 transition-all font-semibold 
            text-lavender-web text-2xl hover:text-ebony
            `}
          >
            <Icon className=" inline-block mr-2 w-6" />
            {text}
          </a>
        </>
      ))}
    </nav>
  );
};

export default MainNavigation;