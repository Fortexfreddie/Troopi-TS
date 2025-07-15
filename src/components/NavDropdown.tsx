import { FaChevronDown, FaChevronUp, FaSignInAlt } from 'react-icons/fa';
import { useState } from 'react';

type MenuType = "English" | "Pi" | "Account" | null;
const NavDropdown = () => {
    const [subMenu, setSubMenu] = useState<MenuType>(null);
    return (  
        <div className="flex items-center gap-4">
            <div className="relative">
                <span onMouseEnter={() => setSubMenu("English")} onMouseLeave={() => setSubMenu(null)} className="flex items-center gap-2 text-sm text-gray-100 px-2 font-semibold cursor-pointer hover:text-[#D4AA7D] active:text-[#D4AA7D] transition-colors duration-200">English {subMenu === "English" ? <FaChevronUp className="text-xs mt-0.5" /> : <FaChevronDown className="text-xs mt-0.5" /> }</span>
                <div onMouseEnter={() => setSubMenu("English")} onMouseLeave={() => setSubMenu(null)} className={`absolute z-10 shadow-lg transition-all duration-300 overflow-hidden backdrop-blur-md border border-white/20 top-8 rounded-md ${subMenu === "English" ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                    <ul className="text-sm">
                        <li className="text-gray-100 px-4 py-2 hover:bg-[#D4AA7D] active:bg-[#D4AA7D] hover:text-[#272727] active:text-[#272727] transition-colors duration-200 cursor-pointer">English</li>
                        <li className="text-gray-100 px-4 py-2 hover:bg-[#D4AA7D] active:bg-[#D4AA7D] hover:text-[#272727] active:text-[#272727] transition-colors duration-200 cursor-pointer">Arabic</li>
                    </ul>
                </div>
            </div>
            <div className="relative hidden lg:block">
                <span onMouseEnter={() => setSubMenu("Pi")} onMouseLeave={() => setSubMenu(null)} className="flex items-center gap-2 text-sm text-gray-100 px-2 font-semibold cursor-pointer hover:text-[#D4AA7D] active:text-[#D4AA7D] transition-colors duration-200">Pi {subMenu === "Pi" ? <FaChevronUp className="text-xs mt-0.5" /> : <FaChevronDown className="text-xs mt-0.5" /> }</span>
                <div onMouseEnter={() => setSubMenu("Pi")} onMouseLeave={() => setSubMenu(null)} className={`absolute z-10 shadow-lg transition-all duration-300 overflow-hidden backdrop-blur-md border border-white/20 top-8 rounded-md ${subMenu === "Pi" ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                    <ul className="text-sm">
                        <li className="text-gray-100 px-4 py-2 hover:bg-[#D4AA7D] active:bg-[#D4AA7D] hover:text-[#272727] active:text-[#272727] transition-colors duration-200 cursor-pointer">Pi</li>
                        <li className="text-gray-100 px-4 py-2 hover:bg-[#D4AA7D] active:bg-[#D4AA7D] hover:text-[#272727] active:text-[#272727] transition-colors duration-200 cursor-pointer">NGN</li>
                        <li className="text-gray-100 px-4 py-2 hover:bg-[#D4AA7D] active:bg-[#D4AA7D] hover:text-[#272727] active:text-[#272727] transition-colors duration-200 cursor-pointer">USD</li>
                    </ul>
                </div>
            </div>
            <div className="relative hidden lg:block">
                <span onMouseEnter={() => setSubMenu("Account")} onMouseLeave={() => setSubMenu(null)} className="flex items-center gap-2 text-sm text-gray-100 px-2 font-semibold cursor-pointer hover:text-[#D4AA7D] active:text-[#D4AA7D] transition-colors duration-200">Account {subMenu === "Account" ? <FaChevronUp className="text-xs mt-0.5" /> : <FaChevronDown className="text-xs mt-0.5" /> }</span>
                <div onMouseEnter={() => setSubMenu("Account")} onMouseLeave={() => setSubMenu(null)} className={`absolute z-10 shadow-lg transition-all duration-300 overflow-hidden backdrop-blur-md border border-white/20 top-8 rounded-md ${subMenu === "Account" ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                    <ul className="text-sm">
                        <li className="text-gray-100 px-4 py-2 hover:bg-[#D4AA7D] active:bg-[#D4AA7D] hover:text-[#272727] active:text-[#272727] transition-colors duration-200 cursor-pointer">Account</li>
                        <li className="text-gray-100 px-4 py-2 hover:bg-[#D4AA7D] active:bg-[#D4AA7D] hover:text-[#272727] active:text-[#272727] transition-colors duration-200 cursor-pointer">Cart</li>
                        <li className="text-gray-100 px-4 py-2 hover:bg-[#D4AA7D] active:bg-[#D4AA7D] hover:text-[#272727] active:text-[#272727] transition-colors duration-200 cursor-pointer">Wishlist</li>
                        <li className="text-gray-100 px-4 py-2 hover:bg-[#D4AA7D] active:bg-[#D4AA7D] hover:text-[#272727] active:text-[#272727] transition-colors duration-200 cursor-pointer">Checkout</li>
                    </ul>
                </div>
            </div>
            <button className="flex items-center gap-2 text-sm text-gray-100 px-2 font-semibold cursor-pointer hover:text-[#D4AA7D] active:text-[#D4AA7D] transition-colors duration-200"><FaSignInAlt className="text-xs mt-0.5" /> Login</button>
        </div>
    );
}
 
export default NavDropdown;