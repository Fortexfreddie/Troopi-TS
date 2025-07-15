import TopBanner from "./TopBanner";
import NavDropdown from "./NavDropdown";
import Searchbar from "./SearchBar";
import { FaBars, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from "framer-motion";

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);

    return (  
        <nav className="flex flex-col bg-transparent shadow-sm py-2 px-4">
            <div className="z-20 flex items-center justify-between py-2 px-6 bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-xl">
                <span className="lg:hidden text-[#D4AA7D] cursor-pointer"><FaBars /></span>
                <TopBanner />
                <NavDropdown />
            </div>
            <div className='flex items-center justify-center lg:justify-between gap-6 py-4 px-10'>
                <h1 className='text-4xl lg:text-5xl text-[#D4AA7D] font-bold uppercase cursor-pointer'>Tr<motion.span 
                    initial={{ y: 0 }}
                    animate={{
                        y: [0, -15, 0, -12, 0, -10, 0, -8, 0, -6, 0, -4, 0, -2, 0], // 7 bounces
                    }}
                    transition={{
                        duration: 2.5,
                        ease: "easeOut",
                    }}
                    className='inline-block'>oo</motion.span>pi
                </h1>
                <span onClick={() => setShowSearch(!showSearch)} className="lg:hidden text-[#D4AA7D] bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 shadow-md rounded-full p-2 cursor-pointer transition-colors duration-200"><FaSearch /></span>
                <div className="flex items-center gap-4 max-w-lg">
                    <div className="w-md hidden lg:block">
                        <Searchbar />
                    </div>
                    <span className="hidden lg:block bg-white/10 hover:bg-white/20 active:bg-white/20 backdrop-blur-md border border-white/20 shadow-lg rounded-full p-2 text-[#D4AA7D] hover:text-[#c99660] active:text-[#c99660] cursor-pointer transition-colors duration-200"><FaShoppingCart className="h-6 w-6" /></span>
                </div>
            </div>
            <div className={`block lg:hidden transition-all duration-500 px-6 ${showSearch ? 'opacity-100 translate-y-0 max-h-[200px] mt-4' : 'opacity-0 -translate-y-2 max-h-0'} `}>
                <Searchbar />
            </div>
        </nav>
    );
}
 
export default Navbar;