import React from 'react';
import build from '../assets/icons/icons8-wall-50.png'
import cobb from '../assets/icons/icons8-shoes-50.png'
import ham from '../assets/icons/icons8-hammer-50.png'
import wren from '../assets/icons/icons8-wrench-50.png'
import weld from '../assets/icons/icons8-welder-50.png'
import fash from '../assets/icons/icons8-dress-50.png'
import land from '../assets/icons/icons8-landscape-50.png'
import plum from '../assets/icons/icons8-plumber-50.png'
import barb from '../assets/icons/icons8-barber-64.png'

function services(props) {
    return (
       

<div className=" bg-yellow-200 mt-12">
<h2 className="py-8 text-center text-orange-400 font-bold text-2xl">Service Categories</h2>

    <div className="flex flex-wrap px-10 pb-10 justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">

        <a href="#" className="block w-1/2 py-10 justify-around text-center border  border-black rounded-lg lg:w-1/4">
            <div>
                <img src={cobb} className="block mx-auto"/>

                <p className="pt-4 text-sm font-medium capitalize font-body text-orange-900 lg:text-lg md:text-base md:pt-6">
                    Cobblers
                </p>
            </div>
        </a>

        <a href="#" className="block w-1/2 py-10 text-center border border-black rounded-lg lg:w-1/4">
            <div>
                <img src={build} className="block mx-auto"/>

                <p className="pt-4 text-sm font-medium capitalize font-body text-orange-900 lg:text-lg md:text-base md:pt-6">
                    Builders
                </p>
            </div>
        </a>

        <a href="#" className="block w-1/2 py-10 text-center border border-black rounded-lg lg:w-1/4">
            <div>
                <img src={weld} className="block mx-auto"/>

                <p className="pt-4 text-sm font-medium capitalize font-body text-orange-900 lg:text-lg md:text-base md:pt-6">
                    Welders
                </p>
            </div>
        </a>

        <a href="#" className="block w-1/2 py-10 text-center border border-black rounded-lg lg:w-1/4">
            <div>
                <img src={fash} className="block mx-auto"/>

                <p className="pt-4 text-sm font-medium capitalize font-body text-orange-900 lg:text-lg md:text-base md:pt-6">
                    Fashion Designers
                </p>
            </div>
        </a>

        <a href="#" className="block w-1/2 py-10 text-center border border-black rounded-lg lg:w-1/4">
            <div>
                <img src={land}
                className="block mx-auto"/>

                <p className="pt-4 text-sm font-medium capitalize font-body text-orange-900 lg:text-lg md:text-base md:pt-6">
                    Landscapers
                </p>
            </div>
        </a>

        <a href="#" className="block w-1/2 py-10 text-center border border-black rounded-lg lg:w-1/4">
            <div>
                <img src={plum} className="block mx-auto"/>

                <p className="pt-4 text-sm font-medium capitalize font-body text-orange-900 lg:text-lg md:text-base md:pt-6">
                    Plumbers
                </p>
            </div>
        </a>

        <a href="#" className="block w-1/2 py-10 text-center border border-black rounded-lg lg:w-1/4">
            <div>
                <img src={ham} className="block mx-auto"/>

                <p className="pt-4 text-sm font-medium capitalize font-body text-orange-900 lg:text-lg md:text-base md:pt-6">
                    Carpenters
                </p>
            </div>
        </a>

        <a href="#" className="block w-1/2 py-10 text-center border border-black rounded-lg lg:w-1/4">
            <div>
                <img src={barb} className="block mx-auto"/>

                <p className="pt-4 text-sm font-medium capitalize font-body text-orange-900 lg:text-lg md:text-base md:pt-6">
                    Hairstylists
                </p>
            </div>
        </a>

    </div>

</div>
    );
}

export default services;