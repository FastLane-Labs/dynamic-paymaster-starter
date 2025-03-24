import { createPublicClient, createWalletClient, Hex, http } from "viem";
import {
  CHAIN,
  RPC_URL,
  PAYMASTER_URL,
  PRIVATE_KEY,
  SHBUNDLER_URL,
  SPONSOR_WALLET_PRIVATE_KEY, 
} from "./constants";
import { toSafeSmartAccount } from "permissionless/accounts";
import { createBundlerClient, entryPoint07Address } from "viem/account-abstraction";
import { createPaymasterClient } from "viem/account-abstraction";
import { privateKeyToAccount } from "viem/accounts";
import { createSmartAccountClient } from "permissionless/clients";


// EOA
const EOA = privateKeyToAccount(PRIVATE_KEY);

// user client
const userClient = createWalletClient({
  chain: CHAIN,
  transport: http(RPC_URL),
  account: EOA,
});

// public client
const publicClient = createPublicClient({
  transport: http(RPC_URL),
  chain: CHAIN,
});

// paymaster client
const paymasterClient = createPaymasterClient({
  transport: http(PAYMASTER_URL),
});

// sponsor account
const sponsorEOA = privateKeyToAccount(SPONSOR_WALLET_PRIVATE_KEY as Hex)

// sponsor wallet
const sponsorClient = createWalletClient({
  account: sponsorEOA,
  chain: CHAIN,
  transport: http(RPC_URL)
})

// smart wallet
const smartAccount = await toSafeSmartAccount({
  client: publicClient,
  entryPoint: {
    address: entryPoint07Address,
    version: "0.7",
  },
  owners: [EOA],
  version: "1.4.1"
});

const shBundler = createBundlerClient({
  transport: http(SHBUNDLER_URL),
  name: "shBundler",
  account: smartAccount,
  client: publicClient,
  chain: CHAIN,
  paymaster: paymasterClient,
  // paymasterContext: {
  //   mode: "sponsor",
  //   address: sponsorEOA.address,
  // },
})

const smartAccountClient = createSmartAccountClient({
  account: smartAccount,
  client: publicClient,
  chain: CHAIN,
  bundlerTransport: http(SHBUNDLER_URL),
});


export { 
  userClient, 
  publicClient, 
  smartAccount, 
  paymasterClient, 
  sponsorClient, 
  shBundler,
  sponsorEOA,
  smartAccountClient,
};
