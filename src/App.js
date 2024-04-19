import React from "react";
import "./App.css";
import MainPage from "./mainPage";
import { useSelector } from "react-redux";
import { selectUserAccount } from "./redux/slices/login/selectors";
import toprightbg from "./assets/toprightbg.png";
import downleftbg from "./assets/downleftbg.png";
import downrightbg from "./assets/downrightbg.png";
import { ConnectKitButton } from "connectkit";
import { Web3Provider } from "./components/web3provider";

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
      <Web3Provider>
        <MainPage key={userAccount} />
      </Web3Provider>
    </div>
  );
}

export default App;
