import Carousel from "../Carousel";
import img from "../../assets/cus2.png";
import { motion } from "framer-motion";

const HeroSection = () => {    
    return (  
        <div className="flex gap-4 w-full">
            <div className="w-full lg:w-[70%]"><Carousel /></div>
            <div className="hidden lg:block w-[30%]">
                <div className="grid grid-cols-1 gap-4 h-full">
                    <motion.div 
                        whileHover={{
                            y: [-2, -10, 3, -5, 4, -3, 0], // bounce keyframes
                            transition: {
                                duration: 1,
                                ease: "easeOut",
                            },
                        }}
                        className="w-full h-full overflow-hidden backdrop-blur-md shadow-md rounded-xl">
                        <img src={img} alt="" className="object-center object-cover h-full w-full" />
                    </motion.div>
                    <motion.div 
                        whileHover={{
                            y: [-2, -10, 3, -5, 4, -3, 0], // bounce keyframes
                            transition: {
                                duration: 1,
                                ease: "easeOut",
                            },
                        }}
                        className="w-full h-full overflow-hidden backdrop-blur-md shadow-md rounded-xl">
                        <img src={img} alt="" className="object-center object-cover h-full w-full" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
 
export default HeroSection;