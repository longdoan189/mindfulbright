import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default function Header() {
    const [show, toggleShow] = React.useState(false);
    const { width } = useWindowDimensions();
    /*Hien toan bo header hay khong => khi man hinh > 1024 mac dinh hien */
    let start_show = true;
    if (width < 1024) {
        start_show = false;
    }
    else {
        start_show = true;
    }
    return (
        <nav className="bg-white header_desktop fixed w-full border border-black">
            <div className="max-w-7xl mx-auto px-2 lg:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16 lg:h-24 xl:h-32 2xl:h-40">
                    {/* Mobile menu button*/}
                    <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset f9ocus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => toggleShow(!show)}>
                            <span className="sr-only">Open main menu</span>
                            {/*
                            Icon when menu is closed.

                            Heroicon name: outline/menu

                            Menu open: "hidden", Menu closed: "block"
                            */}
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/*
                            Icon when menu is open.

                            Heroicon name: outline/x

                            Menu open: "block", Menu closed: "hidden"
                            */}
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {/* Desktop menu */}
                    <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <NavLink to="/">
                                <p className="block text-gold text-2xl xl:text-3xl"> MindFulbright </p>
                                <p className="hidden text-gold text-lg"> MindFulbright </p>
                            </NavLink>
                        </div>
                        <div className="hidden lg:block lg:ml-6">
                            <div className="flex space-x-4 p-32">
                                <NavLink to="/" exact className="text-blue hover:text-yellow-500 text-lg xl:text-xl" activeClassName="font-bold">Home</NavLink>
                                <NavLink to="/about" className="text-blue hover:text-yellow-500 text-lg xl:text-xl" activeClassName="font-bold">About</NavLink>
                                <NavLink to="/instruction" className="text-blue hover:text-yellow-500 text-lg xl:text-xl" activeClassName="font-bold">Instruction</NavLink>
                                <NavLink to="/contact" className="text-blue hover:text-yellow-500 text-lg xl:text-xl" activeClassName="font-bold">Contact</NavLink>
                            </div>
                        </div>
                        <div className="hidden lg:block lg:ml-2">
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            {(show || start_show) &&
                <div className="lg:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <NavLink to="/home" className="text-blue block px-3 py-2 rounded-md text-base font-medium" onClick={() => toggleShow(false)} >Home</NavLink>
                        <NavLink to="/about" className="text-blue block px-3 py-2 rounded-md text-base font-medium" onClick={() => toggleShow(false)} >About</NavLink>
                        <NavLink to="/instruction" className="text-blue block px-3 py-2 rounded-md text-base font-medium" onClick={() => toggleShow(false)} >Instruction</NavLink>
                        <NavLink to="/contact" className="text-blue block px-3 py-2 rounded-md text-base font-medium" onClick={() => toggleShow(false)} >Contact</NavLink>
                    </div>
                </div>
            }
        </nav>

    )
}
