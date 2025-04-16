import React from "react";

function ServicesHero() {
    return (

<div className="flex flex-col md:flex-row justify-center items-center text-center bg-gradient-to-r from-black to-yellow-400 mx-auto h-screen md:h-screen pt-20 px-6">

                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-yellow-300">
                        Services We Offer
                    </h1>
                    <p className="text-sm sm:text-base leading-7 text-white max-w-lg">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti,
                        cupiditate et. Ducimus sed quaerat quod, dolorum distinctio quis et qui
                        voluptatum accusantium excepturi quam. Dolore eveniet vel suscipit
                        voluptate placeat!
                    </p>
                    <button className="mt-6 px-6 py-3 bg-[#ffc01d] text-white rounded-md hover:bg-black transition duration-300">
                        Explore more
                    </button>
                </div>
        </div>

    );
}
export default ServicesHero;