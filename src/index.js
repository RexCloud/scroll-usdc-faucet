import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThirdwebProvider } from "@thirdweb-dev/react";

import "./styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "scroll-sepolia-testnet";

const sepoliaChain = {
  "name": "Sepolia",
  "title": "Ethereum Testnet Sepolia",
  "chain": "ETH",
  "rpc": [
    "https://sepolia.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://sepolia.infura.io/v3/${INFURA_API_KEY}",
    "wss://sepolia.infura.io/v3/${INFURA_API_KEY}",
    "https://rpc.sepolia.org",
    "https://rpc2.sepolia.org",
    "https://rpc-sepolia.rockx.com",
    "https://rpc.sepolia.ethpandaops.io"
  ],
  "faucets": [
    "http://fauceth.komputing.org?chain=11155111&address=${ADDRESS}"
  ],
  "nativeCurrency": {
    "name": "Sepolia Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://sepolia.otterscan.io",
  "shortName": "sep",
  "chainId": 11155111,
  "networkId": 11155111,
  "explorers": [
    {
      "name": "etherscan-sepolia",
      "url": "https://sepolia.etherscan.io",
      "standard": "EIP3091"
    },
    {
      "name": "otterscan-sepolia",
      "url": "https://sepolia.otterscan.io",
      "standard": "EIP3091"
    }
  ],
  "testnet": true,
  "slug": "sepolia"
};

const scrollChainL2 = {
  "name": "Scroll Sepolia Testnet",
  "chain": "ETH",
  "status": "active",
  "rpc": [
    "https://scroll-sepolia-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://sepolia-rpc.scroll.io/"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://scroll.io",
  "shortName": "scr-sepolia",
  "chainId": 534351,
  "networkId": 534351,
  "explorers": [
    {
      "name": "Scroll Sepolia Testnet Block Explorer",
      "url": "https://sepolia-blockscout.scroll.io",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-11155111",
    "bridges": [
      {
        "url": "https://scroll.io/bridge"
      }
    ]
  },
  "testnet": true,
  "slug": "scroll-sepolia-testnet"
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={activeChain} supportedChains={[sepoliaChain, scrollChainL2]}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
// console.log(chains);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
