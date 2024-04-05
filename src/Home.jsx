import React from "react";
import ShoeImg from "../src/assets/shoe-img.png";
import "./App.css";

const Home = () => {
  return (
    <section className="flex justify-between pr-16 pl-40 pt-10 lg:pl-36 lg:pb-14 md:flex-col md:justify-center md:items-center md:gap-8 md:px-24 sm:px-12 xs:px-8">
      <div className="w-1/2 lg:w-[45%] md:w-full md:text-center">
        <h1 className="text-7xl mb-2 lg:text-6xl md:text-5xl sm:text-4xl font-[Black-Ops-One] font-boldest">AIR MAX</h1>

        <h2 className="text-3xl lg:text-2xl md:text-xl sm:text-lg font-[Cabin] font-light">NIKE AIR MAX 90</h2>

        <h3 className="text-2xl mt-12 lg:text-xl lg:mt-8 md:text-lg md:mt-4 font-[Dosis]">$98</h3>

        <p className="text-sm mt-4 leading-loose lg:leading-relaxed font-[Cabin]">
          Nike Air Max is a line of shoes produced by Nike, Inc., with the first
          model released in 1987. Air Max shoes are identified by their midsoles
          incorporating flexible urethane pouches filled with pressurized gas,
          visible from the exterior of the shoe and intended to provide
          cushioning to the underfoot.
        </p>

        <button className="bg-[#585B61] py-2 px-4 rounded-3xl mt-4 lg:py-2 lg:px-3 lg:text-sm xs:text-xs font-[Cabin]">ADD TO CART</button>
      </div>

      <img src={ShoeImg} alt="shoe-img" className="w-[53.3%] md:w-[70%] sm:w-full" />
    </section>
  );
};

export default Home;
