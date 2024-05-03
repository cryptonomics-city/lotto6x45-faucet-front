import React from "react";

const Rewards = () => {
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
          <h3 className="font-krona leading-6 text-xl text-violet">0.1 sETH</h3>
        </div>
        <div className="flex flex-col items-start justify-center bg-acid rounded-lg p-4">
          <h2 className="font-jost leading-7 text-xl text-pressedtextviolet">
            2 match
          </h2>
          <h3 className="font-krona leading-6 text-xl text-violet">0.4 sETH</h3>
        </div>
        <div className="flex flex-col items-start justify-center bg-acid rounded-lg p-4">
          <h2 className="font-jost leading-7 text-xl text-pressedtextviolet">
            3 match
          </h2>
          <h3 className="font-krona leading-6 text-xl text-violet">3 sETH</h3>
        </div>
        <div className="flex flex-col items-start justify-center bg-acid rounded-lg p-4">
          <h2 className="font-jost leading-7 text-xl text-pressedtextviolet">
            4 match
          </h2>
          <h3 className="font-krona leading-6 text-xl text-violet">50 sETH</h3>
        </div>
        <div className="flex flex-col items-start justify-center bg-acid rounded-lg p-4">
          <h2 className="font-jost leading-7 text-xl text-pressedtextviolet">
            5 match
          </h2>
          <h3 className="font-krona leading-6 text-xl text-violet">
            2 500 sETH
          </h3>
        </div>
        <div className="flex flex-col items-start justify-center bg-acid rounded-lg p-4">
          <h2 className="font-jost leading-7 text-xl text-pressedtextviolet">
            6 match
          </h2>
          <h3 className="font-krona leading-6 text-xl text-violet">
            10 000 sETH
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
