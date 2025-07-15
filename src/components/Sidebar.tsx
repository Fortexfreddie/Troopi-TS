import { FaBars } from 'react-icons/fa';

const Sidebar = () => {
    // return (
    //     <div className="flex justify-center items-center h-screen bg-[#272727]">
    //         <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-[#D4AA7D]"></div>
    //     </div>
    // );
    return (  
        <aside className="w-full h-full bg-[#1f1f1f] text-white hidden lg:block backdrop-blur-md shadow-md rounded-xl overflow-hidden sticky top-6">
            <span className="flex items-center gap-4 text-md py-3 px-4 text-[#272727] bg-[#D4AA7D]">
                <FaBars />
                <h2 className="font-bold uppercase">Category</h2>
            </span>
            <ul className="space-y-4 p-4">
                <li className="hover:text-[#D4AA7D] active:text-[#D4AA7D] transition-colors duration-200 cursor-pointer border-b border-gray-500 pb-2">🏠 Dashboard</li>
                <li className="hover:text-[#D4AA7D] active:text-[#D4AA7D] transition-colors duration-200 cursor-pointer border-b border-gray-500 pb-2">🛒 Products</li>
                <li className="hover:text-[#D4AA7D] active:text-[#D4AA7D] transition-colors duration-200 cursor-pointer border-b border-gray-500 pb-2">➕ Post Listing</li>
                <li className="hover:text-[#D4AA7D] active:text-[#D4AA7D] transition-colors duration-200 cursor-pointer border-b border-gray-500 pb-2">💼 Services</li>
                <li className="hover:text-[#D4AA7D] active:text-[#D4AA7D] transition-colors duration-200 cursor-pointer border-b border-gray-500 pb-2">💰 Pi Wallet</li>
                <li className="hover:text-[#D4AA7D] active:text-[#D4AA7D] transition-colors duration-200 cursor-pointer border-b border-gray-500 pb-2">💰 Pi Wallet</li>
                <li className="hover:text-[#D4AA7D] active:text-[#D4AA7D] transition-colors duration-200 cursor-pointer border-b border-gray-500 pb-2">💰 Pi Wallet</li>
                <li className="hover:text-[#D4AA7D] active:text-[#D4AA7D] transition-colors duration-200 cursor-pointer border-b border-gray-500 pb-2">💰 Pi Wallet</li>
                <li className="hover:text-[#D4AA7D] active:text-[#D4AA7D] transition-colors duration-200 cursor-pointer border-b border-gray-500 pb-2">💰 Pi Wallet</li>
                <li className="hover:text-[#D4AA7D] active:text-[#D4AA7D] transition-colors duration-200 cursor-pointer">➕ See More</li>
            </ul>
        </aside>
    );
}
 
export default Sidebar;