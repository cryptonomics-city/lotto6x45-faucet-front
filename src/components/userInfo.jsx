import React from "react";
import exit from "../assets/exit.png";

const UserInfo = ({ userAccount, USDTbalance, minimalBetUSDT, disconnect }) => {
  return (
    <div className=" h-[119px] bg-uf">
      <div className="flex w-full">
        <div className="flex-grow text-left">
          <h1 className="pl-[200px] pt-[34px] font-lg400 text-white text-3xl leading-8">
            Sepolia Testnet Faucet
          </h1>
          <div className="flex pl-[200px] pt-[10px]">
            <h3 className="font-jost leading-7 font-medium text-xl">
              Your balance: {USDTbalance.toString()} USDT
            </h3>
            <h3 className="font-jost font-medium leading-7 text-xl pl-5">
              Bet: 1 USDT
            </h3>
          </div>
        </div>
        <div className="flex-grow text-right pr-[200px] pt-[34px]">
          <div
            onClick={disconnect}
            className="font-jost text-white leading-7 font-medium text-xl cursor-pointer flex gap-2 items-center justify-end"
          >
            Logout
            <img
              onClick={disconnect}
              src={exit}
              alt="exit"
              className="cursor-pointer"
              style={{ height: "20px", width: "20px" }}
            />
          </div>
          <div className="font-jost mt-3 leading-7 font-medium text-xl">
            Wallet: {userAccount.slice(0, 4)}...{userAccount.slice(-8)}
          </div>
        </div>
      </div>
    </div>
    // <div className="flex justify-between w-full text-white p-4">
    //   <div className="pr-5">Wallet: {userAccount}</div>
    //   <div className="flex flex-row">
    //     <div>Your balance: {USDTbalance.toString()} USDT</div>
    //     <div className="relative text-right pl-5">Bet: 1 USDT</div>
    //     <div className="pl-3">
    //       <img
    //         onClick={disconnect}
    //         src={exit}
    //         alt="exit"
    //         className="cursor-pointer"
    //         style={{ height: "20px", width: "20px" }}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default UserInfo;
