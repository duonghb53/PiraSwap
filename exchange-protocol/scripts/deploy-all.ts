import { ethers } from "hardhat";
const fs = require('fs');

const main = async () => {
    const accounts = await ethers.getSigners();

    const WBNB = await ethers.getContractFactory("WBNB");
    const wbnb = await WBNB.deploy()
    await wbnb.deployed()
    const Factory = await ethers.getContractFactory("PiraFactory");
    const factory = await Factory.deploy(accounts[0].address)
    await factory.deployed()

    const Router = await ethers.getContractFactory("PiraRouter");
    const router = await Router.deploy(factory.address, wbnb.address)
    await router.deployed()

    const PancakeZapV1 = await ethers.getContractFactory("PiraZapV1");

    const pancakeZap = await PancakeZapV1.deploy(
        wbnb.address,
        router.address,
        50
    );

    await pancakeZap.deployed();

    console.log("PancakeZap V1 deployed to:", pancakeZap.address);

    let dataLog = {
        wbnb: wbnb.address,
        factory: factory.address,
        router: router.address,
        zap: pancakeZap.address
    }
    let data = JSON.stringify(dataLog);
    fs.writeFileSync('deployed-contracts.json', data);
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
