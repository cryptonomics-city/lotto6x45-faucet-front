/* global BigInt */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ethers } from "ethers";

const initialState = {
  currentRound: [],
  roundResult: [],
  minimalBetUSDT: "",
  minimalBet: "",
  USDTBalance: "",
  allBets: [],
  resultTable: [],
  currentBets: [],
  makedBets: [],
  winningBets: [],
  isRoundResultLoading: false,
};
export const getCurrentRound = createAsyncThunk(
  "lotto6x45/getCurrentRound",
  async (lotto6x45Short, { dispatch }) => {
    try {
      const currentRound = await lotto6x45Short.getCurrentRound();
      const serializedRound = currentRound.map((num) =>
        typeof num === "bigint"
          ? num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER
            ? num.toString()
            : Number(num)
          : num
      );
      return serializedRound;
    } catch (error) {
      console.error("Error during getCurrentRound:", error.message);
    }
  }
);
export const getMinimalBetUSDT = createAsyncThunk(
  "lotto6x45/getMinimalBetUSDT",
  async ({ lotto6x45Short, erc20 }) => {
    try {
      const mb = await lotto6x45Short.getMinimalBetAmount();
      const dec = await erc20.decimals();
      return ethers.formatUnits(mb, dec);
    } catch (error) {
      console.error("Error during getMinimalBet:", error.message);
    }
  }
);
export const getMinimalBet = createAsyncThunk(
  "lotto6x45/getMinimalBet",
  async ({ lotto6x45Short }) => {
    try {
      const mb = await lotto6x45Short.getMinimalBetAmount();
      return Number(mb);
    } catch (error) {
      console.error("Error during getMinimalBet:", error.message);
    }
  }
);

export const takeAllReward = createAsyncThunk(
  "lotto6x45/takeAllReward",
  async ({ winningBets, provider, lotteryAddress, lotto6x45ABIShort }) => {
    const signer = await provider.getSigner();
    const lotto6x45Write = new ethers.Contract(
      lotteryAddress,
      lotto6x45ABIShort,
      signer
    );

    const roundArr = winningBets.map((bet) => BigInt(bet[0]));
    const idArr = winningBets.map((bet) => BigInt(bet[1]));
    console.log("roundArr", roundArr);
    console.log("idArr", idArr);
    try {
      await lotto6x45Write.takeAllReward(idArr, roundArr);
      return;
    } catch (error) {
      console.error("Error during takeAllRewards:", error.message);
    }
  }
);

export const takeReward = createAsyncThunk(
  "lotto6x45/takeReward",
  async ({ provider, lotteryAddress, lotto6x45ABIShort, winningBets }) => {
    const signer = await provider.getSigner();
    const lotto6x45Write = new ethers.Contract(
      lotteryAddress,
      lotto6x45ABIShort,
      signer
    );
    console.log("signer:", signer);
    console.log("lotto6x45Write:", lotto6x45Write);
    try {
      const amount = BigInt(winningBets[0][1]);
      const betId = BigInt(winningBets[0][0]);
      await lotto6x45Write.takeReward(amount, betId);
      return;
    } catch (error) {
      console.error("Error during takeReward:", error.message);
    }
  }
);
export const getMyBalance = createAsyncThunk(
  "lotto6x45/getMyBalance",
  async ({ provider, erc20 }) => {
    try {
      const signer = await provider.getSigner();
      const signerAdress = await signer.getAddress();
      const balance = await erc20.balanceOf(signerAdress);
      const dec = await erc20.decimals();
      const balanceDec = ethers.formatUnits(balance, dec);
      return balanceDec;
    } catch (error) {
      console.error("Error during getMyBalance:", error.message);
    }
  }
);

export const getRoundResult = createAsyncThunk(
  "lotto6x45/getRoundResult",
  async ({ round, lotto6x45Short }, ThunkAPI) => {
    if (round) {
      try {
        const roundRes = await lotto6x45Short.getRoundResult(round);
        // Проверить и преобразовать только первый элемент если он BigNumber
        const convertBigInt = (value) =>
          typeof value === "bigint" ? Number(value) : value;

        // Преобразовать элементы, если они bigint или массивы bigint
        const serializableRoundRes =
          Array.isArray(roundRes) && roundRes.length
            ? roundRes.map((value, index) =>
                (index === 0 || index === 1) && Array.isArray(value) // Проверить, является ли элемент массивом в [0] или [1]
                  ? value.map((innerValue) => convertBigInt(innerValue)) // Преобразовать каждый элемент в подмассиве
                  : convertBigInt(value)
              ) // Преобразовать сам элемент, если он не массив
            : roundRes;
        return serializableRoundRes;
      } catch (error) {
        console.error("Error during getRoundResult:", error.message);
      }
    }
  }
);

export const getResultTable = createAsyncThunk(
  "lotto6x45/getResultTable",
  async (lotto6x45Short, ThunkAPI) => {
    const state = ThunkAPI.getState();
    try {
      if (state.lotto6x45.currentRound) {
        const startRound = Math.max(
          0,
          Number(state.lotto6x45.currentRound[0]) - 6
        );
        let rounds = [];

        for (
          let round = Number(state.lotto6x45.currentRound[0]) - 2;
          round >= startRound;
          round--
        ) {
          const roundRes = (
            await ThunkAPI.dispatch(getRoundResult({ round, lotto6x45Short }))
          ).payload;
          const date = new Date(Number(roundRes[0]) * 1000).toLocaleString();
          const numbers = Object.values(roundRes[1]).map(Number);

          const resultObj = {
            roundNo: round,
            date: date,
            numbers: numbers,
          };

          rounds = [...rounds, resultObj];
        }
        return rounds;
      }
    } catch (error) {
      console.error("Error during getResultTable:", error.message);
    }
  }
);

export const getAllBets = createAsyncThunk(
  "lotto6x45/getAllBets",
  async ({ lotto6x45, lotto6x45Short, currentRound }, ThunkAPI) => {
    try {
      const allBetsResponse = await lotto6x45.getAllBets();
      const convertBigInt = (value, index) => {
        if (typeof value === "bigint") {
          if (index === 0) {
            return value.toString(); // Преобразовать в строку для индекса 0
          } else {
            return Number(value); // Преобразовать в число для других индексов
          }
        }
        return value;
      };
      const serializableAllBetsResponse = allBetsResponse.map((bet) =>
        bet.map((value, index) => {
          if (index === 2 && Array.isArray(value)) {
            return value.map((innerValue) => convertBigInt(innerValue, index));
          } else {
            return convertBigInt(value, index);
          }
        })
      );
      const cr = Number(currentRound);
      const processedBets = await Promise.all(
        serializableAllBetsResponse.map(async (betObject) => {
          const roundNumber = Number(betObject[1]);
          if (roundNumber <= cr - 2) {
            let roundRes = (
              await ThunkAPI.dispatch(
                getRoundResult({ round: roundNumber, lotto6x45Short })
              )
            ).payload;
            if (roundRes && roundRes.length > 1) {
              const betNumbers = betObject[2];
              const roundNumbers = roundRes[1];
              const matchedNumbers = betNumbers.map((num) =>
                roundNumbers.includes(num)
              );
              const date = new Date(
                Number(roundRes[0]) * 1000
              ).toLocaleString();
              const newBetObject = { ...betObject, 5: date, 6: matchedNumbers };
              return newBetObject;
            }
            return null; // Явно возвращаем null, если условие не выполнено
          } else {
            const newBetObject = { ...betObject, 5: "not played yet", 6: [] };
            return newBetObject;
          }
        })
      );
      return processedBets.filter((bet) => bet !== null); // Фильтруем null значения
    } catch (error) {
      console.error("Error during getAllBets:", error.message);
    }
  }
);

export const lotto6x45Slice = createSlice({
  name: "lotto6x45",
  initialState,
  reducers: {
    setRoundResult(state, action) {
      state.roundResult = action.payload;
    },
    setCheckboxes(state, action) {
      state.checkboxes = action.payload;
    },
    setCurrentBets(state) {
      state.currentBets = state.allBets.filter(
        (bet) => bet[1] === state.currentRound[0]
      );
    },
    setMakedBets(state) {
      state.makedBets = state.allBets.filter(
        (bet) => bet[1] === state.currentRound[0] - 1
      );
    },
    setWinningBets(state) {
      const processedBets = state.allBets.filter(
        (bet) => bet[3] >= 2 && !bet[4]
      );

      state.winningBets = processedBets;
    },
    setDefault(state) {
      return initialState; // Возвращаем state к исходному состоянию
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMinimalBetUSDT.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getMinimalBetUSDT.fulfilled, (state, action) => {
        state.minimalBetUSDT = action.payload;
      })
      .addCase(getMinimalBet.fulfilled, (state, action) => {
        state.minimalBet = action.payload;
      })
      .addCase(getMyBalance.fulfilled, (state, action) => {
        state.USDTBalance = action.payload;
      })
      .addCase(getAllBets.fulfilled, (state, action) => {
        state.allBets = action.payload;
      })
      .addCase(getRoundResult.fulfilled, (state, action) => {
        state.roundResult = action.payload;
        state.isRoundResultLoading = false;
      })
      .addCase(getRoundResult.pending, (state, action) => {
        state.isRoundResultLoading = true;
      })
      .addCase(getResultTable.fulfilled, (state, action) => {
        state.resultTable = action.payload;
      })
      .addCase(getResultTable.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(getCurrentRound.fulfilled, (state, action) => {
        state.currentRound = action.payload;
      });
    // .addCase(takeReward.fulfilled, (state, action) => {
    //     state.takeReward = true;
    // },)
  },
});

export const {
  setCurrentRound,
  setRoundResult,
  setCheckboxes,
  setCurrentBets,
  setMakedBets,
  setWinningBets,
  setDefault,
} = lotto6x45Slice.actions;
export default lotto6x45Slice.reducer;
