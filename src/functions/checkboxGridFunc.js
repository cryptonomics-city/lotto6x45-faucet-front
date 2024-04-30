import { ethers } from "ethers";
import { setModalContent } from "../redux/slices/modal/slice";
import { setErrString } from "../redux/slices/checkboxes/slice";

const getSelectedCount = (checkboxes) =>
  checkboxes.filter((checkbox) => checkbox).length;

export const updateIsDisabled = (
  checkboxes,
  USDTbalance,
  minimalBetUSDT,
  dispatch,
  setIsDisabled,
  maxSelectedCheckboxes
) => {
  const selectedCount = getSelectedCount(checkboxes);
  setIsDisabled(
    selectedCount !== maxSelectedCheckboxes || USDTbalance <= minimalBetUSDT
  );
  if (USDTbalance <= minimalBetUSDT) {
    dispatch(setErrString("Not enough USDT for minimal bet"));
  } else if (selectedCount !== maxSelectedCheckboxes) {
    dispatch(setErrString("Please, take 6 numbers"));
  } else {
    dispatch(setErrString(""));
  }
};

export const handleCheckboxToggle = (index, checkboxes, setCheckboxes) => {
  setCheckboxes((prevCheckboxes) => {
    const newCheckboxes = [...prevCheckboxes];
    newCheckboxes[index] = !newCheckboxes[index];
    return newCheckboxes;
  });
};

// export const takeReward = async ({
//   winningBets,
//   provider,
//   tokenAddress,
//   erc20abi,
//   lotteryAddress,
//   lotto6x45ABIShort,
//   lotto6x45ABI,
// }) => {
//   const signer = await provider.getSigner();
//   const lotto6x45Write = new ethers.Contract(
//     lotteryAddress,
//     lotto6x45ABIShort,
//     signer
//   );
//   console.log("signer:", signer);
//   console.log("lotto6x45Write:", lotto6x45Write);
//   try {
//     const amount = BigInt(winningBets[0][1]);
//     const betId = BigInt(winningBets[0][0]);
//     await lotto6x45Write.takeReward(amount, betId);
//     return;
//   } catch (error) {
//     console.error("Error during takeReward:", error.message);
//   }
// };

export const handleSubmit = async (
  provider,
  tokenAddress,
  erc20abi,
  lotteryAddress,
  lotto6x45ABI,
  checkboxes,
  minimalBet,
  maxSelectedCheckboxes,
  setCheckboxes,
  dispatch
) => {
  try {
    const signer = await provider.getSigner();
    const erc20Write = new ethers.Contract(tokenAddress, erc20abi, signer);
    const lotto6x45Write = new ethers.Contract(
      lotteryAddress,
      lotto6x45ABI,
      signer
    );

    const selectedCount = getSelectedCount(checkboxes);
    if (selectedCount === maxSelectedCheckboxes) {
      const selectedIndexes = checkboxes.reduce((acc, isChecked, index) => {
        if (isChecked) {
          acc.push(index + 1);
        }
        return acc;
      }, []);
      const tx = await erc20Write.approve(lotteryAddress, minimalBet);
      await tx.wait();
      await lotto6x45Write.makeBet(selectedIndexes);
      setCheckboxes(new Array(45).fill(false));
      dispatch(
        setModalContent({
          isOpn: true,
          title: "Bet accepted",
          message: `Your bet is: ${selectedIndexes}`,
        })
      );
    } else {
    }
  } catch (error) {
    console.error("Ошибка во время обработки:", error.message);

    // Обработка ошибок метода approve
    if (error.code === "TRANSACTION_REVERTED") {
      dispatch(
        setModalContent({
          isOpn: true,
          title: "Error",
          message: "Transaction decline",
        })
      );
    }
    if (error.code === "CALL_EXCEPTION") {
      //console.log('Транзакция отклонена. Недостаточное разрешение.');
      dispatch(
        setModalContent({
          isOpn: true,
          title: "Error",
          message: "Transaction decline (CALL_EXCEPTION)",
        })
      );
    }
    if (error.code === "ACTION_REJECTED") {
      dispatch(
        setModalContent({
          isOpn: true,
          title: "Error",
          message: "Transaction rejected by user",
        })
      );
    }

    // Другие возможные обработки ошибок
  }
};
