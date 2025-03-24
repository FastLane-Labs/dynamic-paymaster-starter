import { Client, Hex } from "viem";
import * as constants from "@/lib/fastlane/constants";
type GasPricesEncoded = {
  maxFeePerGas: Hex;
  maxPriorityFeePerGas: Hex;
};

type GasPriceResultEncoded = {
  fast: GasPricesEncoded;
  standard: GasPricesEncoded;
  slow: GasPricesEncoded;
};

type GasPrices = {
  maxFeePerGas: bigint;
  maxPriorityFeePerGas: bigint;
};

type GasPriceResult = {
  fast: GasPrices;
  standard: GasPrices;
  slow: GasPrices;
};

type GasPriceRequest = {
  Method: "gas_getUserOperationGasPrice";
  Parameters: [];
  ReturnType: GasPriceResultEncoded;
};

interface PolicyBond {
  bonded: bigint;
  unbonding: bigint;
  lastAccessedBlock: bigint;
}

type SwapIntent = {
  tokenUserBuys: string;
  minAmountUserBuys: bigint;
  tokenUserSells: string;
  amountUserSells: bigint;
};

function generateSwapIntent(minAmountUserBuys: bigint): SwapIntent {
  const swapIntent: SwapIntent = {
    tokenUserBuys: constants.USER_BUY_TOKEN_ADDRESS as string,
    minAmountUserBuys: minAmountUserBuys,
    tokenUserSells: constants.USER_SELL_TOKEN_ADDRESS as string,
    amountUserSells: BigInt(constants.USER_SELL_TOKEN_AMOUNT as string),
  };

  return swapIntent;
}

type BaselineCall = {
  to: string;
  data: string;
  value: bigint;
};

type Call = {
  to: Hex;
  data: Hex;
  value: bigint;
};

type PaymasterMode = "user" | "sponsor";
type PaymasterData = {
  mode: PaymasterMode;
  validUntil?: bigint;
  validAfter?: bigint;
  sponsorSignature?: Hex;
  userClient?: Client;
};

export type {
  GasPriceRequest,
  GasPriceResult,
  GasPriceResultEncoded,
  PolicyBond,
  SwapIntent,
  BaselineCall,
  Call,
  PaymasterMode,
  PaymasterData,
};

export { generateSwapIntent };
