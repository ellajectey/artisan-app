import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Process from '../components/Process';
import RatingCard from '../components/RatingCard';
import Services from '../components/Services';
import Artisancard from '../components/Artisancard';

function Homepage() {
    return (
        <div id="home">
           <Navbar/>
           <Hero/>
           <Process/>
           <Services/>
           <Artisancard/>
           <RatingCard/>
           <Footer/> 
        </div>
    );
}

export default Homepage;