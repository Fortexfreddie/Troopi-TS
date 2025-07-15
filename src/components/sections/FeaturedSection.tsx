import { FaHourglassHalf } from 'react-icons/fa';
import dailyDeals  from "../../data/dailyDeals";

const FeaturedSection = () => {
    return (  
        <div className="flex flex-col gap-4 w-full bg-[#1f1f1f] rounded-xl shadow-md p-4 backdrop-blur-md">
            <div className="border-b border-[#D4AA7D]/30 pb-4">
                <h1 className="text-3xl text-[#D4AA7D] font-bold uppercase">daily deals</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {
                    dailyDeals.map((dailyDeal) => (
                        <div key={dailyDeal.id} className="h-80 border border-white/20 overflow-hidden backdrop-blur-md shadow-md rounded-xl hover:shadow-[#D4AA7D]/30 transition-shadow duration-300 cursor-pointer">
                            <div className="h-2/5 relative">
                                <div className="absolute top-2 right-2 bg-[#D4AA7D] text-black text-sm font-semibold px-3 py-0.5 rounded">-{dailyDeal.discount}%</div>
                                <img src={dailyDeal.image} alt="" className="w-full h-full object-center object-cover" />
                            </div>
                            <div className="p-4 flex flex-col items-start gap-5">
                                <div className="flex items-center justify-between w-full gap-4">
                                    <div className="flex flex-col gap-1 w-2/4">
                                        <h3 className="text-md text-white font-medium leading-tight truncate">{dailyDeal.title}</h3>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm text-[#D4AA7D] font-semibold">${dailyDeal.price.toFixed(2)}</span>
                                            <span className="text-sm text-gray-400 line-through">${dailyDeal.oldPrice.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="text-xs text-white/60 flex items-center gap-1 flex-nowrap">
                                    <FaHourglassHalf className="text-[#D4AA7D]" /> <span className="whitespace-nowrap">Time Left: <span className="text-white font-medium">{dailyDeal.timeLeft}</span></span>
                                    </div>
                                </div>
                                <p className="text-sm text-white/80">{dailyDeal.description}</p>
                                <div className="flex flex-col gap-2 w-full">
                                    <div className="flex items-center justify-between text-sm text-white/70">
                                        <span>Available: <span className="font-medium text-white">{dailyDeal.available}</span></span>
                                        <span>Sold: <span className="font-medium text-white">{dailyDeal.sold}</span></span>
                                    </div>
                                    <progress value={dailyDeal.available} max={dailyDeal.available + dailyDeal.sold} className="w-full h-2 rounded bg-white/20 [&::-webkit-progress-bar]:rounded [&::-webkit-progress-value]:bg-[#D4AA7D] [&::-webkit-progress-value]:rounded transition-all duration-300"></progress>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default FeaturedSection;