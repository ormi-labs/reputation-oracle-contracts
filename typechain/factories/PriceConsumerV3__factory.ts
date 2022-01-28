/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PriceConsumerV3,
  PriceConsumerV3Interface,
} from "../PriceConsumerV3";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_priceFeed",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getLatestPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516103af3803806103af8339818101604052810190610032919061008d565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610108565b600081519050610087816100f1565b92915050565b6000602082840312156100a3576100a26100ec565b5b60006100b184828501610078565b91505092915050565b60006100c5826100cc565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600080fd5b6100fa816100ba565b811461010557600080fd5b50565b610298806101176000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638e15f47314610030575b600080fd5b61003861004e565b60405161004591906101d3565b60405180910390f35b60008060008060008060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a06040518083038186803b1580156100bd57600080fd5b505afa1580156100d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100f59190610149565b94509450945094509450839550505050505090565b6000815190506101198161021d565b92915050565b60008151905061012e81610234565b92915050565b6000815190506101438161024b565b92915050565b600080600080600060a0868803121561016557610164610218565b5b600061017388828901610134565b95505060206101848882890161010a565b94505060406101958882890161011f565b93505060606101a68882890161011f565b92505060806101b788828901610134565b9150509295509295909350565b6101cd816101ee565b82525050565b60006020820190506101e860008301846101c4565b92915050565b6000819050919050565b6000819050919050565b600069ffffffffffffffffffff82169050919050565b600080fd5b610226816101ee565b811461023157600080fd5b50565b61023d816101f8565b811461024857600080fd5b50565b61025481610202565b811461025f57600080fd5b5056fea264697066735822122091f779d9ff6f19e95901b074baf974c6eeb1da0a646f7b0abc274fa424817d2164736f6c63430008070033";

type PriceConsumerV3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PriceConsumerV3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PriceConsumerV3__factory extends ContractFactory {
  constructor(...args: PriceConsumerV3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "PriceConsumerV3";
  }

  deploy(
    _priceFeed: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PriceConsumerV3> {
    return super.deploy(
      _priceFeed,
      overrides || {}
    ) as Promise<PriceConsumerV3>;
  }
  getDeployTransaction(
    _priceFeed: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_priceFeed, overrides || {});
  }
  attach(address: string): PriceConsumerV3 {
    return super.attach(address) as PriceConsumerV3;
  }
  connect(signer: Signer): PriceConsumerV3__factory {
    return super.connect(signer) as PriceConsumerV3__factory;
  }
  static readonly contractName: "PriceConsumerV3";
  public readonly contractName: "PriceConsumerV3";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PriceConsumerV3Interface {
    return new utils.Interface(_abi) as PriceConsumerV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceConsumerV3 {
    return new Contract(address, _abi, signerOrProvider) as PriceConsumerV3;
  }
}