import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import TwoColumnSection from '../components/Navbar/TwoColumnSection';
import BlogSection from '../components/Navbar/BlogSection';
import Section1 from '../components/Navbar/Section1';
import Section2 from '../components/Navbar/Section2';
import { questio } from '../data/questions';

export const questions = questio;



function HomePage() {
    return (
        <div>
            <Navbar />
            <Section2 />
            <Section1 />
            <TwoColumnSection />
            <BlogSection />


        </div>
    );
}

export default HomePage;