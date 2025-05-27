import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNavbar = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle("overflow-hidden", !menuOpen);
    };

    useEffect(() => {
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return (
        <nav className='px-4 bg-gray-300'>
            <div className="max-w-[1140px] mx-auto">
                <div className="flex justify-between items-center py-[17px]">
                    <p className='font-mono text-2xl'>logo</p>
                    <div onClick={toggleNavbar} className="z-50 md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer">
                        <span className={`block h-1 rounded-3xl bg-black transition-transform duration-300 ease-in-out ${menuOpen && 'rotate-45 translate-y-2'}`}></span>
                        <span className={`block h-1 rounded-3xl bg-black transition-transform duration-300 ease-in-out ${menuOpen && 'opacity-0'}`}></span>
                        <span className={`block h-1 rounded-3xl bg-black transition-transform duration-300 ease-in-out ${menuOpen && '-rotate-45 -translate-y-2'}`}></span>
                    </div>
                    <ul id='nav-name' className={`list-unstyled flex justify-center items-center nav-link gap-9 mb-0 ${menuOpen ? "show-navbar" : ""}`}>
                        <NavLink className={({ isActive }) => `font-mono text-lg text-medium relative after:absolute after:-bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:rounded hover:after:w-full after:duration-300 after:ease-linear ${isActive ? 'font-bold' : ''}`
                        } to="/" >Home</NavLink>
                        <NavLink className={({ isActive }) => `font-mono text-lg text-medium relative after:absolute after:-bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:rounded hover:after:w-full after:duration-300 after:ease-linear ${isActive ? 'font-bold' : ''}`
                        } to="/about">About</NavLink>
                        <NavLink
                            className={({ isActive }) => `font-mono text-lg text-medium relative after:absolute after:-bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:rounded hover:after:w-full after:duration-300 after:ease-linear ${isActive ? 'font-bold' : ''}`
                            } to="/contactPage">Contact</NavLink>
                        <NavLink
                            className={({ isActive }) => `font-mono text-lg text-medium relative after:absolute after:-bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:rounded hover:after:w-full after:duration-300 after:ease-linear ${isActive ? 'font-bold' : ''}`
                            } to="/swiper" >Swiper</NavLink>
                        <NavLink className={({ isActive }) => `font-mono text-lg text-medium relative after:absolute after:-bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-black after:rounded hover:after:w-full after:duration-300 after:ease-linear ${isActive ? 'font-bold' : ''}`
                        } to="/counter"  >  Counter </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Hero;
