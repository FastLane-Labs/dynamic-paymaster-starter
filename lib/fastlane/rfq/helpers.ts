import { Hex, encodeFunctionData, Client, zeroAddress } from "viem";
import { atlasSdk } from "@/lib/fastlane/rfq/common";
import { publicClient } from "@/lib/fastlane/user";
import { demoErc20UserIsSelling } from "@/lib/fastlane/rfq/contracts";
import * as constants from "@/lib/fastlane/constants";

export async function approveErc20IfNeeded(client: Client) {
  if (constants.USER_SELL_TOKEN_ADDRESS === zeroAddress) {
    console.log("User selling ETH, skipping approval");
    return;
  }

  const atlasAddress = (await atlasSdk.getAtlasAddress()) as Hex;

  const allowance = await demoErc20UserIsSelling.read.allowance([
    client.account?.address,
    atlasAddress,
  ]) as bigint;

  if (allowance >= BigInt(constants.USER_SELL_TOKEN_AMOUNT)) {
    console.log("User already has enough allowance, skipping approval, ", allowance);
    return;
  }

  console.log("Approving tokens");

  const data = encodeFunctionData({
    abi: demoErc20UserIsSelling.abi,
    functionName: "approve",
    args: [atlasAddress, constants.USER_SELL_TOKEN_AMOUNT],
  });

  const hash = await client.sendTransaction({
    to: constants.USER_SELL_TOKEN_ADDRESS as Hex,
    data,
  });

  await publicClient.waitForTransactionReceipt({ hash });

  console.log("Aprroved:", hash);
}