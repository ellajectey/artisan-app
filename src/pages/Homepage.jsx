import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Process from '../components/Process';
import RatingCard from '../components/RatingCard';
import Services from '../components/Services';
import Topratedcard from '../components/Topratedcard';
import axios from "axios";

function Homepage() {
    const [artisanListCopy, setArtisanListCopy] = useState([]);

    useEffect(() => {
        const getArtisans = async () => {
          try {
            const response = await axios.get(`${process.env.REACT_APP_ARTISCHED_API}/get-artisans`);
            setArtisanListCopy(response.data);
          } catch (error) {
            console.error("Error fetching artisan:", error);
          }
        };
        getArtisans();
      }, []);
    
    return (
        <div id="home">
           <Navbar/>
           <Hero/>
           <Process/>
           {artisanListCopy.length && <Services artisanListCopy={artisanListCopy}/>}
           <Topratedcard/>
           <RatingCard/>
           <Footer/> 
        </div>
    );
}

export default Homepage;