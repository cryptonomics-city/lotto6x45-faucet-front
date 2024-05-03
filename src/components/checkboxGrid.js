import React, { useEffect, useState } from "react";
import frogup from "../assets/frog up.png";
import kuvshinkaupleft from "../assets/kuvshinka up left.png";
import frogleft from "../assets/frog left.png";

const CheckboxGrid = ({
  handleCheckboxToggle,
  checkboxes,
  errString,
  handleSubmit,
  isDisabled,
  currentRound = 0,
  roundTime = 0,
  demo = false,
}) => {
  const [remainingTime, setRemainingTime] = useState();
  // const testTime =1706359407;
  useEffect(() => {
    const interval = setInterval(() => {
      const newRemainingTime =
        Number(roundTime) - Math.floor(Date.now() / 1000);
      setRemainingTime(newRemainingTime);
    }, 1000);
    return () => clearInterval(interval);
  }, [roundTime]);
  const renderCountdown = () => {
    if (remainingTime <= 0) {
      return (
        <div>
          Round starts in:{" "}
          <span className="text-error font-krona animate-blink">Last Call</span>
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

  return (
    <>
      <div className="mb-1 lg:mb-3">
        <h1 className="font-lg400 text-acid text-2xl leading-7">
          Current round: {currentRound.toString()}
        </h1>
      </div>
      <img
        src={frogup}
        alt="Top Right Background"
        className="absolute top-[-45px] right-[-17px] z-20 size-36 lg:top-[-76px] lg:right-[7px] lg:size-auto"
      />
      <img
        src={kuvshinkaupleft}
        alt="KUL"
        className="absolute top-[54px] left-[-156px]"
      />

      <div className=" bg-uf rounded-2xl p-2 z-10 relative lg:p-8">
        <img
          src={frogleft}
          alt="FL"
          className="absolute bottom-[-200px] right-[-60px] z-10 size-72 lg:bottom-[-340px] lg:right-[-140px] lg:size-auto"
        />
        <h2 className="font-krona leading-6 text-m text-white">
          {renderCountdown()}
        </h2>
        <div className="min-h-30">
          <h3 className="font-krona leading-5 text-m text-error lg:leading-6 lg:text-xl">
            {errString}
          </h3>
        </div>
        <div className="flex justify-center">
          <div className="inline-grid grid-cols-9 gap-0 h-fit">
            {checkboxes.map((checked, index) => (
              <button
                key={index}
                onClick={() => {
                  handleCheckboxToggle(index);
                }}
                className={`w-[40px] h-[40px] lg:w-[67px] lg:h-[68px] lg:min-w-[62px] lg:m-[1px]
              cursor-pointer flex justify-center items-center
            ${
              !checked
                ? "bg-flowerviolet bg-no-repeat bg-cover text-violet"
                : "bg-floweracidpressed bg-no-repeat bg-cover text-violet"
            } `}
              >
                <h2 className="font-krona text-s lg:leading-5 lg:text-xl">
                  {" "}
                  {index + 1}
                </h2>
              </button>
            ))}
          </div>
        </div>
        <div>
          <button
            disabled={isDisabled}
            onClick={handleSubmit}
            className="text-uf mt-10 shadow-outer bg-acid leading-5 text-xl font-lg400 hover:bg-pressedviolet hover:text-pressedtextviolet focus:ring-4 focus:ring-blue-300 font-medium rounded-lg 
                   px-5 py-2.5 mr-2 mb-2 focus:outline-none disabled:shadow-none disabled:bg-pressedviolet disabled:text-uf"
          >
            Make Bet
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckboxGrid;
