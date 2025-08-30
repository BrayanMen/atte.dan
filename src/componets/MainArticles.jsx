import Button from './Button';

function MainArticles({ items, activeCategory, activeSubcategory, onCategoryChange, onSubcategoryChange }) {
    return (
        <>
            <div className="flex space-x-4 text-xl z-1 justify-end items-center">
                {items.map(({ icon: Icon, text }) => (
                    <Button
                        key={text}
                        className={`bg-ebony text-lavender-web ${activeCategory === text ? 'ring-2 ring-offset-2 ring-asparagus' : ''}`}
                        onClick={() => onCategoryChange(text)}
                    >
                        <Icon className="mr-2 h-4 w-4" />
                        {text}
                    </Button>
                ))}
            </div>
            {activeCategory && (
                <div className="flex m-4 text-xl space-x-4 items-center">
                    {items
                        .find(cat => cat.text === activeCategory)
                        ?.subCategories.map(({ icon: Icon, text }) => (
                            <Button
                                key={text}
                                className={`bg-asparagus text-lavender-web ${activeSubcategory === text ? 'ring-2 ring-offset-2 ring-asparagus' : ''}`}
                                onClick={() => onSubcategoryChange(text)}
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
