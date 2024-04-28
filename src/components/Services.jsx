import React, { useEffect, useState } from 'react';
import build from '../assets/icons/icons8-wall-50.png'
import cobb from '../assets/icons/icons8-shoes-50.png'
import ham from '../assets/icons/icons8-hammer-50.png'
// import wren from '../assets/icons/icons8-wrench-50.png'
import weld from '../assets/icons/icons8-welder-50.png'
import fash from '../assets/icons/icons8-dress-50.png'
import land from '../assets/icons/icons8-landscape-50.png'
import plum from '../assets/icons/icons8-plumber-50.png'
import barb from '../assets/icons/icons8-barber-64.png'
import { Link } from 'react-router-dom';

function Services({artisanListCopy}) {

    // const [categoriesList, setCatList] = useState(artisanListCopy.map(art => {return {title: art.job, value: art.job, img: weld}}));

    // useEffect(() => {
    //     let aFew = [];
    //     const getArtisans = async () => {
    //         categoriesList.forEach((element, index) => {
    //             if (index < 10) {
    //                 aFew.push(element);
    //             }
    //         });

    //         setCatList(aFew);
    //     };
    //     getArtisans();
    // }, []);

    const categories = [
        {img: cobb, title: 'Cobblers', value: 'cobbler'},
        {img: build, title: 'Builders', value: 'building'},
        {img: weld, title: 'Welders', value: 'welder'},
        {img: fash, title: 'Fashion Designers', value: 'fashion designer'},
        {img: land, title: 'Landscapers', value: 'gardening'||'landscapers'},
        {img: plum, title: 'Plumbers', value: 'plumber'},
        {img: ham, title: 'Carpenters', value: 'carpenter'},
        {img: barb, title: 'Hairstylists', value: 'hairstylist'}
    ];
    
    return (
       

<div className=" bg-orange-100 mt-12">
<h2 className="py-8 text-center text-orange-400 font-bold text-2xl">Service Categories</h2>

    <div className="flex flex-wrap px-10 pb-10 justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">

        {
            categories.map((category, key) => {
                return (
                        <div key={key} className="block w-1/2 py-10 justify-around text-center border  border-black rounded-lg lg:w-1/4">
                            <Link to={'/search?' + category.value}>
                                <div>
                                    <img src={category.img} alt={category.title} className="w-10 h-10 block mx-auto"/>
                                    <p className="pt-4 text-sm font-medium capitalize font-body text-orange-900 lg:text-lg md:text-base md:pt-6">
                                        {category.title}
                                    </p>
                                </div>
                            </Link>
                        </div>    
                )
            })
        }
    </div>

</div>
    );
}

export default Services;