import { useEffect, useState } from "react";
import MainArticles from "../componets/MainArticles";
import { X } from "lucide-react";

const ArticlesSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const onClose = () => {
    setShowDetails(false);
    setSelectedProject(null);
  };

  const articles = [
    {
      id: 1,
      title: "¿Para Qué Preparamos a Nuestros Hijos?",
      image: "https://trello.com/1/cards/67ad290aeb512ea5a7609c05/attachments/67ad2960de7566d93bdf552b/download/IMG_20240821_141025.jpg",
      text: "La sociedad siempre ha estado dividida en clases: alta y baja, con la clase media surgiendo como una variante influenciada por diferencias políticas y económicas. Sin embargo, en todos los países existen extremos económicos bien marcados. Las familias de cada sector viven dentro de sus propias burbujas económicas, determinadas por la capacidad adquisitiva de los padres. Son ellos quienes, según sus ingresos y actividades económicas, definen qué podemos o no tener. En la clase baja, el acceso a empleos está condicionado por la preparación académica, lo que determina el nivel de ingresos, aunque en muchos casos el esfuerzo no se ve justamente remunerado. Estos ingresos suelen destinarse a cubrir necesidades básicas como vivienda, servicios y educación. La educación accesible para estas familias generalmente se limita a escuelas públicas o semi privadas, muchas de ellas subsidiadas por el Estado. Es una realidad que este sistema educativo está diseñado para formar individuos dentro de un estándar social, alineado con las necesidades del país. La pregunta es: ¿Para qué tipo de vida estamos preparando a nuestros hijos en la clase baja? ¿En qué se basa realmente la educación que reciben? ¿Por qué algunas escuelas priorizan la enseñanza de idiomas y con qué propósito?",
    },
    {
      id: 2,
      title: "Listen to the Podcast",
      image: "https://i.pinimg.com/236x/66/73/92/667392e6f7cbb8841f87a3af581bab1f.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    }
  ];

  useEffect(() => {
    if (articles.length > 0) {
      setSelectedProject(articles[0]);
    }
  }, []);

  const ArticlesModal = ({ article, onClose }) => {
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
      <div className="mt-8 w-fit mx-auto">
        <div className="bg-space-cadet text-white p-8">
        <div className="relative flex justify-end mb-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-lavender-web hover:text-red-600 transition-colors"
            aria-label="Close expanded view"
          >
            <X size={42} />
          </button>
        </div>
          <div className="space-y-6 ">
            <div className="bg-olivine text-space-cadet px-4 py-1 inline-block font-poppins">
              ARTICULO
            </div>
            <h1 className="text-3xl font-light font-poppins">{article.title}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-4/6 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-space-cadet/50 to-transparent" />
              </div>
              <div className="space-y-4">
                <p className="font-light leading-relaxed text-lavender-web font-poppins">
                  {article.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative">
        <img src="https://i.pinimg.com/736x/d4/2d/4e/d42d4ea79424407ed97df39026f30d5f.jpg"
          alt="fondo"
          className='absolute object-cover -z-10 w-full h-full'
          style={{
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%)'
          }}
        /> 
      <div className=" z-10 mx-auto p-8">
          <MainArticles />

        {!showDetails && (
          <div className="grid grid-cols-1 mt-8 md:grid-cols-3 py-4 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="bg-white shadow-xl">
                <div className="">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="object-cover object-[35%_35%] p-3 w-full h-52 "
                    />
                  </div>
                  <div className="p-3 top-0 space-y-2">
                    <div className="flex items-baseline space-x-2">
                      <h3 className="text-xl font-light text-ebony font-poppins">{article.title}</h3>
                    </div>
                    <p className="line-clamp-3 text-sm text-rose-quartz font-light leading-relaxed font-poppins">
                      {article.text} ...
                    </p>
                    <button className="mt-4 text-xs uppercase tracking-wider border border-olivine text-ebony px-6 py-2 hover:bg-olivine hover:text-white transition-colors font-poppins"
                      onClick={() => {
                        setSelectedProject(article);
                        setShowDetails(true);
                      }}>
                      Leer más
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )};

        {showDetails && selectedProject && (
          <ArticlesModal
            article={selectedProject}
            onClose={onClose}
          />
        )}

      </div>
    </section>
  );
};

export default ArticlesSection;