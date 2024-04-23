import React from "react";
import "./App.css";
import MainPage from "./mainPage";
import { useSelector } from "react-redux";
import { selectUserAccount } from "./redux/slices/login/selectors";
import toprightbg from "./assets/toprightbg.png";
import downleftbg from "./assets/downleftbg.png";
import downrightbg from "./assets/downrightbg.png";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

const projectId = "72005479992c035aa93526747b26b018";
// 2. Set chains
const sepolia = {
  chainId: 11155111,
  name: "Sepolia",
  currency: "SepoliaETH",
  explorerUrl: "https://sepolia.etherscan.io",
  rpcUrl: "https://rpc.sepolia.org",
};

// 3. Create a metadata object
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "...", // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
});

// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [sepolia],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

function App() {
  const userAccount = useSelector(selectUserAccount);
  return (
    <div
      className="min-h-screen w-full min-w-[1080px]"
      style={{
        background: `url(${toprightbg}),url(${downleftbg}),url(${downrightbg})`,
        backgroundColor: "#130D1A",
        backgroundPosition:
          "right -289px top -276px,left -492px bottom -357px,right -439px bottom -449px ",
        backgroundRepeat: "no-repeat, no-repeat,no-repeat",
        backgroundSize: "1047px 1048px,1458px 1458px, 1408px 1410px",
        backgroundAttachment: "fixed,fixed,fixed",
      }}
    >
      <MainPage key={userAccount} />
    </div>
  );
}

export default App;
