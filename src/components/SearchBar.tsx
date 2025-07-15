import { FaSearch } from 'react-icons/fa';

const Searchbar = () => {
  return (
    <form action="" className="w-full max-w-2xl">
        <div className="flex bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl px-4 py-3 gap-2 items-center">
            <input type="text"
            placeholder="What are you looking for?"
            className="w-full bg-transparent text-white placeholder:text-[#ccc] placeholder:text-sm border-none outline-none"/>
            
            <button type="submit" className="flex items-center justify-center bg-[#D4AA7D] hover:bg-[#c99660] active:bg-[#c99660] text-[#272727] text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer">
                <FaSearch className="mr-2" />
                Search
            </button>
        </div>
    </form>
  );
};

export default Searchbar;