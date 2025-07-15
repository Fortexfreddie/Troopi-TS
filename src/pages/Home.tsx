import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/HeroSection";
import Sidebar from "../components/Sidebar";
import FeaturedSection from "../components/sections/FeaturedSection";
import BestSellers from "../components/productsSection/BestSellers";

const Home = () => {
    return (  
        <div className="flex flex-col min-h-screen bg-[#272727]">
            <div className="flex-grow">
                <div className="container mx-auto">
                    <Navbar />
                    <div className="px-4 py-8 bg-[#D4AA7D]/10">
                        <div className="flex gap-4">
                            <Sidebar />
                            <div className="flex flex-col items-center gap-6">
                                <HeroSection />
                                <FeaturedSection />
                                <BestSellers />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Home;