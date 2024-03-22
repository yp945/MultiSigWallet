/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface MultiSigWalletWithDailyLimitFactoryInterface
  extends utils.Interface {
  functions: {
    "isInstantiation(address)": FunctionFragment;
    "create(address[],uint256,uint256)": FunctionFragment;
    "instantiations(address,uint256)": FunctionFragment;
    "getInstantiationCount(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "isInstantiation"
      | "create"
      | "instantiations"
      | "getInstantiationCount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "isInstantiation",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "create",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "instantiations",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getInstantiationCount",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "isInstantiation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "instantiations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInstantiationCount",
    data: BytesLike
  ): Result;

  events: {
    "ContractInstantiation(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ContractInstantiation"): EventFragment;
}

export interface ContractInstantiationEventObject {
  sender: string;
  instantiation: string;
}
export type ContractInstantiationEvent = TypedEvent<
  [string, string],
  ContractInstantiationEventObject
>;

export type ContractInstantiationEventFilter =
  TypedEventFilter<ContractInstantiationEvent>;

export interface MultiSigWalletWithDailyLimitFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MultiSigWalletWithDailyLimitFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    isInstantiation(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    create(
      _owners: PromiseOrValue<string>[],
      _required: PromiseOrValue<BigNumberish>,
      _dailyLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    instantiations(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getInstantiationCount(
      creator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  isInstantiation(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  create(
    _owners: PromiseOrValue<string>[],
    _required: PromiseOrValue<BigNumberish>,
    _dailyLimit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  instantiations(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getInstantiationCount(
    creator: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    isInstantiation(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    create(
      _owners: PromiseOrValue<string>[],
      _required: PromiseOrValue<BigNumberish>,
      _dailyLimit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    instantiations(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getInstantiationCount(
      creator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "ContractInstantiation(address,address)"(
      sender?: null,
      instantiation?: null
    ): ContractInstantiationEventFilter;
    ContractInstantiation(
      sender?: null,
      instantiation?: null
    ): ContractInstantiationEventFilter;
  };

  estimateGas: {
    isInstantiation(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    create(
      _owners: PromiseOrValue<string>[],
      _required: PromiseOrValue<BigNumberish>,
      _dailyLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    instantiations(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getInstantiationCount(
      creator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isInstantiation(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    create(
      _owners: PromiseOrValue<string>[],
      _required: PromiseOrValue<BigNumberish>,
      _dailyLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    instantiations(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getInstantiationCount(
      creator: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
