import React from "react";

const CurrentBets = ({ currentBets }) => {
  if (currentBets.length === 0) {
    return (
      <div className=" bg-uf rounded-2xl mt-8 p-8 z-20">
        <div className="font-krona text-white">Your bets in current round:</div>
        <div className="text-center font-krona text-white mt-4">None</div>
      </div>
    );
  }
  return (
    // <div className="bg-dark-blue rounded-3xl shadow-lg p-[1px] m-2">
    <div className=" bg-uf rounded-2xl mt-8 p-8 z-20">
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
    // </div>
  );
};

export default CurrentBets;
