import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import lotto6x45ABI from "./ABI/lotto6x45ABI";
import { lotto6x45ABIShort } from "./ABI/lotto6x45ABI";
import erc20abi from "./ABI/erc20ABI";

import {
  handleSubmit,
  handleCheckboxToggle,
  updateIsDisabled,
} from "./functions/checkboxGridFunc";

import CheckboxGrid from "./components/checkboxGrid";
import UserInfo from "./components/userInfo";
import ResultsTable from "./components/resultsTable";
import WinTable from "./components/winTable";
import CurrentBets from "./components/currentBets";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBets,
  getCurrentRound,
  getMinimalBet,
  getMinimalBetUSDT,
  getMyBalance,
  getResultTable,
  setCurrentBets,
  setMakedBets,
  setWinningBets,
  takeAllReward,
  takeReward,
} from "./redux/slices/lotto6x45/slice";
import { setUserAccount } from "./redux/slices/login/slice";
import {
  selectCurrentRound,
  selectMinimalBetUSDT,
  selectMinimalBet,
  selectUSDTBalance,
  selectAllBets,
  selectResultTable,
  selectCurrentBets,
  selectMakedBets,
  selectIsRoundResultLoading,
  selectWinningBets,
} from "./redux/slices/lotto6x45/selectors";
import { selectErrString } from "./redux/slices/checkboxes/selectors";
import MakedBets from "./components/makedBets";
import Rewards from "./components/rewards";
import Basement from "./components/basement";

const Lotto6x45 = (props) => {
  const dispatch = useDispatch();

  const maxSelectedCheckboxes = 6;

  const tokenAddress = process.env.REACT_APP_TOKEN_ADRESS;
  const lotteryAddress = process.env.REACT_APP_6x45x1;
  const provider = new ethers.BrowserProvider(window.ethereum);
  const voidSigner = new ethers.VoidSigner(props.userAccount, provider);
  const lotto6x45 = new ethers.Contract(
    lotteryAddress,
    lotto6x45ABI,
    voidSigner
  );
  const lotto6x45Short = new ethers.Contract(
    lotteryAddress,
    lotto6x45ABIShort,
    voidSigner
  );

  const erc20 = new ethers.Contract(tokenAddress, erc20abi, provider);

  const currentRound = useSelector(selectCurrentRound);
  const minimalBetUSDT = useSelector(selectMinimalBetUSDT);
  const minimalBet = useSelector(selectMinimalBet);
  const USDTBalance = useSelector(selectUSDTBalance);
  const allBets = useSelector(selectAllBets);
  const resultTable = useSelector(selectResultTable);
  const errString = useSelector(selectErrString);
  const currentBets = useSelector(selectCurrentBets);
  const makedBets = useSelector(selectMakedBets);
  const winningBets = useSelector(selectWinningBets);
  const isRRLoading = useSelector(selectIsRoundResultLoading);

  const [checkboxes, setCheckboxes] = useState(Array(45).fill(false));
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    updateIsDisabled(
      checkboxes,
      USDTBalance,
      minimalBetUSDT,
      dispatch,
      setIsDisabled,
      maxSelectedCheckboxes
    );
    // eslint-disable-next-line
  }, [checkboxes]);

  useEffect(() => {
    dispatch(getCurrentRound(lotto6x45Short)).then(
      dispatch(getResultTable(lotto6x45Short))
    );
    dispatch(getMinimalBetUSDT({ lotto6x45Short, erc20 }));
    dispatch(getMinimalBet({ lotto6x45Short }));
    dispatch(getMyBalance({ provider, erc20 }));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(setCurrentBets());
    dispatch(setMakedBets());
    dispatch(setWinningBets());
    // eslint-disable-next-line
  }, [allBets]);

  useEffect(() => {
    dispatch(
      getAllBets({ lotto6x45, lotto6x45Short, currentRound: currentRound[0] })
    );
    dispatch(getResultTable(lotto6x45Short));
    // eslint-disable-next-line
  }, [currentRound]);
  const disconnect = () => {
    dispatch(setUserAccount(null));
    localStorage.removeItem("userAccount");
  };

  const setupEventListeners = async () => {
    lotto6x45Short.addListener("BetMade", (betId, address, roundNum, bett) => {
      dispatch(
        getAllBets({ lotto6x45, lotto6x45Short, currentRound: currentRound[0] })
      );
    });
  };
  useEffect(() => {
    setupEventListeners();
    // eslint-disable-next-line
  }, [currentRound]);
  // const resetCheckboxes = () => {
  //   setCheckboxes(new Array(checkboxes.length).fill(false));
  // };
  const onClick = () => {
    //dispatch (setWinningBets());
    if (winningBets.length === 1) {
      dispatch(
        takeReward({
          winningBets,
          provider,
          lotteryAddress,
          lotto6x45ABIShort,
        })
      );
    }
    if (winningBets.length > 1) {
      dispatch(
        takeAllReward({
          winningBets,
          provider,
          lotteryAddress,
          lotto6x45ABIShort,
        })
      );
    }
  };

  return (
    <div className="">
      <UserInfo
        userAccount={props.userAccount}
        USDTbalance={USDTBalance}
        minimalBetUSDT={minimalBetUSDT}
        disconnect={disconnect}
      />

      <div className="flex flex-row flex-wrap m-auto justify-evenly pt-10 gap-20">
        <div className="flex flex-col relative gap-4  w1500: mb-60 min-w-[733px] w-[733px]">
          <CheckboxGrid
            handleCheckboxToggle={(index) =>
              handleCheckboxToggle(index, checkboxes, setCheckboxes)
            }
            checkboxes={checkboxes}
            errString={errString}
            handleSubmit={() =>
              handleSubmit(
                provider,
                tokenAddress,
                erc20abi,
                lotteryAddress,
                lotto6x45ABIShort,
                checkboxes,
                minimalBet,
                maxSelectedCheckboxes,
                setCheckboxes,
                dispatch
              )
            }
            isDisabled={isDisabled}
            currentRound={currentRound[0]}
            roundTime={currentRound[1]}
            setCheckboxes={setCheckboxes}
          />
          <CurrentBets currentBets={currentBets} />
          <MakedBets currentBets={makedBets} />
        </div>
        <div className="flex flex-col relative gap-4 w-[733px]">
          <Rewards />
          <WinTable winningBets={winningBets} onClick={() => onClick()} />
          <ResultsTable roundResult={resultTable} isLoading={isRRLoading} />
        </div>
      </div>
      <Basement />
    </div>
  );
};

export default Lotto6x45;
