export const lotto6x45ABIShort = [
    // 
    "function getMinimalBetAmount() external view returns(uint256)",
    "function makeBet(uint8[6] memory bet) external",
    "function getCurrentRound() external view returns(uint256, uint256)",
    //"function getBets(uint256 roundNum) external view returns (uint256[] memory betIds, uint8[6][] memory bets, bool[] memory wins)",
    //"function getAllBets() public view returns (Bet[] memory result)",
    //"function getRoundResult(uint256 roundNum) external view returns (uint8[6] memory result)",
   "function getRoundResult(uint256 roundNum) public view returns (uint256, uint8[6] memory)",
    "function takeReward(uint256 roundNum, uint256 betId)",
    
    
    "function getLastRoundResults(uint256 num) public view returns(uint256[] memory, uint8[6][] memory)",
    "function takeAllReward(uint256[] roundNums, uint256[] betsId)",
    
    // Events
    "event BetMade(uint256 indexed betId, address indexed player, uint256 indexed roundNum, uint8[6] bet)",
    //"event Round(uint256 indexed roundNum, uint8[6] bet)"
];
const lotto6x45ABI = `[
  {
      "type": "constructor",
      "inputs": [
          {
              "name": "usdtSmartContract",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "minimalBet",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "CROUPIER_ROLE",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "bytes32",
              "internalType": "bytes32"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "DEFAULT_ADMIN_ROLE",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "bytes32",
              "internalType": "bytes32"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "ROUND_TIME_SEC",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getAllBets",
      "inputs": [],
      "outputs": [
          {
              "name": "result",
              "type": "tuple[]",
              "internalType": "struct Lottery6x45.Bet[]",
              "components": [
                  {
                      "name": "id",
                      "type": "uint256",
                      "internalType": "uint256"
                  },
                  {
                      "name": "roundNum",
                      "type": "uint256",
                      "internalType": "uint256"
                  },
                  {
                      "name": "bet",
                      "type": "uint8[6]",
                      "internalType": "uint8[6]"
                  },
                  {
                      "name": "win",
                      "type": "uint8",
                      "internalType": "uint8"
                  },
                  {
                      "name": "isRewardTaken",
                      "type": "bool",
                      "internalType": "bool"
                  }
              ]
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getBets",
      "inputs": [
          {
              "name": "roundNum",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "result",
              "type": "tuple[]",
              "internalType": "struct Lottery6x45.Bet[]",
              "components": [
                  {
                      "name": "id",
                      "type": "uint256",
                      "internalType": "uint256"
                  },
                  {
                      "name": "roundNum",
                      "type": "uint256",
                      "internalType": "uint256"
                  },
                  {
                      "name": "bet",
                      "type": "uint8[6]",
                      "internalType": "uint8[6]"
                  },
                  {
                      "name": "win",
                      "type": "uint8",
                      "internalType": "uint8"
                  },
                  {
                      "name": "isRewardTaken",
                      "type": "bool",
                      "internalType": "bool"
                  }
              ]
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getCurrentRound",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getLastRoundResults",
      "inputs": [
          {
              "name": "num",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256[]",
              "internalType": "uint256[]"
          },
          {
              "name": "",
              "type": "uint8[6][]",
              "internalType": "uint8[6][]"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getMinimalBetAmount",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getRoleAdmin",
      "inputs": [
          {
              "name": "role",
              "type": "bytes32",
              "internalType": "bytes32"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "bytes32",
              "internalType": "bytes32"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getRoundResult",
      "inputs": [
          {
              "name": "roundNum",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "",
              "type": "uint8[6]",
              "internalType": "uint8[6]"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "grantRole",
      "inputs": [
          {
              "name": "role",
              "type": "bytes32",
              "internalType": "bytes32"
          },
          {
              "name": "account",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "hasRole",
      "inputs": [
          {
              "name": "role",
              "type": "bytes32",
              "internalType": "bytes32"
          },
          {
              "name": "account",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "makeBet",
      "inputs": [
          {
              "name": "bet",
              "type": "uint8[6]",
              "internalType": "uint8[6]"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "mockTurnRound",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "renounceRole",
      "inputs": [
          {
              "name": "role",
              "type": "bytes32",
              "internalType": "bytes32"
          },
          {
              "name": "account",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "revokeRole",
      "inputs": [
          {
              "name": "role",
              "type": "bytes32",
              "internalType": "bytes32"
          },
          {
              "name": "account",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
          {
              "name": "interfaceId",
              "type": "bytes4",
              "internalType": "bytes4"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "takeReward",
      "inputs": [
          {
              "name": "roundNum",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "betId",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "turnRound",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "event",
      "name": "BetMade",
      "inputs": [
          {
              "name": "betId",
              "type": "uint256",
              "indexed": true,
              "internalType": "uint256"
          },
          {
              "name": "player",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "roundNum",
              "type": "uint256",
              "indexed": true,
              "internalType": "uint256"
          },
          {
              "name": "bet",
              "type": "uint8[6]",
              "indexed": false,
              "internalType": "uint8[6]"
          }
      ],
      "anonymous": false
  },
  {
      "type": "event",
      "name": "RoleAdminChanged",
      "inputs": [
          {
              "name": "role",
              "type": "bytes32",
              "indexed": true,
              "internalType": "bytes32"
          },
          {
              "name": "previousAdminRole",
              "type": "bytes32",
              "indexed": true,
              "internalType": "bytes32"
          },
          {
              "name": "newAdminRole",
              "type": "bytes32",
              "indexed": true,
              "internalType": "bytes32"
          }
      ],
      "anonymous": false
  },
  {
      "type": "event",
      "name": "RoleGranted",
      "inputs": [
          {
              "name": "role",
              "type": "bytes32",
              "indexed": true,
              "internalType": "bytes32"
          },
          {
              "name": "account",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "sender",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          }
      ],
      "anonymous": false
  },
  {
      "type": "event",
      "name": "RoleRevoked",
      "inputs": [
          {
              "name": "role",
              "type": "bytes32",
              "indexed": true,
              "internalType": "bytes32"
          },
          {
              "name": "account",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "sender",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          }
      ],
      "anonymous": false
  },
  {
      "type": "event",
      "name": "Round",
      "inputs": [
          {
              "name": "roundNum",
              "type": "uint256",
              "indexed": true,
              "internalType": "uint256"
          },
          {
              "name": "bet",
              "type": "uint8[6]",
              "indexed": false,
              "internalType": "uint8[6]"
          }
      ],
      "anonymous": false
  }
] `

/*`[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "usdtSmartContract",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "minimalBet",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "AccessControlBadConfirmation",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "neededRole",
          "type": "bytes32"
        }
      ],
      "name": "AccessControlUnauthorizedAccount",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "betId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "player",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "roundNum",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint8[6]",
          "name": "bet",
          "type": "uint8[6]"
        }
      ],
      "name": "BetMade",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "roundNum",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint8[6]",
          "name": "bet",
          "type": "uint8[6]"
        }
      ],
      "name": "Round",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "CROUPIER_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAllBets",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "roundNum",
              "type": "uint256"
            },
            {
              "internalType": "uint8[6]",
              "name": "bet",
              "type": "uint8[6]"
            },
            {
              "internalType": "uint8",
              "name": "win",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "isRewardTaken",
              "type": "bool"
            }
          ],
          "internalType": "struct Lottery6x45.Bet[]",
          "name": "result",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "roundNum",
          "type": "uint256"
        }
      ],
      "name": "getBets",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "roundNum",
              "type": "uint256"
            },
            {
              "internalType": "uint8[6]",
              "name": "bet",
              "type": "uint8[6]"
            },
            {
              "internalType": "uint8",
              "name": "win",
              "type": "uint8"
            },
            {
              "internalType": "bool",
              "name": "isRewardTaken",
              "type": "bool"
            }
          ],
          "internalType": "struct Lottery6x45.Bet[]",
          "name": "result",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMinimalBetAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "roundNum",
          "type": "uint256"
        }
      ],
      "name": "getRoundResult",
      "outputs": [
        {
          "internalType": "uint8[6]",
          "name": "",
          "type": "uint8[6]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8[6]",
          "name": "bet",
          "type": "uint8[6]"
        }
      ],
      "name": "makeBet",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "mockTurnRound",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "callerConfirmation",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "roundNum",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "betId",
          "type": "uint256"
        }
      ],
      "name": "takeReward",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "turnRound",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]`;*/
export default lotto6x45ABI;