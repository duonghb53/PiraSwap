# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```


```shell
npx hardhat verify --contract contracts/PiraToken.sol:PiraToken --network goerli 0x191084fB1C4a8595713Fe7aE2b3620D0Dfa1Ea8C "Pira Token" "PIRA"
npx hardhat verify --contract contracts/PiraNFT.sol:PiraNFT --network goerli 0xE7f686bE4F39C101d1e425fd416F40d1f9A8c026
```