/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPiraMigrator,
  IPiraMigratorInterface,
} from "../../../contracts/interfaces/IPiraMigrator";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountTokenMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountETHMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IPiraMigrator__factory {
  static readonly abi = _abi;
  static createInterface(): IPiraMigratorInterface {
    return new utils.Interface(_abi) as IPiraMigratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPiraMigrator {
    return new Contract(address, _abi, signerOrProvider) as IPiraMigrator;
  }
}
