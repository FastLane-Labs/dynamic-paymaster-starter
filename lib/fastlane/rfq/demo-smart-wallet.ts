import { atlasSdk } from "@/lib/fastlane/rfq/common";
import { publicClient, smartAccount, smartAccountClient } from "@/lib/fastlane/user";
import { encodeFunctionData, Hex, zeroAddress } from "viem";
import { setupAtlas } from "@/lib/fastlane/rfq/atlas";
import { demoErc20UserIsSelling, shMonadContract, weth, paymasterContract } from "@/lib/fastlane/rfq/contracts";
import { demoErc20Abi, wethAbi } from "@/lib/fastlane/abi/abi";
import { Call } from "@/lib/fastlane/rfq/types";
import * as constants from "@/lib/fastlane/constants";


async function rfqSwap() {
  const smartAccountBalance = await publicClient.getBalance({
    address: smartAccount.address,
  });
  console.log("smart account address", smartAccount.address);
  console.log("Smart Account MON Balance:", smartAccountBalance);

  const policyId = (await paymasterContract.read.POLICY_ID([])) as bigint;

  const smartAccountBondedAmount = (await shMonadContract.read.balanceOfBonded([
    policyId,
    smartAccount.address,
  ])) as bigint;
  console.log("Smart Account shmonad bonded", smartAccountBondedAmount);

  const wethBalance = await weth.read.balanceOf([smartAccount.address]);
  console.log("WETH Balance:", wethBalance); 

  const bundle = await setupAtlas(smartAccountClient);
  const atlasAddress = (await atlasSdk.getAtlasAddress()) as Hex;

  const wrapData = encodeFunctionData({
    abi: wethAbi,
    functionName: "deposit",
    args: [],
  });
  const wrapCall: Call = {to: constants.WETH_ADDRESS, data: wrapData, value: BigInt(constants.USER_SELL_TOKEN_AMOUNT)};

  const approveData = encodeFunctionData({
    abi: demoErc20Abi,
    functionName: "approve",
    args: [atlasAddress, constants.USER_SELL_TOKEN_AMOUNT],
  });
  const approveCall: Call = {to: constants.USER_SELL_TOKEN_ADDRESS, data: approveData, value: BigInt(0)};

  const allowance = await demoErc20UserIsSelling.read.allowance([
    smartAccount.address,
    atlasAddress,
  ]) as bigint;

  if (allowance >= BigInt(constants.USER_SELL_TOKEN_AMOUNT)) {
    console.log("User already has enough allowance, skipping approval, ", allowance);
  }

  const atlasData = atlasSdk.getMetacallCalldata(
    bundle.userOperation,
    bundle.solverOperations,
    bundle.dAppOperation,
  ) as Hex;

  const atlasCall: Call = {
    to: atlasAddress,
    value:
    constants.USER_SELL_TOKEN_ADDRESS == zeroAddress
        ? BigInt(constants.USER_SELL_TOKEN_AMOUNT)
        : BigInt(0),
    data: atlasData,
  };

  if (bundle.solverOperations.length > 0) {
    console.log("solver bid amount:", bundle.solverOperations[0].getField("bidAmount").value);
  }

  const calls = [wrapCall, approveCall, atlasCall];

  // const hash = await smartAccountClient.sendUserOperation({
  //     account: smartAccount,
  //     calls: calls,
  // });

  // console.log("User Operation Hash:", hash);

  // const userOpReceipt = await smartAccountClient.waitForUserOperationReceipt({ hash });
  // console.log("User Operation Receipt:", userOpReceipt);
}

export { rfqSwap };
