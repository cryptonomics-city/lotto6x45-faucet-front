import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentRound,
  selectIsRoundResultLoading,
  selectResultTable,
} from "./redux/slices/lotto6x45/selectors";
import {
  getCurrentRound,
  getResultTable,
} from "./redux/slices/lotto6x45/slice";
import { ethers } from "ethers";
import { lotto6x45ABIShort } from "./ABI/lotto6x45ABI";
import CurrentBets from "./components/currentBets";
import MakedBets from "./components/makedBets";
import ResultsTable from "./components/resultsTable";
import WinTable from "./components/winTable";

import frogup from "./assets/frog up.png";
import kuvshinkaupleft from "./assets/kuvshinka up left.png";
import frogleft from "./assets/frog left.png";
import Rewards from "./components/rewards";
import Basement from "./components/basement";

const Demopage = ({ onConnect }) => {
  const lotteryAddress = process.env.REACT_APP_6x45x1;
  const provider = new ethers.JsonRpcProvider(process.env.REACT_APP_RPC_URL);
  const voidSigner = new ethers.VoidSigner(lotteryAddress, provider);

  const lotto6x45Short = new ethers.Contract(
    lotteryAddress,
    lotto6x45ABIShort,
    voidSigner
  );
  const [checkboxes, setCheckboxes] = useState(Array(45).fill(false));

  const currentRound = useSelector(selectCurrentRound);
  const dispatch = useDispatch();
  const [remainingTime, setRemainingTime] = useState();
  const resultTable = useSelector(selectResultTable);
  const isRRLoading = useSelector(selectIsRoundResultLoading);
  const roundTime = currentRound[1];
  useEffect(() => {
    const interval = setInterval(() => {
      const newRemainingTime =
        Number(roundTime) - Math.floor(Date.now() / 1000);
      setRemainingTime(newRemainingTime);
    }, 1000);
    return () => clearInterval(interval);
  }, [roundTime]);
  // eslint-disable-next-line
  const renderCountdown = () => {
    if (remainingTime <= 0) {
      return (
        <div>
          Round starts in:{" "}
          <span className="text-error font-bold animate-blink">Last Call</span>
        </div>
      );
    } else {
      return <div>Round starts in: {formatTime(remainingTime)}</div>;
    }
  };
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    return [hours, minutes, secs]
      .map((v) => v.toString().padStart(2, "0"))
      .join(":");
  };

  useEffect(() => {
    dispatch(getCurrentRound(lotto6x45Short)).then(
      dispatch(getResultTable(lotto6x45Short))
    );
    // eslint-disable-next-line
  }, []);
  return (
    <div className="">
      <div className=" h-[119px] bg-uf">
        <div className="flex w-full">
          <div className="flex-grow text-left">
            <h1 className="pl-[200px] pt-[34px] font-lg400 text-white text-3xl leading-8">
              Sepolia Testnet Faucet
            </h1>
            <div className="flex pl-[200px] pt-[10px]">
              <h3 className="font-jost leading-7 font-medium text-xl">
                Your balance: XXX USDT
              </h3>
              <h3 className="font-jost font-medium leading-7 text-xl pl-5">
                Bet: 1 USDT
              </h3>
            </div>
          </div>
          <div className="flex-grow text-right">
            <div className="pt-[33px] pr-[180px]">
              <button
                onClick={onConnect}
                className="shadow-outer text-violet bg-acid hover:bg-pressedviolet hover:text-pressedtextviolet focus:ring-4 focus:ring-violet font-medium text-m rounded-lg
                 px-5 py-[10px] focus:outline-none"
              >
                Please connect your wallet with MetaMask
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap m-auto justify-evenly pt-10 gap-20">
        <div className="flex flex-col relative gap-4 w-[733px]">
          <div className="mb-3">
            <h1 className="font-lg400 text-acid text-2xl leading-7">
              Current round: {currentRound[0]}
            </h1>
          </div>
          <img
            src={frogup}
            alt="Top Right Background"
            className="absolute top-[-76px] right-[7px] z-10"
          />

          <img
            src={kuvshinkaupleft}
            alt="KUL"
            className="absolute top-[54px] left-[-156px] "
          />

          <div className="bg-uf rounded-2xl p-8 z-10 relative">
            <img
              src={frogleft}
              alt="FL"
              className="absolute bottom-[-340px] right-[-140px] z-10"
            />

            <h2 className="font-krona leading-6 text-xl text-white">
              {renderCountdown()}
            </h2>
            <div className="min-h-30">
              {/* <h3 className="font-krona leading-5 text-l text-error">err </h3> */}
            </div>
            <div className="inline-grid grid-cols-9 gap-0 h-fit">
              {checkboxes.map((checked, index) => (
                <button
                  key={index}
                  // onClick={() => {
                  //   handleCheckboxToggle(index);
                  // }}
                  className={`w-[67px] h-[68px] min-w-[62px] m-[1px]  
                  cursor-pointer flex justify-center items-center
            ${
              !checked
                ? "bg-flowerviolet bg-no-repeat bg-cover text-violet"
                : "bg-dark-blue"
            } `}
                >
                  <h2 className="font-krona leading-5 text-xl"> {index + 1}</h2>
                </button>
              ))}
            </div>
            <div>
              <button
                disabled
                className="text-uf mt-10 shadow-outer bg-acid leading-5 text-xl font-lg400 hover:bg-pressedviolet hover:text-pressedtextviolet focus:ring-4 focus:ring-blue-300 font-medium rounded-lg 
                   px-5 py-2.5 mr-2 mb-2 focus:outline-none disabled:shadow-none disabled:bg-pressedviolet disabled:text-uf"
              >
                Make Bet
              </button>
            </div>
          </div>

          <CurrentBets currentBets={[]} />
          <MakedBets currentBets={[]} />
        </div>
        <div className="flex flex-col relative gap-4 w-[733px]">
          <Rewards />
          <WinTable winningBets={[]} />
          <ResultsTable roundResult={resultTable} isLoading={isRRLoading} />
        </div>
      </div>
      <Basement />
    </div>
  );
};

export default Demopage;
