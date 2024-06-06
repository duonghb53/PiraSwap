import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const etherscanApiKey = getEtherscanApiKey();

const config: HardhatUserConfig = {
  solidity: "0.8.18",

  networks: {
    // for mainnet
    mainnet: {
      url: "https://developer-access-mainnet.base.org",
      chainId: 8453,
      accounts: [process.env.WALLET_KEY as string],
    },
    // for testnet
    goerli: {
      url: "https://goerli.base.org",
      chainId: 84531,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    // for local dev environment
    local: {
      url: "http://localhost:8545",
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY as string,
      mainnet: process.env.ETHERSCAN_API_KEY as string,
    },
    customChains: [
      {
        network: "mainnet",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org/",
        },
      },
      {
        network: "goerli",
        chainId: 84531,
        urls: {
          apiURL: "https://api-goerli.basescan.org/api",
          browserURL: "https://goerli.basescan.org/",
        },
      },
    ],
  },
  defaultNetwork: "local",
};

function getEtherscanApiKey() {
  let apiKey = "";
  if (process.env.ETHERSCAN_API_KEY) {
    apiKey = `${process.env.ETHERSCAN_API_KEY}`;
  }
  return apiKey;
}

export default config;
