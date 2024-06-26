import React from "react";
import frogright from "../assets/frog right.png";

const WinTable = ({ winningBets, onClick, minimalBetUSDT = 0 }) => {
  const prizes = {
    0: 0,
    1: 1 * minimalBetUSDT,
    2: 4 * minimalBetUSDT,
    3: 30 * minimalBetUSDT,
    4: 500 * minimalBetUSDT,
    5: 25000 * minimalBetUSDT,
    6: 100000 * minimalBetUSDT,
  };
  const getBG = (isTrue) => {
    return isTrue ? "bg-floweracid" : "bg-flowerviolet";
  };
  return (
    <div className="flex flex-col relative">
      <img
        src={frogright}
        alt="FR"
        className="absolute top-[-158px] right-[-110px] w-[368px] h-[450px] hidden lg:block"
      />
      <h1 className="font-lg400 text-acid text-2xl leading-7 mb-3">
        Winning bets
      </h1>
      <div className="bg-uf rounded-2xl p-2 lg:p-8">
        <table className="w-full ">
          <thead>
            <tr>
              <th className="p-1 lg:p-2 text-left font-jost font-thin text-s lg:text-xl lg:leading-7 text-pressedtextviolet">
                Round No
              </th>
              <th className="p-1 lg:p-2 text-left font-jost font-thin text-s lg:text-xl lg:leading-7 text-pressedtextviolet">
                Date
              </th>
              <th className="p-1 lg:p-2 text-left font-jost font-thin text-s lg:text-xl lg:leading-7 text-pressedtextviolet">
                Your numbers
              </th>
              <th className="p-1 lg:p-2 text-left font-jost font-thin text-s lg:text-xl lg:leading-7 text-pressedtextviolet">
                Wins sETH
              </th>
            </tr>
          </thead>
          <tbody>
            {winningBets.map((bet, index) => (
              <tr key={index}>
                <td className="font-krona p-1 text-xs text-white lg:p-2 lg:text-sm lg:leading-4 whitespace-normal">
                  {bet[1].toString()}
                </td>
                <td className="font-krona p-1 text-xs text-white lg:p-2 lg:text-sm lg:leading-4">
                  {bet[5]}
                  <br />
                  {bet[7]}
                </td>
                <td className="p-1 lg:p-2">
                  <div className="grid grid-cols-3 lg:flex">
                    {bet[2].map((number, numberIndex) => (
                      <div
                        key={numberIndex}
                        className={`${getBG(bet[6][numberIndex])}
                        w-[20px] h-[20px] lg:w-[47px] lg:h-[48px] bg-cover rounded-full flex items-center justify-center mr-2 font-jost text-xs lg:text-xl leading-7 text-pressedviolet               
                                            `}
                      >
                        {number.toString()}
                      </div>
                    ))}
                  </div>
                </td>
                <td className=" font-krona p-1 text-xs text-white lg:p-2 lg:text-sm lg:leading-4">
                  {prizes[bet[3]].toString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          onClick={onClick}
          disabled={winningBets.length === 0}
          className="text-uf mt-10 shadow-outer bg-acid leading-5 text-xl font-lg400 hover:bg-pressedviolet hover:text-pressedtextviolet focus:ring-4 focus:ring-blue-300 font-medium rounded-lg 
                   px-5 py-2.5 mr-2 mb-2 focus:outline-none disabled:shadow-none disabled:bg-pressedviolet disabled:text-uf"
        >
          Take reward
        </button>
      </div>
    </div>
  );
};

export default WinTable;
