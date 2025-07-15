import { useState } from "react";
import bestSellers from "../../data/bestSellers";

type CategoryType = "Food" | "Digital" | "Fashion" | "Furniture" | null;
const BestSellers = () => {
    const [filteredItem, setFilteredItem] = useState(bestSellers);
    const [bgColor, setBgColor] = useState<CategoryType>(null);

    const handleFilter = (category: CategoryType) => {
        const newItem = bestSellers.filter((item) => item.category == category);
        setBgColor(category)
        setFilteredItem(newItem);
    };

    return (  
        <div className="flex flex-col gap-4 w-full bg-dark-brown rounded-xl shadow-md p-4 backdrop-blur-md">
            <div className="border-b border-[#D4AA7D]/30 pb-4">
                <h1 className="text-3xl text-[#D4AA7D] font-bold uppercase">Best Sellers! In This Week!</h1>
            </div>

            {/* the filter section */}
            <div className="flex items-center justify-center gap-4">
                <button
                onClick={() => handleFilter("Food")}
                className={` ${
                    bgColor == "Food" ? "bg-light-gold" : "none"
                } rounded-full border font-bold text-white border-light-gold px-4 py-1 cursor-pointer hover:bg-light-gold hover:text-dark-brown`}
                >
                Food
                </button>
                <button
                onClick={() => handleFilter("Digital")}
                className={` ${
                    bgColor == "Digital" ? "bg-light-gold" : "none"
                } rounded-full border font-bold text-white border-light-gold px-4 py-1 cursor-pointer hover:bg-light-gold hover:text-dark-brown`}
                >
                Digital
                </button>
                <button
                onClick={() => handleFilter("Fashion")}
                className={` ${
                    bgColor == "Fashion" ? "bg-light-gold" : "none"
                } rounded-full border font-bold text-white border-light-gold px-4 py-1 cursor-pointer hover:bg-light-gold hover:text-dark-brown`}
                >
                Fashion
                </button>
                <button
                onClick={() => handleFilter("Furniture")}
                className={` ${
                    bgColor == "Furniture" ? "bg-light-gold" : "none"
                } rounded-full border font-bold text-white border-light-gold px-4 py-1 cursor-pointer hover:bg-light-gold hover:text-dark-brown`}
                >
                Furniture
                </button>
            </div>

            {/* // the data items generated from the filter */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                {filteredItem.slice(0, 6).map((item, id) => (
                <div
                    className="border-white/20 px-3 py-2 border overflow-hidden backdrop-blur-md rounded-md shadow-md hover:shadow-[#D4AA7D]/30 transition-shadow duration-300 cursor-pointer"
                    key={id}
                >
                    <div className="flex justify-end">
                    <div className="bg-light-gold text-dark-brown mb-3 px-3 text-sm rounded-sm">
                        -{item.discount}%
                    </div>
                    </div>
                    <div>
                    <img src={item.image} alt="" className="w-full h-full object-cover object-center" />
                    </div>
                    <div>
                    <p className="text-center p-3 text-light-gold text-sm">{item.title}</p>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                    <p className="font-semibold line-through text-gray-400">${item.oldPrice}</p>
                    <p className="font-semibold text-light-gold">${item.price}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}
 
export default BestSellers;