import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Blog from './Blog/Blog';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Footer from './Footer/Footer';
import Parts from './Parts/Parts';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Home;