import React from "react";
import alchemy from "../assets/Alchemy.png";

const AlchemyBanner = () => {
  return (
    <a
      href="https://www.alchemy.com/faucets/ethereum-sepolia"
      title="Sepolia Alchemy Faucet"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-error text-white flex text-center text-xs 2sm:text-xl lg:text-2xl justify-center items-center">
        <div>Get FREE 0.5 Sepolia ETH/day at</div>
        <img src={alchemy} alt="alchemy" className="h-[30px] pl-2" />
      </div>
    </a>
  );
};

export default AlchemyBanner;
