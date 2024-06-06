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
    console.log("Deploying PiraERC20...");
    
    const PiraERC20 = await ethers.getContractFactory("PiraERC20");
    const piraERC20 = await PiraERC20.deploy(
      { gasLimit: 5000000 }
    );

    await piraERC20.deployed();

  console.log("PiraERC20 deployed to:", piraERC20.address);
};


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
