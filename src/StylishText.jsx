import React from "react";
import NikeImg from "../src/assets/nike-img.png";
import StylishtextImg from "../src/assets/stylish-text.png";

const StylishText = () => {
  return (
    <div className="bg-[#303236] flex flex-col items-center absolute top-0 bottom-0 left-0 w-28 lg-12 md:hidden">
      <img src={NikeImg} alt="nike-img" className="w-16 mt-10 mb-20 lg:w-12" />

      <img src={StylishtextImg} alt="stylish-text-img" className="w-[0.8rem] lg:w-[0.7rem]" />
    </div>
  );
};

export default StylishText;
