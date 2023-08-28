'use client'


import { useState } from "react";
import NavList from "./NavList";
import Header from "../ui/Header";
import Logo from "../ui/Logo";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-white text-lg font-semibold"><Logo text="E-store" /></Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex space-x-4">
                            <NavList target={'web'} />
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            type="button"
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <NavList target={'mobile'} />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;