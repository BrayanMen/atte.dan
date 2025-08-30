import Button from '../componets/Button.jsx';
import bg1 from '../assets/bg1.png'
import logo from '../assets/logoVerdeOsc.png'

const HeroSection = () => {
    return (
        <section className='min-h-screen relative'>
          <img
                src={bg1}
                alt="fondo"
                className="absolute object-cover -z-10 w-full h-full"
                // style={{
                //     maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%)',
                // }}
            />
            <div className="relative grid grid-cols-2 gap-12 p-12 bg-lavander-web">
                <div className="flex flex-col justify-center">
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
                    <Button className="bg-ebony w-fit text-lavender-web text-2xl">
                        Escribiendo de...
                    </Button>
                </div>
                <div>
                  <img src={logo} alt="logo" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
