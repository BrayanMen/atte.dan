
import Button from '../componets/Button.jsx';
import AnimatedBackground from '../Utils/AnimatedBackground.jsx';

const HeroSection = () => {

  return (
    <div className="relative grid grid-cols-2 gap-12 p-12 bg-lavander-web">
      <div className='flex flex-col justify-center'>
        <h2
          className={`
            text-5xl font-bold mb-6 
            text-ebony
            `}
        >
          Mis Historias,
          <br />
          Mi Mundo
        </h2>
        <p
          className={`
            text-xl mb-8 
            text-space-cadet
            `}
        >
          Explorando narrativas, poesía y momentos que conectan almas.
        </p>
        <Button className="bg-asparagus w-fit text-space-cadet text-2xl">Escribiendo de...</Button>
      </div>
        <AnimatedBackground />
    </div>
  );
};

export default HeroSection;