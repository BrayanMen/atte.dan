import { useState } from 'react';
import MainArticles from '../componets/MainArticles';
import {
    BrainCircuit,
    CassetteTape,
    Glasses,
    LucideEye,
    MessageCircleHeart,
    Pizza,
    ScanFace,
} from 'lucide-react';
import fotodan from '../assets/fotodan.jpg';


export default function GalleryScreen() {
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSubcategory, setActiveSubcategory] = useState(null);

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
    const categories = [
        {
            icon: MessageCircleHeart,
            text: 'Todas las fotos',
            subCategories: [],
        },
        {
            icon: ScanFace,
            text: 'Rostros',
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
            icon: LucideEye,
            text: 'Lo que veo',
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

    const portfolioImages = [
        {
            src: 'https://amhigo.com/images/amhiblog/expertos/Luis_Flores_/Foto_portada.jpg',
            alt: 'Mountain landscape',
            className: 'row-span-2',
        },
        {
            src: 'https://st2.depositphotos.com/4509995/51034/i/450/depositphotos_510347724-stock-photo-child-taking-picture-her-mother.jpg',
            alt: 'Misty peaks',
            className: 'col-span-2',
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJp4tXVW3xBmJ9I2lqcMqWY7GTFmbLESGS6oLs6ZaYdzw79dlrlfg5ovcl38lOqBFT1w&usqp=CAU',
            alt: 'Portrait with flower',
            className: 'row-span-2',
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQus30nKuagZf9KelPfK1loY0bsm3cc4Yh5nQ&s',
            alt: 'Abstract architecture',
            className: 'col-span-2',
        },
        {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iYHVEB-BoNL1lqztmQVwXqIceDc1oKG0xA&s',
            alt: 'Street portrait',
            className: 'col-span-2',
        },
        {
            src: 'https://st3.depositphotos.com/1397034/18015/i/450/depositphotos_180155406-stock-photo-nude-brunette-woman-curtain-black.jpg',
            alt: 'Waterfall landscape',
            className: 'row-span-2',
        },
        {
            src: 'https://www.adobe.com/es/creativecloud/photography/discover/media_12acf4b4c1427b99395fba8b5671d74363336bbd4.png?width=750&format=png&optimize=medium',
            alt: 'Elderly man portrait',
            className: '',
        },
    ];

    return (
        <section id="Gallery" className="py-20 px-4 bg-lavander-web">
            <div className="max-w-7xl mx-auto">
                <div className="relative flex items-center h-[400px] justify-center">
                    <div className="absolute w-full items-center  inset-0">
                        <img
                            src={fotodan}
                            alt="foto"
                            className="object-cover w-full grayscale h-[400px] object-center"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>

                    <div className="relative z-10 flex items-end justify-center h-full">
                        <div className="text-center text-white  px-4">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-50 tracking-tight">
                                CAPTURANDO
                                <br />
                                MOMENTOS
                            </h1>
                            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-md mx-auto">
                                A través de mi ojo y la lente de la fotografía, cada historia
                                encuentra su voz.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center my-8">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">FOTOGRAFIA</h2>
                    <div className="flex flex-col items-center justify-center space-x-8 text-sm text-muted-foreground">
                        <MainArticles
                            items={categories}
                            activeCategory={activeCategory}
                            activeSubcategory={activeSubcategory}
                            onCategoryChange={handleCategoryChange}
                            onSubcategoryChange={handleSubcategoryChange}
                        />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-12">
                        {portfolioImages.map((image, index) => (
                            <div
                                key={index}
                                className={`relative overflow-hidden group cursor-pointer ${image.className}`}
                            >
                                <img
                                    src={image.src || ''}
                                    alt={image.alt}
                                    width={200}
                                    height={150}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 grayscale"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
