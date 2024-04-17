import React, { useEffect, useState } from "react";
import Lotto6x45 from "./lotto6x45";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsNetworkCorrect,
  setUserAccount,
} from "./redux/slices/login/slice";
import {
  selectIsNetworkCorrect,
  selectUserAccount,
} from "./redux/slices/login/selectors";
import Modal from "./components/modal/modal";
import { selectModalContent } from "./redux/slices/modal/selector";
import { setModalContent } from "./redux/slices/modal/slice";
import { ethers } from "ethers";
import Demopage from "./demopage";

const MainPage = () => {
  const dispatch = useDispatch();
  const userAccount = useSelector(selectUserAccount);
  const modalContent = useSelector(selectModalContent);
  const isNetworkCorrect = useSelector(selectIsNetworkCorrect);
  const expectedChainId = 11155111;

  useEffect(() => {
    const account = localStorage.getItem("userAccount");
    if (account) {
      dispatch(setUserAccount(account));
      onConnect();
    }
  }, []);
  const switchToArbitrum = () => {
    window.ethereum
      .request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x66eee" }],
      })
      .then(() => {
        // Обработайте успешное переключение сети
      })
      .catch((error) => {
        console.error("Failed to switch network:", error.code);
        // Обработайте ошибку переключения сети
        switch (error.code) {
          case -32002:
            dispatch(
              setModalContent({
                isOpn: true,
                title: "Warning",
                message:
                  "Change request already send. Please check our metamask",
              })
            );
            break;
          // Другие возможные обработки ошибок
          default:
            // Обработка для других случаев
            break;
        }
      });
  };

  const onConnect = () => {
    localStorage.setItem("userAccount", "");
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((account) => {
          dispatch(setUserAccount(account[0]));
          localStorage.setItem("userAccount", account[0]);
        });
      window.ethereum.on("accountsChanged", handleAccountsChanged);
      window.ethereum.on("chainChanged", handleChainChanged);
      const provider = new ethers.BrowserProvider(window.ethereum);
      provider.getNetwork().then((network) => {
        //console.log('Сеть:', network.name, network.chainId);

        // Пример для основной сети Ethereum, вы можете изменить это значение

        if (Number(network.chainId) !== expectedChainId) {
          dispatch(setIsNetworkCorrect(false));
          dispatch({
            isOpn: true,
            title: "Error",
            message: "Wrong metamask network",
          });
        } else {
          // console.log('Вы подключены к правильной сети.');
          dispatch(setIsNetworkCorrect(true));
        }
      });
    } else {
      dispatch(
        setModalContent({
          isOpn: true,
          title: "Warning",
          message: "Install Metamask",
        })
      );
    }
  };

  const handleAccountsChanged = (accounts) => {
    console.log("change", accounts);
    dispatch(setUserAccount(""));
    localStorage.setItem("userAccount", "");
    if (accounts.length === 0) {
      console.log("Please connect to MetaMask.");
    } else {
      dispatch(setUserAccount(accounts[0]));
      localStorage.setItem("userAccount", accounts[0]);
    }
  };
  const handleChainChanged = (network) => {
    const chainId = parseInt(network, 16);
    console.log("net", network);
    if (chainId !== expectedChainId) {
      //  console.log("Network changed");
      dispatch(setUserAccount(""));
      dispatch(setIsNetworkCorrect(false));
      localStorage.setItem("userAccount", "");
    } else {
    }
  };

  return (
    <>
      <Modal
        isOpen={modalContent.isOpen}
        onClose={() => dispatch(setModalContent(false))}
      >
        <h2>{modalContent.title}</h2>
        <p>{modalContent.message}</p>
      </Modal>
      {userAccount && isNetworkCorrect ? (
        <>
          <Lotto6x45 userAccount={userAccount} />
        </>
      ) : (
        <Demopage onConnect={onConnect} />
      )}
    </>
  );
};

export default MainPage;
