import React from "react";

import kuvshdownmiddle from "../assets/kuvshinka down middle.png";
import kuvshdown from "../assets/kuvshinka down.png";
import kuvshdownleft from "../assets/kuvshinka down left.png";

const MakedBets = ({ currentBets }) => {
  if (currentBets.length === 0) {
    return (
      <div className=" bg-uf rounded-2xl mt-8 p-8 relative">
        <img
          src={kuvshdown}
          alt="KD"
          className="absolute bottom-[-120px] right-[-70px] "
        />
        <img
          src={kuvshdownmiddle}
          alt="KDM"
          className="absolute bottom-[-240px] left-[250px] "
        />
        <img
          src={kuvshdownleft}
          alt="KDM"
          className="absolute bottom-[-140px] left-[120px] "
        />
        <div className="font-krona text-white">Your bets in drawing:</div>

        <div className="text-center font-krona text-white mt-4">None</div>
      </div>
    );
  }
  return (
    <div className=" bg-uf rounded-2xl mt-8 p-8 relative">
      <img
        src={kuvshdown}
        alt="KD"
        className="absolute bottom-[-120px] right-[-70px] "
      />
      <img
        src={kuvshdownmiddle}
        alt="KDM"
        className="absolute bottom-[-240px] left-[250px] "
      />
      <img
        src={kuvshdownleft}
        alt="KDM"
        className="absolute bottom-[-140px] left-[120px] "
      />
      <div className="font-krona text-white">Your bets in drawing:</div>
      <table className="w-full mt-4">
        <tbody>
          {currentBets.map((bet, index) => (
            <tr key={index}>
              <td>
                <div className="flex ">
                  {bet[2].map((number, numberIndex) => (
                    <div
                      key={numberIndex}
                      className={`bg-floweracid bg-center bg-no-repeat w-[59px] h-[59px] rounded-full flex items-center justify-center mr-2 font-krona text-xl leading-7 text-pressedviolet`}
                    >
                      {number.toString()}
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MakedBets;
