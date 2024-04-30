import React, { useEffect, useState } from "react";
import { useWeb3Modal, useDisconnect } from "@web3modal/ethers/react";
import exit from "../assets/exit.png";
import { setDefault } from "../redux/slices/lotto6x45/slice";
import { useDispatch } from "react-redux";
import { setUserAccount } from "../redux/slices/login/slice";

const LoginButton = () => {
  const { open } = useWeb3Modal();

  const handleClick = () => {
    open();
    setUserAccount();
  };
  return (
    <button
      onClick={handleClick}
      className="shadow-outer text-violet bg-acid hover:bg-pressedviolet hover:text-pressedtextviolet focus:ring-4 focus:ring-violet font-medium text-m rounded-lg
               px-2 py-2 focus:outline-none lg:px-5 lg:py-[10px]"
    >
      Please connect your wallet
    </button>
  );
};

const UserInfo = ({ USDTbalance, userAccount }) => {
  const dispatch = useDispatch();
  const { disconnect } = useDisconnect();
  return (
    <div className=" bg-uf flex w-full lg:h-[119px]">
      <div className="flex-grow text-left">
        <h1 className="pl-2 pt-2 font-lg400 text-white text-xl lg:pl-[200px] lg:pt-[34px] lg:text-3xl">
          Sepolia Testnet Faucet
        </h1>

        <div className="pl-2 lg:flex lg:pl-[200px] lg:pt-[10px]">
          {USDTbalance ? (
            <h3 className="font-jost text-s lg:text-xl">
              <span className="whitespace-nowrap">Your balance:</span>{" "}
              <span className="whitespace-nowrap">
                {USDTbalance.toString()} USDT
              </span>
            </h3>
          ) : (
            <h3 className="font-jost text-s lg:text-xl">
              Your balance: XXX USDT
            </h3>
          )}

          <h3 className="font-jost text-s lg:text-xl lg:pl-5">Bet: 1 USDT</h3>
        </div>
      </div>
      <div className="flex-grow flex text-right pr-2 pt-2 items-start lg:pr-[200px] lg:pt-[34px] lg:justify-end">
        {userAccount ? (
          <div className="flex-grow justify-between ">
            <div
              onClick={() => {
                dispatch(setDefault());
                disconnect();
              }}
              className=" font-jost text-white leading-7 font-medium text-xl cursor-pointer flex gap-2 justify-end items-center"
            >
              Logout
              <img
                src={exit}
                alt="exit"
                className="cursor-pointer"
                style={{ height: "20px", width: "20px" }}
              />
            </div>
            <div className="font-jost mt-3 text-xl">
              Wallet: {userAccount.slice(0, 6)}...{userAccount.slice(-6)}
            </div>
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
};

export default UserInfo;
