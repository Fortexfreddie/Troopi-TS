import { useState, useEffect } from 'react';

const messages = [
    "🎉 Welcome to Troopi — Buy & Sell with Pi!",
    "🚀 Launch Offer: 0% service fees for new users!",
    "💰 Earn Pi or Fiat by offering freelance services.",
    "📦 Now accepting both Pi and Fiat payments!",
];

const TopBanner = () => {
    // State for the current news index
    const [index, setIndex] = useState(0);
    // State for the news transition
    const [fade, setFade] = useState(true);


    useEffect(() => {
        const interval = setInterval(() => {
            // Start fade out
            setFade(false);

            // Set a fade effect using states cause the texts changes    
            setTimeout(() => {
                // Get the previous state value anf assign a new value (a number and add 1 modulus the lenght)
                setIndex((prev) => (prev + 1) % messages.length);
                // End fade out
                setFade(true);
            }, 500) // I set the fade timeoout to 0.5 sec so that the fade state happens every 0.5 + initial 5 sec
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hidden lg:block w-full text-white text-sm">
            <p className={`transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>{messages[index]}</p>
        </div>
    );
};

export default TopBanner;
