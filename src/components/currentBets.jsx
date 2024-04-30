import React from "react";

const CurrentBets = ({ currentBets }) => {
  if (currentBets.length === 0) {
    return (
      <div className=" bg-uf rounded-2xl  p-6 z-20 lg:mt-8 lg:p-8">
        <div className="font-krona text-white">Your bets in current round:</div>
        <div className="text-center font-krona text-white mt-4">None</div>
      </div>
    );
  }
  return (
    <div className=" bg-uf rounded-2xl p-6 z-20 lg:mt-8 lg:p-8">
      <div className="font-krona text-white">Your bets in current round:</div>
      <table className="w-full mt-4">
        <tbody>
          {currentBets.map((bet, index) => (
            <tr key={index}>
              <td>
                <div className="flex ">
                  {bet[2].map((number, numberIndex) => (
                    <div
                      key={numberIndex}
                      className={`bg-floweracid bg-cover bg-center bg-no-repeat w-[40px] h-[40px]  lg:w-[59px] lg:h-[59px] rounded-full flex items-center justify-center mr-2 font-krona text-m lg:text-xl lg:leading-7 text-pressedviolet`}
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

export default CurrentBets;
