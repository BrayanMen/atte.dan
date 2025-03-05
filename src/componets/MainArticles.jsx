import { useState } from 'react'
import Button from './Button';
import { MessageCircleHeart, Telescope, BrainCircuit, CassetteTape, Glasses, MessageCircleMore , Cable, Pizza } from 'lucide-react';

function MainArticles() {
    const [activeCategory, setActiveCategory] = useState(null);

    const categories = [
        {
            icon: MessageCircleHeart,
            text: 'Explora y piensa',
            subCategories: [
                {
                    icon: Telescope,
                    text: 'Explora y piensa',
                }
            ]
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
            ]
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
                }
            ]
        }
    ];

    const handleCategoryClick = (text) => {
        setActiveCategory(activeCategory === text ? null : text);
    };
    return (
        <>            
            <div className="flex space-x-4 text-xl z-1 justify-end items-center">
                {categories.map(({ icon: Icon, text }) => (
                    <Button
                        key={text}
                        className={`bg-asparagus text-lavender-web ${activeCategory === text ? 'ring-2 ring-offset-2 ring-asparagus' : ''
                            }`}
                        onClick={() => handleCategoryClick(text)}
                    >
                        <Icon className="mr-2 h-4 w-4" />
                        {text}
                    </Button>
                ))}
            </div>
            {activeCategory && (
                <div className="flex m-4 text-xl space-x-4 items-center">
                    {categories
                        .find(cat => cat.text === activeCategory)
                        ?.subCategories.map(({ icon: Icon, text }) => (
                            <Button
                                key={text}

                                className={`bg-asparagus text-lavender-web ${activeCategory === text ? 'ring-2 ring-offset-2 ring-asparagus' : ''
                                    }`}
                            >
                                <Icon className="mr-2 h-4 w-4" />
                                {text}
                            </Button>
                        ))}
                </div>
            )}
        </>
    )
}

export default MainArticles;
