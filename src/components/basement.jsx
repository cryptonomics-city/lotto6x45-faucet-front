import React from "react";
import frogsit from "../assets/frog sit.png";
import gitcat from "../assets/github-mark-white.png";

const Basement = () => {
  return (
    <div className=" bg-background mt-32 relative pb-2 lg:h-[119px]">
      <img
        src={frogsit}
        alt="KUL"
        className="absolute top-[-130px] left-[-10px] z-10 size-36 lg:size-auto lg:top-[-240px] lg:left-[-50px]"
      />
      <div className="flex gap-2 items-center pt-2 lg:pt-[34px]">
        <h1 className="pl-2 font-lg400 text-white text-s text-center items-center lg:pl-[200px] lg:text-3xl">
          Sepolia Testnet Faucet
        </h1>
        <div className="flex gap-5 flex-grow items-end text-right pr-2 justify-end lg:pr-[200px]">
          <a
            href="https://github.com/cryptonomics-city/"
            title="Our GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={gitcat}
              alt="git"
              className="h-[30px] cursor-pointer lg:h-[50px]"
            />
          </a>
          <h1 className="font-jost text-white text-s self-center lg:text-2xl">
            /
          </h1>
          <a
            href="https://github.com/cryptonomics-city/lotto6x45-faucet-front/issues"
            title="Our GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="self-center"
          >
            <h1 className="font-jost text-white text-s lg:text-2xl ">
              Feedback
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Basement;
