import { ethers } from "ethers";
import { AtlasSdk, FastlaneBackend } from "@fastlane-labs/atlas-sdk";
import * as constants from "@/lib/fastlane/constants";

export const provider = new ethers.JsonRpcProvider(
  constants.RPC_URL,
  constants.CHAIN.id
);

export const atlasSdk = await AtlasSdk.create(
  provider,
  constants.CHAIN.id,
  new FastlaneBackend({
    endpoint: constants.AUCTIONEER_ENDPOINT as string,
  })
);
