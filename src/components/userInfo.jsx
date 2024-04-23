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
               px-5 py-[10px] focus:outline-none"
    >
      Please connect your wallet
    </button>
  );
};

const UserInfo = ({ USDTbalance, userAccount }) => {
  const dispatch = useDispatch();
  const { disconnect } = useDisconnect();
  return (
    <div className=" h-[119px] bg-uf">
      <div className="flex w-full">
        <div className="flex-grow text-left">
          <h1 className="pl-[200px] pt-[34px] font-lg400 text-white text-3xl leading-8">
            Sepolia Testnet Faucet
          </h1>

          <div className="flex pl-[200px] pt-[10px]">
            {USDTbalance ? (
              <h3 className="font-jost leading-7 font-medium text-xl">
                Your balance: {USDTbalance.toString()} USDT
              </h3>
            ) : (
              <h3 className="font-jost leading-7 font-medium text-xl">
                Your balance: XXX USDT
              </h3>
            )}

            <h3 className="font-jost font-medium leading-7 text-xl pl-5">
              Bet: 1 USDT
            </h3>
          </div>
        </div>
        <div className=" flex-grow text-right pr-[200px] pt-[34px]">
          {userAccount ? (
            <>
              <div
                onClick={() => {
                  dispatch(setDefault());
                  disconnect();
                }}
                className="font-jost text-white leading-7 font-medium text-xl cursor-pointer flex gap-2 items-center justify-end"
              >
                Logout
                <img
                  src={exit}
                  alt="exit"
                  className="cursor-pointer"
                  style={{ height: "20px", width: "20px" }}
                />
              </div>
              <div className="font-jost mt-3 leading-7 font-medium text-xl">
                Wallet: {userAccount.slice(0, 6)}...{userAccount.slice(-6)}
              </div>
            </>
          ) : (
            <LoginButton
              className="shadow-outer text-violet bg-acid hover:bg-pressedviolet hover:text-pressedtextviolet focus:ring-4 focus:ring-violet font-medium text-m rounded-lg
                 px-5 py-[10px] focus:outline-none"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
