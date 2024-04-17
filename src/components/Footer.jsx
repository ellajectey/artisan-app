import React from 'react';
import img from "../assets/artisched-p-noBg.png";


function Footer(props) {
    return (
        <div className='bg-black'>
             <div className="max-w-screen-lg px-4 sm:px-6 text-gray-400 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
                <div className="p-5">
                    <h3 className="font-bold text-l text-white"></h3>
                    <img className="mx-auto w-40 h-40 w-auto " src={img} alt="Artisched logo" />
                    
                </div>
                <div className="p-5">
                    <div className="text-sm uppercase text-white font-bold">Resources</div>
                    <a className="my-3 block" href="/#">About Us <span className="text-teal-600 text-xs p-1"></span></a>
                    <a className="my-3 block" href="/#">Our Process <span className="text-teal-600 text-xs p-1"></span></a>
                    <a className="my-3 block" href="/#">Reviews <span className="text-teal-600 text-xs p-1">New</span></a>
                </div>
                <div className="p-5">
                    <div className="text-sm uppercase text-white font-bold">Support</div>
                    <a className="my-3 block" href="/#">Help Center <span className="text-teal-600 text-xs p-1"></span></a>
                    <a className="my-3 block" href="/#">Privacy Policy <span className="text-teal-600 text-xs p-1"></span></a>
                    <a className="my-3 block" href="/#">FAQs <span className="text-teal-600 text-xs p-1"></span></a>
                </div>
                <div id="contact"className="p-5">
                    <div className="text-sm uppercase text-white font-bold">Contact us</div>
                    <a className="my-3 block" href="/#">+233 432 5678, <br/>North Industrial Area,<br/>Accra-Ghana <span className="text-teal-600 text-xs p-1"></span></a>
                    <a className="my-3 block" href="/#">info@artisched.com <span className="text-teal-600 text-xs p-1"></span></a>
                </div>
            </div>

            <div className="bg-purple-200 pt-2">
                <div className="flex pb-2 px-3 m-auto pt-2 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                    <p >© Copyright 2020. All Rights Reserved.</p>
                        <a href="/#" className="w-6 mx-1">
                            <svg className="fill-current cursor-pointer text-gray-500 hover:text-purple-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                                <path id="Twitter" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168 -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676 0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411 -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166 0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929 -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379 0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009 -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049 -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838 1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0 -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0 6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298 0.771,-0.67 1.054,-1.093Z"></path>
                            </svg>
                        </a>
                        <a href="/#" className="w-6 mx-1">
                            <svg className="fill-current cursor-pointer text-gray-500 hover:text-purple-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                                <path id="Facebook" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422 0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784 -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"></path>
                            </svg>
                        </a>
                        <a href="/#" className="w-6 mx-1">
                            <svg className="fill-current cursor-pointer text-gray-500 hover:text-purple-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                                <g id="Layer_1">
                                    <circle id="Oval" cx="12" cy="12" r="12"></circle>
                                    <path id="Instagram" d="M19.05,8.362c0,-0.062 0,-0.125 -0.063,-0.187l0,-0.063c-0.187,-0.562 -0.687,-0.937 -1.312,-0.937l0.125,0c0,0 -2.438,-0.375 -5.75,-0.375c-3.25,0 -5.75,0.375 -5.75,0.375l0.125,0c-0.625,0 -1.125,0.375 -1.313,0.937l0,0.063c0,0.062 0,0.125 -0.062,0.187c-0.063,0.625 -0.25,1.938 -0.25,3.438c0,1.5 0.187,2.812 0.25,3.437c0,0.063 0,0.125 0.062,0.188l0,0.062c0.188,0.563 0.688,0.938 1.313,0.938l-0.125,0c0,0 2.437,0.375 5.75,0.375c3.25,0 5.75,-0.375 5.75,-0.375l-0.125,0c0.625,0 1.125,-0.375 1.312,-0.938l0,-0.062c0,-0.063 0,-0.125 0.063,-0.188c0.062,-0.625 0.25,-1.937 0.25,-3.437c0,-1.5 -0.125,-2.813 -0.25,-3.438Zm-4.634,3.927l-3.201,2.315c-0.068,0.068 -0.137,0.068 -0.205,0.068c-0.068,0 -0.136,0 -0.204,-0.068c-0.136,-0.068 -0.204,-0.204 -0.204,-0.34l0,-4.631c0,-0.136 0.068,-0.273 0.204,-0.341c0.136,-0.068 0.272,-0.068 0.409,0l3.201,2.316c0.068,0.068 0.136,0.204 0.136,0.34c0.068,0.136 0,0.273 -0.136,0.341Z"></path>
                                </g>
                            </svg>
                        </a>
                        
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default Footer;
