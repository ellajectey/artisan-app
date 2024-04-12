import React from 'react';

function Footer(props) {
    return (
        <>
            <div className="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
                <div className="p-5">
                    <h3 className="font-bold text-xl text-indigo-600">Company Name</h3>
                </div>
                <div className="p-5">
                    <div className="text-sm uppercase text-indigo-600 font-bold">Resources</div>
                    <a className="my-3 block" href="/#">Documentation <span className="text-teal-600 text-xs p-1"></span></a>
                    <a className="my-3 block" href="/#">Tutorials <span className="text-teal-600 text-xs p-1"></span></a>
                    <a className="my-3 block" href="/#">Support <span className="text-teal-600 text-xs p-1">New</span></a>
                </div>
                <div className="p-5">
                    <div className="text-sm uppercase text-indigo-600 font-bold">Support</div>
                    <a className="my-3 block" href="/#">Help Center <span className="text-teal-600 text-xs p-1"></span></a>
                    <a className="my-3 block" href="/#">Privacy Policy <span className="text-teal-600 text-xs p-1"></span></a>
                    <a className="my-3 block" href="/#">Conditions <span className="text-teal-600 text-xs p-1"></span></a>
                </div>
                <div className="p-5">
                    <div className="text-sm uppercase text-indigo-600 font-bold">Contact us</div>
                    <a className="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA <span className="text-teal-600 text-xs p-1"></span></a>
                    <a className="my-3 block" href="/#">contact@company.com <span className="text-teal-600 text-xs p-1"></span></a>
                </div>
            </div>

            <div className="bg-gray-100 pt-2">
                <div className="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center">
                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <a href="/#" className="w-6 mx-1">
                            <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                                <path id="Twitter" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168 -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676 0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411 -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166 0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929 -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379 0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009 -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049 -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838 1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0 -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0 6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298 0.771,-0.67 1.054,-1.093Z"></path>
                            </svg>
                        </a>
                        <a href="/#" className="w-6 mx-1">
                            <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                                <path id="Facebook" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422 0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784 -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"></path>
                            </svg>
                        </a>
                        <a href="/#" className="w-6 mx-1">
                            <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                                <g id="Layer_1">
                                    <circle id="Oval" cx="12" cy="12" r="12"></circle>
                                    <path id="Shape" d="M19.05,8.362c0,-0.062 0,-0.125 -0.063,-0.187l0,-0.063c-0.187,-0.562 -0.687,-0.937 -1.312,-0.937l0.125,0c0,0 -2.438,-0.375 -5.75,-0.375c-3.25,0 -5.75,0.375 -5.75,0.375l0.125,0c-0.625,0 -1.125,0.375 -1.313,0.937l0,0.063c0,0.062 0,0.125 -0.062,0.187c-0.063,0.625 -0.25,1.938 -0.25,3.438c0,1.5 0.187,2.812 0.25,3.437c0,0.063 0,0.125 0.062,0.188l0,0.062c0.188,0.563 0.688,0.938 1.313,0.938l-0.125,0c0,0 2.437,0.375 5.75,0.375c3.25,0 5.75,-0.375 5.75,-0.375l-0.125,0c0.625,0 1.125,-0.375 1.312,-0.938l0,-0.062c0,-0.063 0,-0.125 0.063,-0.188c0.062,-0.625 0.25,-1.937 0.25,-3.437c0,-1.5 -0.125,-2.813 -0.25,-3.438Zm-4.634,3.927l-3.201,2.315c-0.068,0.068 -0.137,0.068 -0.205,0.068c-0.068,0 -0.136,0 -0.204,-0.068c-0.136,-0.068 -0.204,-0.204 -0.204,-0.34l0,-4.631c0,-0.136 0.068,-0.273 0.204,-0.341c0.136,-0.068 0.272,-0.068 0.409,0l3.201,2.316c0.068,0.068 0.136,0.204 0.136,0.34c0.068,0.136 0,0.273 -0.136,0.341Z"></path>
                                </g>
                            </svg>
                        </a>
                        <a href="/#" className="w-6 mx-1">
                            <svg className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }}>
                                <path id="Twitter" d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168 0.664,1.848 0.174,2.524c-0.826,1.327 -2.627,1.807 -4.077,2.187c-1.63,0.445 -1.743,0.704 -2.738,1.723c-0.094,0.106 -0.144,0.229 -0.192,0.35c-0.399,0.928 -0.157,2.141 0.884,2.863c0.781,0.517 1.821,0.66 2.762,0.495c1.601,-0.302 2.881,-1.455 3.11,-3.022c0.17,-1.217 -0.091,-2.215 -0.864,-3.106c-0.647,-0.761 -1.612,-1.08 -2.542,-1.236c0.911,-0.536 1.469,-1.498 1.246,-2.53c-0.243,-1.168 -1.371,-1.964 -2.51,-1.719c-0.449,0.096 -0.83,0.331 -1.158,0.666c0.556,-0.144 0.976,0.03 1.411,0.286c-0.877,-0.196 -1.835,-0.185 -2.674,0.327c-0.676,0.393 -1.156,1.002 -1.44,1.712c-0.677,1.805 -0.233,3.636 0.86,5.066c1.313,1.678 3.476,2.563 5.666,2.245c0.409,-0.057 0.842,-0.172 1.248,-0.365c0.601,-0.249 1.183,-0.601 1.665,-1.048c0.123,-0.099 0.247,-0.197 0.378,-0.283c0.754,-0.495 1.235,-1.333 1.28,-2.202c0.038,-0.774 -0.284,-1.454 -0.747,-1.965c-0.702,-0.774 -1.729,-1.157 -2.727,-1.192c-0.081,0.017 -0.157,0.029 -0.238,0.037c1.028,-0.88 1.525,-2.246 1.157,-3.58c-0.392,-1.588 -1.713,-2.64 -3.379,-2.642c-0.606,0.001 -1.217,0.191 -1.736,0.513c-0.412,0.263 -0.784,0.624 -1.098,1.04c-0.121,0.153 -0.228,0.318 -0.319,0.49c-0.455,0.837 -0.46,1.854 -0.016,2.689c0.449,0.822 1.193,1.326 2.053,1.412c0.71,0.074 1.349,-0.067 1.949,-0.395c0.129,-0.064 0.263,-0.116 0.395,-0.159c-0.352,1.033 -1.129,1.896 -2.157,2.355Z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="my-5">© Copyright 2020. All Rights Reserved.</div>
                </div>
            </div>
        </>
    );
}

export default Footer;
