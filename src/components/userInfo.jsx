import React from "react";
import exit from "../assets/exit.png";
import { ConnectKitButton } from "connectkit";
const LoginButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, address, ensName }) => {
        return (
          <button
            onClick={show}
            className="shadow-outer text-violet bg-acid hover:bg-pressedviolet hover:text-pressedtextviolet focus:ring-4 focus:ring-violet font-medium text-m rounded-lg
               px-5 py-[10px] focus:outline-none"
          >
            {isConnected
              ? ensName ?? address
              : "Please connect your wallet with MetaMask"}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

const UserInfo = ({ USDTbalance }) => {
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
          <LoginButton
            className="shadow-outer text-violet bg-acid hover:bg-pressedviolet hover:text-pressedtextviolet focus:ring-4 focus:ring-violet font-medium text-m rounded-lg
                 px-5 py-[10px] focus:outline-none"
          >
            Please connect your wallet with MetaMask
          </LoginButton>
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
