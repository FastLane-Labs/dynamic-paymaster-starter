import { swapRouterAbi } from "@/lib/fastlane/abi/abi";
import { encodeFunctionData, zeroAddress } from "viem";
import * as constants from "@/lib/fastlane/constants";
import { BaselineCall } from "@/lib/fastlane/rfq/types";
import { swapRouterContract, pairContract } from "@/lib/fastlane/rfq/contracts";

async function generateBaseline(
  recipient: string
): Promise<[BaselineCall, bigint]> {
  const userSellTokenAddress = constants.USER_SELL_TOKEN_ADDRESS;
  const userBuyTokenAddress = constants.USER_BUY_TOKEN_ADDRESS;
  const userSellTokenAmount = constants.USER_SELL_TOKEN_AMOUNT;
  const routerAddress = constants.ROUTER_ADDRESS;

  const [reserve0, reserve1, blockTimestampLast] = await pairContract.read.getReserves() as [bigint, bigint, bigint];
  const token0 = await pairContract.read.token0();

  const reserveIn = token0 === userSellTokenAddress ? reserve0 : reserve1;
  const reserveOut = token0 === userSellTokenAddress ? reserve1 : reserve0;

  const minAmountOut = await swapRouterContract.read.getAmountOut([
    userSellTokenAmount,
    reserveIn,
    reserveOut,
  ]) as bigint;

  const data = encodeFunctionData({
    abi: swapRouterAbi,
    functionName: "swapExactTokensForTokens",
    args: [
      userSellTokenAmount,
      minAmountOut,
      [userSellTokenAddress, userBuyTokenAddress],
      recipient,
      BigInt(blockTimestampLast) + BigInt(1000),
    ],
  });
  
  const baselineCall: BaselineCall = {
    to: routerAddress,
    data,
    value:
      userSellTokenAddress === zeroAddress
        ? BigInt(userSellTokenAmount)
        : BigInt(0),
  };

  return [baselineCall, minAmountOut];
}

export { generateBaseline };