import React from "react";
import frogsit from "../assets/frog sit.png";
import gitcat from "../assets/github-mark-white.png";

const Basement = () => {
  return (
    <div className=" h-[119px] bg-background mt-32 relative">
      <img
        src={frogsit}
        alt="KUL"
        className="absolute top-[-240px] left-[-50px] z-10"
      />
      <div className="flex gap-32 items-center pt-[34px]">
        <h1 className="pl-[200px] font-lg400 text-white text-3xl leading-8 text-center items-center ">
          Sepolia Testnet Faucet
        </h1>
        <div className="flex gap-5 flex-grow items-end text-right pr-[200px]  justify-end">
          <a
            href="https://github.com/cryptonomics-city/"
            title="Our GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitcat} alt="git" className="h-[50px] cursor-pointer" />
          </a>
          <h1 className="font-jost text-white text-2xl self-center">/</h1>
          <a
            href="https://github.com/cryptonomics-city/lotto6x45-faucet-front/issues"
            title="Our GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="self-center"
          >
            <h1 className="font-jost text-white text-2xl ">Feedback</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Basement;
