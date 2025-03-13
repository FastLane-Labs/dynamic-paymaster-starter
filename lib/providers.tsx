'use client';

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { CHAIN } from "./fastlane/constants";

const evmNetworks = [
  {
    blockExplorerUrls: [CHAIN.blockExplorers?.default?.url as string],
    chainId: CHAIN.id,
    chainName: CHAIN.name,
    iconUrls: ['https://app.dynamic.xyz/assets/networks/eth.svg'],
    name: CHAIN.name,
    nativeCurrency: {
      decimals: CHAIN.nativeCurrency.decimals,
      name: CHAIN.nativeCurrency.name,
      symbol: CHAIN.nativeCurrency.symbol,
      iconUrl: 'https://app.dynamic.xyz/assets/networks/eth.svg',
    },
    networkId: 1,

    rpcUrls: [CHAIN.rpcUrls.default.http[0]],
    vanityName: CHAIN.name,
  },
];

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <DynamicContextProvider
      theme="auto"
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID as string,
        walletConnectors: [EthereumWalletConnectors],
        overrides: { evmNetworks },
      }}
    >
      {children}
    </DynamicContextProvider>
  );
}