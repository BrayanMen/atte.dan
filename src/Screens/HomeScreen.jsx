import React from 'react';
import HeroSection from './HeroSection';
import ArticlesSection from './ArticlesSection';
import GalleryScreen from './GalleryScreen';

export default function HomeScreen() {
    return (
        <>
            <HeroSection />
            <ArticlesSection />
            <GalleryScreen/>
        </>
    );
}
