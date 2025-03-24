import { Bundle } from "@fastlane-labs/atlas-sdk";
import { provider, atlasSdk } from "@/lib/fastlane/rfq/common";
import { generateBaseline } from "@/lib/fastlane/rfq/baseline";
import { generateSwapIntent } from "@/lib/fastlane/rfq/types";
import { approveErc20IfNeeded } from "@/lib/fastlane/rfq/helpers";
import { Client, encodeFunctionData, Hex, zeroAddress } from "viem";
import * as constants from "@/lib/fastlane/constants";
import { rfqControlAbi } from "@/lib/fastlane/abi/abi";

export async function setupAtlas(walletClient: Client): Promise<Bundle> {
  console.log("===== SETTING UP DEMO =====");

  const userAddress = walletClient.account?.address as Hex;

  // smart wallet doesn't need to approve
  if (walletClient.type == "walletClient") {
    await approveErc20IfNeeded(walletClient);
  }

  const executionEnvironment = await atlasSdk.getExecutionEnvironment(
    userAddress,
    constants.RFQ_CONTROL_ADDRESS
  );

  const [baselineCall, minAmountOut] = await generateBaseline(
    executionEnvironment
  );

  console.log("baseline swap amount:", minAmountOut);

  const swapIntent = generateSwapIntent(minAmountOut);

  const swapData = encodeFunctionData({
    abi: rfqControlAbi,
    functionName: "swap",
    args: [swapIntent, baselineCall],
  });

  const currentBlockNumber = await provider.getBlockNumber();
  const suggestedFeeData = await provider.getFeeData();

  console.log("Current block number:", currentBlockNumber);

  let atlasUserOperation = await atlasSdk.newUserOperation({
    from: userAddress,
    value:
      constants.USER_SELL_TOKEN_ADDRESS == zeroAddress
        ? BigInt(constants.USER_SELL_TOKEN_AMOUNT)
        : BigInt(0),
    gas: BigInt(1_000_000), // Hardcoded for demo
    maxFeePerGas: (suggestedFeeData.maxFeePerGas as bigint) * BigInt(2),
    deadline: BigInt(currentBlockNumber + 1000), // need big deadline because fast block times
    dapp: constants.RFQ_CONTROL_ADDRESS,
    control: constants.RFQ_CONTROL_ADDRESS,
    sessionKey: constants.AUCTIONEER_ADDRESS,
    data: swapData,
  });

  const bundle = (await atlasSdk.submitUserOperation(atlasUserOperation, [], {
    auctionDurationInMillis: 1500, // Longer duration for the demo
    disableBundling: true, // Disable Atlas bundler, we bundle ourselves
    // disableSimulations: true,
  })) as Bundle;

  console.log("Atlas bundle received");

  console.log("===== SETUP COMPLETE =====");

  return bundle;
}
