import { useEffect, useState } from 'react';
import MainArticles from '../componets/MainArticles';
import CardArticle from '../componets/CardArticle';
import ArticlesModal from '../componets/ArticlesModal';
import { BrainCircuit, Cable, CassetteTape, Glasses, MessageCircleHeart, MessageCircleMore, Pizza, Telescope } from 'lucide-react';

const ArticlesSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSubcategory, setActiveSubcategory] = useState(null);

    const onClose = () => {
        setShowDetails(false);
        setSelectedProject(null);
    };

    const categories = [
        {
            icon: MessageCircleHeart,
            text: 'Explora y piensa',
            subCategories: [
                {
                    icon: Telescope,
                    text: 'Explora y piensa',
                },
            ],
        },
        {
            icon: Cable,
            text: 'Letras y Conexiones',
            subCategories: [
                {
                    icon: BrainCircuit,
                    text: 'Desde mí mente',
                },
                {
                    icon: Glasses,
                    text: 'El mundo es un espejo',
                },
                {
                    icon: MessageCircleHeart,
                    text: 'Conectados y perdidos',
                },
                {
                    icon: CassetteTape,
                    text: 'Recomendaciones',
                },
            ],
        },
        {
            icon: MessageCircleMore,
            text: 'De la mente al mundo',
            subCategories: [
                {
                    icon: Glasses,
                    text: 'El mundo en un  espejo',
                },
                {
                    icon: Pizza,
                    text: 'Cuidar y sanar',
                },
            ],
        },
    ];

    const articles = [
        {
            id: 1,
            title: '¿Para Qué Preparamos a Nuestros Hijos?',
            image: 'https://trello.com/1/cards/67ad290aeb512ea5a7609c05/attachments/67ad2960de7566d93bdf552b/download/IMG_20240821_141025.jpg',
            text: 'La sociedad siempre ha estado dividida en clases: alta y baja, con la clase media surgiendo como una variante influenciada por diferencias políticas y económicas. Sin embargo, en todos los países existen extremos económicos bien marcados. Las familias de cada sector viven dentro de sus propias burbujas económicas, determinadas por la capacidad adquisitiva de los padres. Son ellos quienes, según sus ingresos y actividades económicas, definen qué podemos o no tener. En la clase baja, el acceso a empleos está condicionado por la preparación académica, lo que determina el nivel de ingresos, aunque en muchos casos el esfuerzo no se ve justamente remunerado. Estos ingresos suelen destinarse a cubrir necesidades básicas como vivienda, servicios y educación. La educación accesible para estas familias generalmente se limita a escuelas públicas o semi privadas, muchas de ellas subsidiadas por el Estado. Es una realidad que este sistema educativo está diseñado para formar individuos dentro de un estándar social, alineado con las necesidades del país. La pregunta es: ¿Para qué tipo de vida estamos preparando a nuestros hijos en la clase baja? ¿En qué se basa realmente la educación que reciben? ¿Por qué algunas escuelas priorizan la enseñanza de idiomas y con qué propósito?',
            category: 'Explora y piensa',
            subcategory: 'Explora y piensa',
        },
        {
            id: 2,
            title: 'Listen to the Podcast',
            image: 'https://i.pinimg.com/236x/66/73/92/667392e6f7cbb8841f87a3af581bab1f.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            category: 'Letras y Conexiones',
            subcategory: 'Recomendaciones',
        },
    ];

    const filteredArticles = activeSubcategory
        ? articles.filter(article => article.subcategory === activeSubcategory)
        : activeCategory
        ? articles.filter(article => article.category === activeCategory)
        : articles;

    const handleCategoryChange = text => {
        if (activeCategory === text) {
            setActiveCategory(null);
            setActiveSubcategory(null);
        } else {
            setActiveCategory(text);
            setActiveSubcategory(null);
        }
    };

    const handleSubcategoryChange = text => {
        setActiveSubcategory(text);
    };

    useEffect(() => {
        if (articles.length > 0) {
            setSelectedProject(articles[0]);
        }
    }, []);

    return (
        <section className="relative">
            <img
                src="https://i.pinimg.com/736x/d4/2d/4e/d42d4ea79424407ed97df39026f30d5f.jpg"
                alt="fondo"
                className="absolute object-cover -z-10 w-full h-full"
                style={{
                    maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%)',
                }}
            />
            <div className=" z-10 mx-auto p-8">
                <MainArticles
                    items={categories}
                    activeCategory={activeCategory}
                    activeSubcategory={activeSubcategory}
                    onCategoryChange={handleCategoryChange}
                    onSubcategoryChange={handleSubcategoryChange}
                />
                {!showDetails && (
                    <CardArticle
                        articles={filteredArticles}
                        setSelectedProject={setSelectedProject}
                        setShowDetails={setShowDetails}
                    />
                )}
                ;
                {showDetails && selectedProject && (
                    <ArticlesModal article={selectedProject} onClose={onClose} />
                )}
            </div>
        </section>
    );
};

export default ArticlesSection;
