import React from "react";

const Rewards = ({ minimalBet = 0 }) => {
  return (
    <div className="bg-uf rounded-2xl p-2 lg:p-8">
      <div className="font-lg400 text-white leading-7 text-2xl lg:text-3xl">
        rewards
      </div>
      <div className="grid grid-cols-2 gap-4 mt-2 lg:mt-4">
        <div className="flex flex-col items-start justify-center bg-acid rounded-lg p-4">
          <h2 className="font-jost leading-7 text-xl text-pressedtextviolet">
            1 match
          </h2>
          <h3 className="font-krona leading-6 text-xl text-violet">
            {minimalBet.toLocaleString("en-US")} sETH
          </h3>
        </div>
        <div className="flex flex-col items-start justify-center bg-acid rounded-lg p-4">
          <h2 className="font-jost leading-7 text-xl text-pressedtextviolet">
            2 matches
          </h2>
          <h3 className="font-krona leading-6 text-xl text-violet">
            {(minimalBet * 4).toLocaleString("en-US")} sETH
          </h3>
        </div>
        <div className="flex flex-col items-start justify-center bg-acid rounded-lg p-4">
          <h2 className="font-jost leading-7 text-xl text-pressedtextviolet">
            3 matches
          </h2>
          <h3 className="font-krona leading-6 text-xl text-violet">
            {(minimalBet * 30).toLocaleString("en-US")} sETH
          </h3>
        </div>
        <div className="flex flex-col items-start justify-center bg-acid rounded-lg p-4">
          <h2 className="font-jost leading-7 text-xl text-pressedtextviolet">
            4 matches
          </h2>
          <h3 className="font-krona leading-6 text-xl text-violet">
            {(minimalBet * 500).toLocaleString("en-US")} sETH
          </h3>
        </div>
        <div className="flex flex-col items-start justify-center bg-acid rounded-lg p-4">
          <h2 className="font-jost leading-7 text-xl text-pressedtextviolet">
            5 matches
          </h2>
          <h3 className="font-krona leading-6 text-xl text-violet">
            {(minimalBet * 25000).toLocaleString("en-US")} sETH
          </h3>
        </div>
        <div className="flex flex-col items-start justify-center bg-acid rounded-lg p-4">
          <h2 className="font-jost leading-7 text-xl text-pressedtextviolet">
            6 matches
          </h2>
          <h3 className="font-krona leading-6 text-xl text-violet">
            {(minimalBet * 100000).toLocaleString("en-US")} sETH
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
