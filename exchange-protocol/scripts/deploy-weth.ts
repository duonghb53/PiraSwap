import { ethers, network, run } from "hardhat";
import config from "../config";


const main = async () => {
    // Compile contracts
    await run("compile");
    console.log("Compiled contracts.");

    const networkName = network.name;

    // Sanity checks
    if (networkName === "mainnet") {
      if (!process.env.KEY_MAINNET) {
        throw new Error("Missing private key, refer to README 'Deployment' section");
      }
    } else if (networkName === "testnet") {
      if (!process.env.KEY_TESTNET) {
        throw new Error("Missing private key, refer to README 'Deployment' section");
      }
    }

    console.log("Deploying to network:", networkName);

    // Deploy ERC20 
    console.log("Deploying PiraWETH...");
    
    const PiraWETH = await ethers.getContractFactory("PiraWETH");
    const piraWETH = await PiraWETH.deploy(
      { gasLimit: 5000000 },
    );

    await piraWETH.deployed();

  console.log("PiraWETH deployed to:", piraWETH.address);
};


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
