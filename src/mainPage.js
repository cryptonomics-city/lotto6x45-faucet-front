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
import { useAccount } from "wagmi";

const PageSelector = () => {
  const dispatch = useDispatch();
  const { address, isConnecting, isDisconnected } = useAccount();
  if (isConnecting) {
    return <Demopage />;
  }
  if (isDisconnected) {
    dispatch(setUserAccount(null));
    return <Demopage />;
  }
  dispatch(setUserAccount(address));
  console.log(address);
  return <Lotto6x45 userAccount={address} />;
};
const MainPage = () => {
  const modalContent = useSelector(selectModalContent);
  const dispatch = useDispatch();
  return (
    <>
      <Modal
        isOpen={modalContent.isOpen}
        onClose={() => dispatch(setModalContent(false))}
      >
        <h2>{modalContent.title}</h2>
        <p>{modalContent.message}</p>
      </Modal>
      <PageSelector />
    </>
  );
};
export default MainPage;
