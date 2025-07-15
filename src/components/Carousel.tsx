import { useState, useEffect } from 'react';
import img from "../assets/cus2.png";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
    {
        id: 1,
        title: 'Buy and Sell with Pi',
        desc: 'Discover a global marketplace powered by the Pi Network. Fast, secure, and borderless.',
        image: img,
        alt: "Shopping"
    },
    {
        id: 2,
        title: 'Offer Your Services',
        desc: 'Join as a freelancer and get paid in Pi or fiat. Showcase your skills to the world.',
        image: img,
        alt: "Freelancing",
    },
    {
        id: 3,
        title: 'Shop Smart. Pay with Pi.',
        desc: 'Use your Pi to purchase physical products and digital services from trusted sellers.',
        image: img,
        alt: "Ecommerce",
    }
];

const Carousel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000)

        return () => clearInterval(interval);
    }, []);

    return (  
        <div className="relative w-full h-64 lg:h-[50vh] overflow-hidden backdrop-blur-md shadow-md rounded-xl">
            <div className="w-full h-full flex transition-transform duration-700 ease-in-out-quad" style={{ transform: `translateX(-${current * 100}%)` }}>
                <div className="absolute inset-0"></div>
                {
                    slides.map((slide) => (
                        <div key={slide.id} className='w-full h-full flex-shrink-0'>
                            <img src={slide.image} alt={slide.alt} className="w-full h-full object-center object-cover" />
                        </div>
                    ))
                }
            </div>
            <button 
                onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
                className="absolute top-1/2 left-4 -translate-y-1/2 text-white  bg-[#272727]/60 hover:bg-[#272727]/80 active:bg-[#272727]/80 backdrop-blur-md p-3 rounded-full z-20 cursor-pointer transition-colors duration-300">
                    <FaChevronLeft />
            </button>
            <button 
                onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-white  bg-[#272727]/60 hover:bg-[#272727]/80 active:bg-[#272727]/80 backdrop-blur-md p-3 rounded-full z-20 cursor-pointer transition-colors duration-300">
                    <FaChevronRight />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 rounded-full px-4 py-2 bg-[#272727]/60 backdrop-blur-md z-20">
                {
                    slides.map((slide) => (
                        <span onClick={() => setCurrent(slide.id - 1)} key={slide.id} className={`relative w-3 h-3 rounded-full overflow-hidden bg-white/50 border border-white/60`}>
                            <span className={`absolute bottom-0 left-0 w-full bg-white/80 ${current === slide.id - 1 ? "h-full" : "h-0"} transition-all duration-500 origin-bottom`}></span>
                        </span>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Carousel;