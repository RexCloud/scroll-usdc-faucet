import "./styles/Home.css";
import { Web3Button } from "@thirdweb-dev/react";


export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Scroll Sepolia Test USDC Faucet
        </h1>

        <p className="description">
          Claim your test USDC tokens
        </p>

        <p>
          Switch to Scroll Sepolia Testnet before claiming
        </p>
        <Web3Button
          contractAddress="0xA9e6eF1F9533f43badA125CbcDFA5eeA35BE4475"
          contractAbi={[{"type":"constructor","stateMutability":"nonpayable","inputs":[]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"claim","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"uint256","name":"","internalType":"uint256"}],"name":"claimAmount","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"owner","inputs":[]},{"type":"function","stateMutability":"view","outputs":[{"type":"bool","name":"","internalType":"bool"}],"name":"received","inputs":[{"type":"address","name":"","internalType":"address"}]},{"type":"function","stateMutability":"nonpayable","outputs":[],"name":"setClaimAmount","inputs":[{"type":"uint256","name":"amount","internalType":"uint256"}]},{"type":"function","stateMutability":"view","outputs":[{"type":"address","name":"","internalType":"address"}],"name":"usdc","inputs":[]}]}
          action={(contract) => contract.call("claim")}
          onError={() => alert("Error: Already received faucet / Insufficient funds")}
        >
          Claim
        </Web3Button>

        <p>Trade on Uniswap:</p>
        <a href="https://uniswap-v3.scroll.io/#/swap?outputCurrency=0x690000EF01deCE82d837B5fAa2719AE47b156697">USDC/WETH</a>
        
      </main>
    </div>
  );
}
