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
    console.log("Deploying PiraRouter...");
    
    const PiraRouter = await ethers.getContractFactory("PiraRouter");
    const piraRouter = await PiraRouter.deploy(
        config.Factory[networkName],
        config.WETH[networkName],
        { gasLimit: 24910000 },
    );

    await piraRouter.deployed();

  console.log("PiraRouter deployed to:", piraRouter.address);
};


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
