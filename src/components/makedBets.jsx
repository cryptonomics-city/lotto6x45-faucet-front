import React from "react";

import kuvshdownmiddle from "../assets/kuvshinka down middle.png";
import kuvshdown from "../assets/kuvshinka down.png";
import kuvshdownleft from "../assets/kuvshinka down left.png";

const MakedBets = ({ currentBets }) => {
  if (currentBets.length === 0) {
    return (
      <div className=" bg-uf rounded-2xl p-6 relative lg:mt-8 lg:p-8">
        <img
          src={kuvshdown}
          alt="KD"
          className="absolute bottom-[-120px] right-[-70px] hidden 2xl:block "
        />
        <img
          src={kuvshdownmiddle}
          alt="KDM"
          className="absolute bottom-[-240px] left-[250px] hidden 2xl:block "
        />
        <img
          src={kuvshdownleft}
          alt="KDM"
          className="absolute bottom-[-140px] left-[120px] hidden 2xl:block "
        />
        <div className="font-krona text-white">Your bets in drawing:</div>

        <div className="text-center font-krona text-white mt-4">None</div>
      </div>
    );
  }
  return (
    <div className=" bg-uf rounded-2xl p-6 relative lg:mt-8 lg:p-8">
      <img
        src={kuvshdown}
        alt="KD"
        className="absolute bottom-[-120px] right-[-70px] hidden 2xl:block "
      />
      <img
        src={kuvshdownmiddle}
        alt="KDM"
        className="absolute bottom-[-240px] left-[250px] hidden 2xl:block "
      />
      <img
        src={kuvshdownleft}
        alt="KDM"
        className="absolute bottom-[-140px] left-[120px] hidden 2xl:block "
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
                      className={`bg-floweracid bg-cover bg-center bg-no-repeat w-[40px] h-[40px] lg:w-[59px] lg:h-[59px] rounded-full flex items-center justify-center mr-2 font-krona text-m lg:text-xl lg:leading-7  text-pressedviolet`}
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
