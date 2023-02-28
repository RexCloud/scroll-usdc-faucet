import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThirdwebProvider } from "@thirdweb-dev/react";

import "./styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "scroll-alpha-testnet";

const goerliChain = {
  "name": "Goerli",
  "title": "Ethereum Testnet Goerli",
  "chain": "ETH",
  "rpc": [
    "https://goerli.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_API_KEY}",
    "https://goerli.infura.io/v3/${INFURA_API_KEY}",
    "wss://goerli.infura.io/v3/${INFURA_API_KEY}",
    "https://rpc.goerli.mudit.blog/"
  ],
  "faucets": [
    "https://faucet.goerli.mudit.blog",
    "https://goerli-faucet.slock.it?address=${ADDRESS}",
    "http://fauceth.komputing.org?chain=5&address=${ADDRESS}"
  ],
  "nativeCurrency": {
    "name": "Goerli Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://goerli.net/#about",
  "shortName": "gor",
  "chainId": 5,
  "networkId": 5,
  "ens": {
    "registry": "0x112234455c3a32fd11230c42e7bccd4a84e02010"
  },
  "explorers": [
    {
      "name": "etherscan-goerli",
      "url": "https://goerli.etherscan.io",
      "standard": "EIP3091"
    }
  ],
  "icon": {
    "url": "ipfs://QmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9/ethereum/512.png",
    "height": 512,
    "width": 512,
    "format": "png",
    "sizes": [
      512,
      256,
      128,
      64,
      32,
      16
    ]
  },
  "testnet": true,
  "slug": "goerli"
}

const scrollChainL2 = {
  "name": "Scroll Alpha Testnet",
  "chain": "ETH",
  "status": "incubating",
  "rpc": [
    "https://scroll-alpha-testnet.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://alpha-rpc.scroll.io/l2"
  ],
  "faucets": [],
  "nativeCurrency": {
    "name": "Ether",
    "symbol": "ETH",
    "decimals": 18
  },
  "infoURL": "https://scroll.io",
  "shortName": "scr-alpha",
  "chainId": 534353,
  "networkId": 534353,
  "explorers": [
    {
      "name": "Scroll Alpha Testnet Block Explorer",
      "url": "https://blockscout.scroll.io",
      "standard": "EIP3091"
    }
  ],
  "parent": {
    "type": "L2",
    "chain": "eip155-5",
    "bridges": []
  },
  "testnet": true,
  "slug": "scroll-alpha-testnet"
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={activeChain} supportedChains={[goerliChain, scrollChainL2]}>
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
// console.log(chains);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
