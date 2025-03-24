import { Hex, zeroAddress } from "viem";
import { atlasSdk } from "@/lib/fastlane/rfq/common";
import { setupAtlas } from "@/lib/fastlane/rfq/atlas";
import { userClient, publicClient } from "@/lib/fastlane/user";
import * as constants from "@/lib/fastlane/constants";

// Build baseline call, swap intent, user operation, and send it to the FastLane auctioneer.
// We get in return a full Atlas bundle. No user interaction needed at all during this phase.
const walletClient = userClient;
const bundle = await setupAtlas(walletClient);
const atlasAddress = await atlasSdk.getAtlasAddress();

const metacallCalldata = atlasSdk.getMetacallCalldata(
  bundle.userOperation,
  bundle.solverOperations,
  bundle.dAppOperation,
);

if (bundle.solverOperations.length > 0) {
  console.log("solver bid amount:", bundle.solverOperations[0].getField("bidAmount").value);
}

const hash = await walletClient.sendTransaction({
  to: atlasAddress as Hex,
  value:
    constants.USER_SELL_TOKEN_ADDRESS == zeroAddress
      ? BigInt(constants.USER_SELL_TOKEN_AMOUNT as string)
      : BigInt(0),
  gas: BigInt(500000),
  maxFeePerGas: bundle.userOperation.getField("maxFeePerGas").value as bigint,
  data: metacallCalldata as Hex,
});

await publicClient.waitForTransactionReceipt({ hash });

console.log("Swapped:", hash);