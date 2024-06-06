import { ethers, network, run } from "hardhat";

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
    console.log("Deploying FLU...");
    
    const FLU = await ethers.getContractFactory("FLU");
    const fLU = await FLU.deploy(
      { gasLimit: 5000000 }
    );

    await fLU.deployed();

  console.log("FLU deployed to:", fLU.address);
};


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
