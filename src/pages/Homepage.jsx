import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Process from '../components/Process';

function Homepage() {
    return (
        <div>
           <Navbar/>
           <Hero/>
           <Process/>
           <Footer/> 
        </div>
    );
}

export default Homepage;