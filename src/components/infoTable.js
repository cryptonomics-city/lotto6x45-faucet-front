import React from "react";

const InfoTable = ({ allBets }) => {
    const prizes = {
        0: 0,
        2: 1,
        3: 10,
        4: 50,
        5: 2000
    };
    const getBorderColor = (isTrue) => {
       
        return isTrue ? 'border-green-600' : 'border-gray-800';
    };
    const getOpacity = (win) => {
        const opacityClass = win >= 2 ? 'opacity-100' : 'opacity-50';
        return opacityClass;
    };
    return (
        <div className='p-8 border-gray-700 border'>
            <div className="font-bold">Your bets</div>
            <table className="border-collapse border border-blue-950 w-full mt-4">
                <thead>
                    <tr>
                        <th className="font-semibold border border-black p-2">Round number</th>
                        <th className="font-semibold border border-black p-2">Round date</th>
                        <th className="font-semibold border border-black p-2">Your numbers</th>
                        <th className="font-semibold border border-black p-2">Wins USDT</th>
                    </tr>
                </thead>
                <tbody>
                    {allBets.map((bet, index) => (
                        <tr key={index}>
                            <td className="border border-blue-950 p-2">
                                {bet[1].toString()} {/* Assuming Round number is at index 1 */}
                            </td>
                            <td className="border border-blue-950 p-2">
                                {bet[5]}
                            </td>
                            <td className="border border-blue-950 p-2">
                                <div className="flex">
                                    {bet[2].map((number, numberIndex) => (
                                        <div
                                            key={numberIndex}
                                            className={`w-8 h-8 ${getBorderColor(bet[6][numberIndex])} bg-yellow-300 
                                            ${getOpacity(bet[3])}
                                            border-y-4 rounded-full flex items-center justify-center mr-2`}
                                        >
                                            {number.toString()}
                                        </div>
                                    ))}
                                </div>
                            </td>
                            <td className="border border-blue-950 p-2">
                                {prizes[bet[3]].toString()} {/* Assuming Wins is at index 3 */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default InfoTable;