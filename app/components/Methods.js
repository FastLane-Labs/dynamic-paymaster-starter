'use client';
import { useState, useEffect } from 'react';
import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { isEthereumWallet } from '@dynamic-labs/ethereum'
import { userClient, smartAccountClient, shBundler, sponsorClient } from '@/lib/fastlane/user';
import { toPackedUserOperation } from 'viem/account-abstraction';
import './Methods.css';
import { getSignature } from '@/lib/api/getSignature';
import { CHAIN_ID, PAYMASTER_ADDRESS } from '@/lib/fastlane/constants';
export default function DynamicMethods({ isDarkMode }) {
  const isLoggedIn = useIsLoggedIn();
  const { sdkHasLoaded, primaryWallet } = useDynamicContext();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState('');

  
  const safeStringify = (obj) => {
    const seen = new WeakSet();
    return JSON.stringify(obj, (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return '[Circular]';
        }
        seen.add(value);
      }
      return value;
    }, 2);
  };

  useEffect(() => {
    if (sdkHasLoaded && isLoggedIn && primaryWallet) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [sdkHasLoaded, isLoggedIn, primaryWallet]);

  function clearResult() {
    setResult('');
  }

  async function fetchWalletClient() {
      if(!smartAccountClient) return;
      setResult(safeStringify(smartAccountClient));
  }

  async function sendSponsoredTransaction() {
    if(!smartAccountClient) return;
    const calls = [
      {
        to: userClient.account.address,
        value: 1000000000000000n,
      },
    ];
    const userOp = await smartAccountClient.prepareUserOperation({
      account: smartAccountClient.account,
      calls,
    });

    const packedUserOp = toPackedUserOperation(userOp);
    
    // BACKEND SERVICE: START
    const currentTime = BigInt(Math.floor(Date.now() / 1000));
    const validUntil = currentTime + 3600n;
    const validAfter = 0n;

    const sponsorSignature = await getSignature(packedUserOp, validUntil, validAfter, PAYMASTER_ADDRESS, CHAIN_ID);
    // BACKEND SERVICE: END
    
    const userOpHash = await shBundler.sendUserOperation({
      account: smartAccountClient.account,
      calls,
      // MUST HAVE SAME NONCE AS PREPARED USER OPERATION
      nonce: userOp.nonce,
      callGasLimit: userOp.callGasLimit,
      verificationGasLimit: userOp.verificationGasLimit,
      preVerificationGas: userOp.preVerificationGas,
      maxFeePerGas: userOp.maxFeePerGas,
      maxPriorityFeePerGas: userOp.maxPriorityFeePerGas,
      paymasterContext: {
        mode: "sponsor",
        sponsor: sponsorClient.account.address,
        sponsorSignature,
        validUntil: validUntil.toString(),
        validAfter: validAfter.toString()
      }
    });
    
    const userOpReceipt = await shBundler.waitForUserOperationReceipt({
      hash: userOpHash,
    });
    console.log("User Operation Receipt:", userOpReceipt);
  }

   return (
    <>
      {!isLoading && (
        <div className="dynamic-methods" data-theme={isDarkMode ? 'dark' : 'light'}>
          <div className="methods-container">
            
            
    {primaryWallet && isEthereumWallet(primaryWallet) &&
      <>
        <button className="btn btn-primary" onClick={fetchWalletClient}>Fetch Wallet Client</button>
        <button className="btn btn-primary" onClick={sendSponsoredTransaction}>Send Sponsored Transaction</button>    
      </>
    }

        </div>
          {result && (
            <div className="results-container">
              <pre className="results-text">{result}</pre>
            </div>
          )}
          {result && (
            <div className="clear-container">
              <button className="btn btn-primary" onClick={clearResult}>Clear</button>
            </div>
          )}
        </div>
      )}
    </>
  );
}