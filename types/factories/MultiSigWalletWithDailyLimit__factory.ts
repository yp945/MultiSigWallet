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
import type { PromiseOrValue } from "../common";
import type {
  MultiSigWalletWithDailyLimit,
  MultiSigWalletWithDailyLimitInterface,
} from "../MultiSigWalletWithDailyLimit";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "owners",
    outputs: [
      {
        name: "",
        type: "address",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
    ],
    name: "removeOwner",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "revokeConfirmation",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "isOwner",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
      {
        name: "",
        type: "address",
      },
    ],
    name: "confirmations",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "calcMaxWithdraw",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "pending",
        type: "bool",
      },
      {
        name: "executed",
        type: "bool",
      },
    ],
    name: "getTransactionCount",
    outputs: [
      {
        name: "count",
        type: "uint256",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "dailyLimit",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "lastDay",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
    ],
    name: "addOwner",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "isConfirmed",
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "getConfirmationCount",
    outputs: [
      {
        name: "count",
        type: "uint256",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    name: "transactions",
    outputs: [
      {
        name: "destination",
        type: "address",
      },
      {
        name: "value",
        type: "uint256",
      },
      {
        name: "data",
        type: "bytes",
      },
      {
        name: "executed",
        type: "bool",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getOwners",
    outputs: [
      {
        name: "",
        type: "address[]",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "from",
        type: "uint256",
      },
      {
        name: "to",
        type: "uint256",
      },
      {
        name: "pending",
        type: "bool",
      },
      {
        name: "executed",
        type: "bool",
      },
    ],
    name: "getTransactionIds",
    outputs: [
      {
        name: "_transactionIds",
        type: "uint256[]",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "getConfirmations",
    outputs: [
      {
        name: "_confirmations",
        type: "address[]",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "transactionCount",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_required",
        type: "uint256",
      },
    ],
    name: "changeRequirement",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "confirmTransaction",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "destination",
        type: "address",
      },
      {
        name: "value",
        type: "uint256",
      },
      {
        name: "data",
        type: "bytes",
      },
    ],
    name: "submitTransaction",
    outputs: [
      {
        name: "transactionId",
        type: "uint256",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "_dailyLimit",
        type: "uint256",
      },
    ],
    name: "changeDailyLimit",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "MAX_OWNER_COUNT",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "required",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "newOwner",
        type: "address",
      },
    ],
    name: "replaceOwner",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "executeTransaction",
    outputs: [],
    payable: false,
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "spentToday",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    type: "function",
  },
  {
    inputs: [
      {
        name: "_owners",
        type: "address[]",
      },
      {
        name: "_required",
        type: "uint256",
      },
      {
        name: "_dailyLimit",
        type: "uint256",
      },
    ],
    payable: false,
    type: "constructor",
  },
  {
    payable: true,
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "dailyLimit",
        type: "uint256",
      },
    ],
    name: "DailyLimitChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "Confirmation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "Revocation",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "Submission",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "Execution",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "transactionId",
        type: "uint256",
      },
    ],
    name: "ExecutionFailure",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        name: "value",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnerAddition",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnerRemoval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "required",
        type: "uint256",
      },
    ],
    name: "RequirementChange",
    type: "event",
  },
] as const;

const _bytecode =
  "0x606060405234156200001057600080fd5b604051620026a9380380620026a9833981016040528080518201919060200180519060200190919080519060200190919050505b82825b6000825182603282111580156200005e5750818111155b80156200006c575060008114155b80156200007a575060008214155b15156200008657600080fd5b600092505b8451831015620001c257600260008685815181101515620000a857fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16158015620001375750600085848151811015156200011457fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1614155b15156200014357600080fd5b60016002600087868151811015156200015857fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b82806001019350506200008b565b8460039080519060200190620001da929190620001fa565b50836004819055505b5b5050505050806006819055505b505050620002cf565b82805482825590600052602060002090810192821562000276579160200282015b82811115620002755782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906200021b565b5b50905062000285919062000289565b5090565b620002cc91905b80821115620002c857600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555060010162000290565b5090565b90565b6123ca80620002df6000396000f30060606040523615610152576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063025e7c27146101ae578063173825d91461021157806320ea8d861461024a5780632f54bf6e1461026d5780633411c81c146102be5780634bc9fdc214610318578063547415251461034157806367eeba0c146103855780636b0c932d146103ae5780637065cb48146103d7578063784547a7146104105780638b51d13f1461044b5780639ace38c214610482578063a0e67e2b14610580578063a8abe69a146105eb578063b5dc40c314610683578063b77bf600146106fc578063ba51a6df14610725578063c01a8c8414610748578063c64274741461076b578063cea0862114610804578063d74f8edd14610827578063dc8452cd14610850578063e20056e614610879578063ee22610b146108d1578063f059cf2b146108f4575b5b60003411156101ab573373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c346040518082815260200191505060405180910390a25b5b005b34156101b957600080fd5b6101cf600480803590602001909190505061091d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561021c57600080fd5b610248600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061095d565b005b341561025557600080fd5b61026b6004808035906020019091905050610c00565b005b341561027857600080fd5b6102a4600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610dac565b604051808215151515815260200191505060405180910390f35b34156102c957600080fd5b6102fe600480803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610dcc565b604051808215151515815260200191505060405180910390f35b341561032357600080fd5b61032b610dfb565b6040518082815260200191505060405180910390f35b341561034c57600080fd5b61036f600480803515159060200190919080351515906020019091905050610e38565b6040518082815260200191505060405180910390f35b341561039057600080fd5b610398610ecc565b6040518082815260200191505060405180910390f35b34156103b957600080fd5b6103c1610ed2565b6040518082815260200191505060405180910390f35b34156103e257600080fd5b61040e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ed8565b005b341561041b57600080fd5b61043160048080359060200190919050506110e0565b604051808215151515815260200191505060405180910390f35b341561045657600080fd5b61046c60048080359060200190919050506111c8565b6040518082815260200191505060405180910390f35b341561048d57600080fd5b6104a36004808035906020019091905050611297565b604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001848152602001806020018315151515815260200182810382528481815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561056e5780601f106105435761010080835404028352916020019161056e565b820191906000526020600020905b81548152906001019060200180831161055157829003601f168201915b50509550505050505060405180910390f35b341561058b57600080fd5b6105936112f3565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156105d75780820151818401525b6020810190506105bb565b505050509050019250505060405180910390f35b34156105f657600080fd5b61062b600480803590602001909190803590602001909190803515159060200190919080351515906020019091905050611388565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561066f5780820151818401525b602081019050610653565b505050509050019250505060405180910390f35b341561068e57600080fd5b6106a460048080359060200190919050506114e9565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156106e85780820151818401525b6020810190506106cc565b505050509050019250505060405180910390f35b341561070757600080fd5b61070f61171a565b6040518082815260200191505060405180910390f35b341561073057600080fd5b6107466004808035906020019091905050611720565b005b341561075357600080fd5b61076960048080359060200190919050506117dd565b005b341561077657600080fd5b6107ee600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506119be565b6040518082815260200191505060405180910390f35b341561080f57600080fd5b61082560048080359060200190919050506119de565b005b341561083257600080fd5b61083a611a5b565b6040518082815260200191505060405180910390f35b341561085b57600080fd5b610863611a60565b6040518082815260200191505060405180910390f35b341561088457600080fd5b6108cf600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611a66565b005b34156108dc57600080fd5b6108f26004808035906020019091905050611d84565b005b34156108ff57600080fd5b6109076120a5565b6040518082815260200191505060405180910390f35b60038181548110151561092c57fe5b906000526020600020900160005b915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60003073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561099957600080fd5b81600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615156109f257600080fd5b6000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600091505b600160038054905003821015610b7e578273ffffffffffffffffffffffffffffffffffffffff16600383815481101515610a8557fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610b70576003600160038054905003815481101515610ae557fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600383815481101515610b2157fe5b906000526020600020900160005b6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b7e565b5b8180600101925050610a4f565b6001600381818054905003915081610b969190612279565b506003805490506004541115610bb557610bb4600380549050611720565b5b8273ffffffffffffffffffffffffffffffffffffffff167f8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b9060405160405180910390a25b5b505b5050565b33600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515610c5957600080fd5b81336001600083815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515610cc457600080fd5b8360008082815260200190815260200160002060030160009054906101000a900460ff16151515610cf457600080fd5b60006001600087815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550843373ffffffffffffffffffffffffffffffffffffffff167ff6a317157440607f36269043eb55f1287a5a19ba2216afeab88cd46cbcfb88e960405160405180910390a35b5b505b50505b5050565b60026020528060005260406000206000915054906101000a900460ff1681565b60016020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b60006201518060075401421115610e16576006549050610e35565b6008546006541015610e2b5760009050610e35565b6008546006540390505b90565b600080600090505b600554811015610ec457838015610e77575060008082815260200190815260200160002060030160009054906101000a900460ff16155b80610eaa5750828015610ea9575060008082815260200190815260200160002060030160009054906101000a900460ff165b5b15610eb6576001820191505b5b8080600101915050610e40565b5b5092915050565b60065481565b60075481565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610f1257600080fd5b80600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151515610f6c57600080fd5b8160008173ffffffffffffffffffffffffffffffffffffffff1614151515610f9357600080fd5b60016003805490500160045460328211158015610fb05750818111155b8015610fbd575060008114155b8015610fca575060008214155b1515610fd557600080fd5b6001600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506003805480600101828161104191906122a5565b916000526020600020900160005b87909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550508473ffffffffffffffffffffffffffffffffffffffff167ff39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d60405160405180910390a25b5b50505b505b505b50565b6000806000809150600090505b6003805490508110156111c05760016000858152602001908152602001600020600060038381548110151561111e57fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561119f576001820191505b6004548214156111b257600192506111c1565b5b80806001019150506110ed565b5b5050919050565b600080600090505b6003805490508110156112905760016000848152602001908152602001600020600060038381548110151561120157fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615611282576001820191505b5b80806001019150506111d0565b5b50919050565b60006020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101549080600201908060030160009054906101000a900460ff16905084565b6112fb6122d1565b600380548060200260200160405190810160405280929190818152602001828054801561137d57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611333575b505050505090505b90565b6113906122e5565b6113986122e5565b6000806005546040518059106113ab5750595b908082528060200260200182016040525b50925060009150600090505b600554811015611469578580156113ff575060008082815260200190815260200160002060030160009054906101000a900460ff16155b806114325750848015611431575060008082815260200190815260200160002060030160009054906101000a900460ff165b5b1561145b5780838381518110151561144657fe5b90602001906020020181815250506001820191505b5b80806001019150506113c8565b8787036040518059106114795750595b908082528060200260200182016040525b5093508790505b868110156114dd5782818151811015156114a757fe5b90602001906020020151848983038151811015156114c157fe5b90602001906020020181815250505b8080600101915050611491565b5b505050949350505050565b6114f16122d1565b6114f96122d1565b60008060038054905060405180591061150f5750595b908082528060200260200182016040525b50925060009150600090505b6003805490508110156116725760016000868152602001908152602001600020600060038381548110151561155d57fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615611664576003818154811015156115e657fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838381518110151561162157fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506001820191505b5b808060010191505061152c565b816040518059106116805750595b908082528060200260200182016040525b509350600090505b818110156117115782818151811015156116af57fe5b9060200190602002015184828151811015156116c757fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250505b8080600101915050611699565b5b505050919050565b60055481565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561175a57600080fd5b60038054905081603282111580156117725750818111155b801561177f575060008114155b801561178c575060008214155b151561179757600080fd5b826004819055507fa3f1ee9126a074d9326c682f561767f710e927faa811f7a99829d49dc421797a836040518082815260200191505060405180910390a15b5b50505b50565b33600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151561183657600080fd5b81600080600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415151561189257600080fd5b82336001600083815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515156118fe57600080fd5b600180600087815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550843373ffffffffffffffffffffffffffffffffffffffff167f4a504a94899432a9846e1aa406dceb1bcfd538bb839071d49d1e5e23f5be30ef60405160405180910390a36119b385611d84565b5b5b50505b505b5050565b60006119cb8484846120ab565b90506119d6816117dd565b5b9392505050565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611a1857600080fd5b806006819055507fc71bdc6afaf9b1aa90a7078191d4fc1adf3bf680fca3183697df6b0dc226bca2816040518082815260200191505060405180910390a15b5b50565b603281565b60045481565b60003073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611aa257600080fd5b82600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515611afb57600080fd5b82600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151515611b5557600080fd5b600092505b600380549050831015611c43578473ffffffffffffffffffffffffffffffffffffffff16600384815481101515611b8d57fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611c355783600384815481101515611be657fe5b906000526020600020900160005b6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611c43565b5b8280600101935050611b5a565b6000600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508473ffffffffffffffffffffffffffffffffffffffff167f8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b9060405160405180910390a28373ffffffffffffffffffffffffffffffffffffffff167ff39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d60405160405180910390a25b5b505b505b505050565b60008033600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515611de057600080fd5b83336001600083815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515611e4b57600080fd5b8560008082815260200190815260200160002060030160009054906101000a900460ff16151515611e7b57600080fd5b6000808881526020019081526020016000209550611e98876110e0565b94508480611ed35750600086600201805460018160011615610100020316600290049050148015611ed25750611ed186600101546121ff565b5b5b156120985760018660030160006101000a81548160ff021916908315150217905550841515611f115785600101546008600082825401925050819055505b611ff98660000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16876001015488600201805460018160011615610100020316600290049050896002018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611fef5780601f10611fc457610100808354040283529160200191611fef565b820191906000526020600020905b815481529060010190602001808311611fd257829003601f168201915b5050505050612251565b1561203057867f33e13ecb54c3076d8e8bb8c2881800a4d972b792045ffae98fdf46df365fed7560405160405180910390a2612097565b867f526441bb6c1aba3c9a4a6ca1d6545da9c2333c8c48343ef398eb858d72b7923660405160405180910390a260008660030160006101000a81548160ff0219169083151502179055508415156120965785600101546008600082825403925050819055505b5b5b5b5b505b50505b50505050565b60085481565b60008360008173ffffffffffffffffffffffffffffffffffffffff16141515156120d457600080fd5b60055491506080604051908101604052808673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020016000151581525060008084815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001015560408201518160020190805190602001906121939291906122f9565b5060608201518160030160006101000a81548160ff0219169083151502179055509050506001600560008282540192505081905550817fc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e5160405160405180910390a25b5b509392505050565b60006201518060075401421115612220574260078190555060006008819055505b6006548260085401118061223957506008548260085401105b15612247576000905061224c565b600190505b919050565b6000806040516020840160008287838a8c6187965a03f1925050508091505b50949350505050565b8154818355818115116122a05781836000526020600020918201910161229f9190612379565b5b505050565b8154818355818115116122cc578183600052602060002091820191016122cb9190612379565b5b505050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061233a57805160ff1916838001178555612368565b82800160010185558215612368579182015b8281111561236757825182559160200191906001019061234c565b5b5090506123759190612379565b5090565b61239b91905b8082111561239757600081600090555060010161237f565b5090565b905600a165627a7a7230582024e530753ad9fd2f15a33a1eb54f5472050ba7d45d424e637328cfaba89a93820029";

type MultiSigWalletWithDailyLimitConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultiSigWalletWithDailyLimitConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultiSigWalletWithDailyLimit__factory extends ContractFactory {
  constructor(...args: MultiSigWalletWithDailyLimitConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owners: PromiseOrValue<string>[],
    _required: PromiseOrValue<BigNumberish>,
    _dailyLimit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MultiSigWalletWithDailyLimit> {
    return super.deploy(
      _owners,
      _required,
      _dailyLimit,
      overrides || {}
    ) as Promise<MultiSigWalletWithDailyLimit>;
  }
  override getDeployTransaction(
    _owners: PromiseOrValue<string>[],
    _required: PromiseOrValue<BigNumberish>,
    _dailyLimit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owners,
      _required,
      _dailyLimit,
      overrides || {}
    );
  }
  override attach(address: string): MultiSigWalletWithDailyLimit {
    return super.attach(address) as MultiSigWalletWithDailyLimit;
  }
  override connect(signer: Signer): MultiSigWalletWithDailyLimit__factory {
    return super.connect(signer) as MultiSigWalletWithDailyLimit__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultiSigWalletWithDailyLimitInterface {
    return new utils.Interface(_abi) as MultiSigWalletWithDailyLimitInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultiSigWalletWithDailyLimit {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MultiSigWalletWithDailyLimit;
  }
}
