/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MockERC20,
  MockERC20Interface,
} from "../../../contracts/utils/MockERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001cfe38038062001cfe8339818101604052810190620000379190620003bf565b828281600390816200004a91906200069a565b5080600490816200005c91906200069a565b5050506200007133826200007a60201b60201c565b5050506200089c565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620000ec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000e390620007e2565b60405180910390fd5b6200010060008383620001e760201b60201c565b806002600082825462000114919062000833565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001c791906200087f565b60405180910390a3620001e360008383620001ec60201b60201c565b5050565b505050565b505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200025a826200020f565b810181811067ffffffffffffffff821117156200027c576200027b62000220565b5b80604052505050565b600062000291620001f1565b90506200029f82826200024f565b919050565b600067ffffffffffffffff821115620002c257620002c162000220565b5b620002cd826200020f565b9050602081019050919050565b60005b83811015620002fa578082015181840152602081019050620002dd565b60008484015250505050565b60006200031d6200031784620002a4565b62000285565b9050828152602081018484840111156200033c576200033b6200020a565b5b62000349848285620002da565b509392505050565b600082601f83011262000369576200036862000205565b5b81516200037b84826020860162000306565b91505092915050565b6000819050919050565b620003998162000384565b8114620003a557600080fd5b50565b600081519050620003b9816200038e565b92915050565b600080600060608486031215620003db57620003da620001fb565b5b600084015167ffffffffffffffff811115620003fc57620003fb62000200565b5b6200040a8682870162000351565b935050602084015167ffffffffffffffff8111156200042e576200042d62000200565b5b6200043c8682870162000351565b92505060406200044f86828701620003a8565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620004ac57607f821691505b602082108103620004c257620004c162000464565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200052c7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620004ed565b620005388683620004ed565b95508019841693508086168417925050509392505050565b6000819050919050565b60006200057b620005756200056f8462000384565b62000550565b62000384565b9050919050565b6000819050919050565b62000597836200055a565b620005af620005a68262000582565b848454620004fa565b825550505050565b600090565b620005c6620005b7565b620005d38184846200058c565b505050565b5b81811015620005fb57620005ef600082620005bc565b600181019050620005d9565b5050565b601f8211156200064a576200061481620004c8565b6200061f84620004dd565b810160208510156200062f578190505b620006476200063e85620004dd565b830182620005d8565b50505b505050565b600082821c905092915050565b60006200066f600019846008026200064f565b1980831691505092915050565b60006200068a83836200065c565b9150826002028217905092915050565b620006a58262000459565b67ffffffffffffffff811115620006c157620006c062000220565b5b620006cd825462000493565b620006da828285620005ff565b600060209050601f831160018114620007125760008415620006fd578287015190505b6200070985826200067c565b86555062000779565b601f1984166200072286620004c8565b60005b828110156200074c5784890151825560018201915060208501945060208101905062000725565b868310156200076c578489015162000768601f8916826200065c565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620007ca601f8362000781565b9150620007d78262000792565b602082019050919050565b60006020820190508181036000830152620007fd81620007bb565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620008408262000384565b91506200084d8362000384565b925082820190508082111562000868576200086762000804565b5b92915050565b620008798162000384565b82525050565b60006020820190506200089660008301846200086e565b92915050565b61145280620008ac6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a08231146101a357806395d89b41146101d357806397304ced146101f1578063a457c2d71461020d578063a9059cbb1461023d578063dd62ed3e1461026d576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce567146101555780633950935114610173575b600080fd5b6100c161029d565b6040516100ce9190610c96565b60405180910390f35b6100f160048036038101906100ec9190610d51565b61032f565b6040516100fe9190610dac565b60405180910390f35b61010f610352565b60405161011c9190610dd6565b60405180910390f35b61013f600480360381019061013a9190610df1565b61035c565b60405161014c9190610dac565b60405180910390f35b61015d61038b565b60405161016a9190610e60565b60405180910390f35b61018d60048036038101906101889190610d51565b610394565b60405161019a9190610dac565b60405180910390f35b6101bd60048036038101906101b89190610e7b565b6103cb565b6040516101ca9190610dd6565b60405180910390f35b6101db610413565b6040516101e89190610c96565b60405180910390f35b61020b60048036038101906102069190610ea8565b6104a5565b005b61022760048036038101906102229190610d51565b6104b2565b6040516102349190610dac565b60405180910390f35b61025760048036038101906102529190610d51565b610529565b6040516102649190610dac565b60405180910390f35b61028760048036038101906102829190610ed5565b61054c565b6040516102949190610dd6565b60405180910390f35b6060600380546102ac90610f44565b80601f01602080910402602001604051908101604052809291908181526020018280546102d890610f44565b80156103255780601f106102fa57610100808354040283529160200191610325565b820191906000526020600020905b81548152906001019060200180831161030857829003601f168201915b5050505050905090565b60008061033a6105d3565b90506103478185856105db565b600191505092915050565b6000600254905090565b6000806103676105d3565b90506103748582856107a4565b61037f858585610830565b60019150509392505050565b60006012905090565b60008061039f6105d3565b90506103c08185856103b1858961054c565b6103bb9190610fa4565b6105db565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461042290610f44565b80601f016020809104026020016040519081016040528092919081815260200182805461044e90610f44565b801561049b5780601f106104705761010080835404028352916020019161049b565b820191906000526020600020905b81548152906001019060200180831161047e57829003601f168201915b5050505050905090565b6104af3382610aa6565b50565b6000806104bd6105d3565b905060006104cb828661054c565b905083811015610510576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105079061104a565b60405180910390fd5b61051d82868684036105db565b60019250505092915050565b6000806105346105d3565b9050610541818585610830565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361064a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610641906110dc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b09061116e565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107979190610dd6565b60405180910390a3505050565b60006107b0848461054c565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461082a578181101561081c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610813906111da565b60405180910390fd5b61082984848484036105db565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361089f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108969061126c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361090e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610905906112fe565b60405180910390fd5b610919838383610bfc565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561099f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099690611390565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a8d9190610dd6565b60405180910390a3610aa0848484610c01565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610b15576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0c906113fc565b60405180910390fd5b610b2160008383610bfc565b8060026000828254610b339190610fa4565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610be49190610dd6565b60405180910390a3610bf860008383610c01565b5050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c40578082015181840152602081019050610c25565b60008484015250505050565b6000601f19601f8301169050919050565b6000610c6882610c06565b610c728185610c11565b9350610c82818560208601610c22565b610c8b81610c4c565b840191505092915050565b60006020820190508181036000830152610cb08184610c5d565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ce882610cbd565b9050919050565b610cf881610cdd565b8114610d0357600080fd5b50565b600081359050610d1581610cef565b92915050565b6000819050919050565b610d2e81610d1b565b8114610d3957600080fd5b50565b600081359050610d4b81610d25565b92915050565b60008060408385031215610d6857610d67610cb8565b5b6000610d7685828601610d06565b9250506020610d8785828601610d3c565b9150509250929050565b60008115159050919050565b610da681610d91565b82525050565b6000602082019050610dc16000830184610d9d565b92915050565b610dd081610d1b565b82525050565b6000602082019050610deb6000830184610dc7565b92915050565b600080600060608486031215610e0a57610e09610cb8565b5b6000610e1886828701610d06565b9350506020610e2986828701610d06565b9250506040610e3a86828701610d3c565b9150509250925092565b600060ff82169050919050565b610e5a81610e44565b82525050565b6000602082019050610e756000830184610e51565b92915050565b600060208284031215610e9157610e90610cb8565b5b6000610e9f84828501610d06565b91505092915050565b600060208284031215610ebe57610ebd610cb8565b5b6000610ecc84828501610d3c565b91505092915050565b60008060408385031215610eec57610eeb610cb8565b5b6000610efa85828601610d06565b9250506020610f0b85828601610d06565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f5c57607f821691505b602082108103610f6f57610f6e610f15565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610faf82610d1b565b9150610fba83610d1b565b9250828201905080821115610fd257610fd1610f75565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611034602583610c11565b915061103f82610fd8565b604082019050919050565b6000602082019050818103600083015261106381611027565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006110c6602483610c11565b91506110d18261106a565b604082019050919050565b600060208201905081810360008301526110f5816110b9565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611158602283610c11565b9150611163826110fc565b604082019050919050565b600060208201905081810360008301526111878161114b565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006111c4601d83610c11565b91506111cf8261118e565b602082019050919050565b600060208201905081810360008301526111f3816111b7565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611256602583610c11565b9150611261826111fa565b604082019050919050565b6000602082019050818103600083015261128581611249565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006112e8602383610c11565b91506112f38261128c565b604082019050919050565b60006020820190508181036000830152611317816112db565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b600061137a602683610c11565b91506113858261131e565b604082019050919050565b600060208201905081810360008301526113a98161136d565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006113e6601f83610c11565b91506113f1826113b0565b602082019050919050565b60006020820190508181036000830152611415816113d9565b905091905056fea2646970667358221220ddefefeafcfac8c0fb1c5aaf8564ae1f4c52788bc1e52f043f8c21ba375c745864736f6c63430008120033";

type MockERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC20__factory extends ContractFactory {
  constructor(...args: MockERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    supply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockERC20> {
    return super.deploy(
      name,
      symbol,
      supply,
      overrides || {}
    ) as Promise<MockERC20>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    supply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, supply, overrides || {});
  }
  override attach(address: string): MockERC20 {
    return super.attach(address) as MockERC20;
  }
  override connect(signer: Signer): MockERC20__factory {
    return super.connect(signer) as MockERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC20Interface {
    return new utils.Interface(_abi) as MockERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC20 {
    return new Contract(address, _abi, signerOrProvider) as MockERC20;
  }
}
