'use client';
import { useState, useEffect } from 'react';
import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { isEthereumWallet } from '@dynamic-labs/ethereum'
import { userClient, smartAccountClient, sponsorAccount } from '@/lib/fastlane/user';
import { shBundler } from '@/lib/fastlane/user';
import { rfqSwap } from '@/lib/fastlane/rfq/demo-smart-wallet';
import './Methods.css';

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
    const userOpHash = await smartAccountClient.sendUserOperation({
      account: smartAccountClient.account,
      calls: [
        {
          to: userClient.account.address,
          value: 1000000000000000n,
        },
      ],
    });
    
    console.log("User Operation Hash:", userOpHash);
    
    const userOpReceipt = await shBundler.waitForUserOperationReceipt({
      hash: userOpHash,
    });
    console.log("User Operation Receipt:", userOpReceipt);
  }

  async function setupRFQDemo() {
    await rfqSwap();
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
        <button className="btn btn-primary" onClick={setupRFQDemo}>Setup RFQ Demo</button>
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