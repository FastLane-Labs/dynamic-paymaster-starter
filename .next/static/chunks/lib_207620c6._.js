(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/lib_207620c6._.js", {

"[project]/lib/fastlane/user.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__, k: __turbopack_refresh__, m: module } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "paymasterClient": (()=>paymasterClient),
    "publicClient": (()=>publicClient),
    "shBundler": (()=>shBundler),
    "smartAccount": (()=>smartAccount),
    "smartAccountClient": (()=>smartAccountClient),
    "sponsorClient": (()=>sponsorClient),
    "sponsorEOA": (()=>sponsorEOA),
    "userClient": (()=>userClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/clients/createPublicClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/clients/createWalletClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/clients/transports/http.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fastlane/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$permissionless$2f$_esm$2f$accounts$2f$safe$2f$toSafeSmartAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/permissionless/_esm/accounts/safe/toSafeSmartAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$clients$2f$createBundlerClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/account-abstraction/clients/createBundlerClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/account-abstraction/constants/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$clients$2f$createPaymasterClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/account-abstraction/clients/createPaymasterClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$privateKeyToAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/accounts/privateKeyToAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$permissionless$2f$_esm$2f$clients$2f$createSmartAccountClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/permissionless/_esm/clients/createSmartAccountClient.js [app-client] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
// EOA
const EOA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$privateKeyToAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateKeyToAccount"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIVATE_KEY"]);
_c = EOA;
// user client
const userClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWalletClient"])({
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAIN"],
    transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RPC_URL"]),
    account: EOA
});
// public client
const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createPublicClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPublicClient"])({
    transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RPC_URL"]),
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAIN"]
});
// paymaster client
const paymasterClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$clients$2f$createPaymasterClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPaymasterClient"])({
    transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMASTER_URL"])
});
// sponsor account
const sponsorEOA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$privateKeyToAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["privateKeyToAccount"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPONSOR_WALLET_PRIVATE_KEY"]);
// sponsor wallet
const sponsorClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$createWalletClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWalletClient"])({
    account: sponsorEOA,
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAIN"],
    transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RPC_URL"])
});
// smart wallet
const smartAccount = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$permissionless$2f$_esm$2f$accounts$2f$safe$2f$toSafeSmartAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toSafeSmartAccount"])({
    client: publicClient,
    entryPoint: {
        address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$constants$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["entryPoint07Address"],
        version: "0.7"
    },
    owners: [
        EOA
    ],
    version: "1.4.1"
});
const shBundler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$clients$2f$createBundlerClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBundlerClient"])({
    transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHBUNDLER_URL"]),
    name: "shBundler",
    account: smartAccount,
    client: publicClient,
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAIN"],
    paymaster: paymasterClient,
    paymasterContext: {
        mode: "sponsor",
        address: sponsorEOA.address
    }
});
const smartAccountClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$permissionless$2f$_esm$2f$clients$2f$createSmartAccountClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSmartAccountClient"])({
    account: smartAccount,
    client: publicClient,
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAIN"],
    bundlerTransport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHBUNDLER_URL"]),
    paymaster: paymasterClient
});
;
var _c;
__turbopack_context__.k.register(_c, "EOA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/fastlane/constants.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__, k: __turbopack_refresh__, m: module } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "ADDRESS_HUB": (()=>ADDRESS_HUB),
    "CHAIN": (()=>CHAIN),
    "CHAIN_ID": (()=>CHAIN_ID),
    "MIN_BONDED_BALANCE": (()=>MIN_BONDED_BALANCE),
    "PAYMASTER_ADDRESS": (()=>PAYMASTER_ADDRESS),
    "PAYMASTER_URL": (()=>PAYMASTER_URL),
    "PRIVATE_KEY": (()=>PRIVATE_KEY),
    "RPC_URL": (()=>RPC_URL),
    "SHBUNDLER_URL": (()=>SHBUNDLER_URL),
    "SPONSOR_WALLET_PRIVATE_KEY": (()=>SPONSOR_WALLET_PRIVATE_KEY)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$getContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/actions/getContract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fastlane/user.ts [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/lib/abi/addressHub.json'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
const RPC_URL = ("TURBOPACK compile-time value", "https://rpc.monad-testnet.fastlane.xyz");
const SHBUNDLER_URL = ("TURBOPACK compile-time value", "https://monad-testnet.4337-shbundler-fra.fastlane-labs.xyz");
const PAYMASTER_URL = ("TURBOPACK compile-time value", "https://monad-testnet.4337-shbundler-fra.fastlane-labs.xyz");
const PRIVATE_KEY = ("TURBOPACK compile-time value", "0x0abba15249271743713eeebc09e1881e577db29ff959f7b441af37add7b57c41");
const ADDRESS_HUB = ("TURBOPACK compile-time value", "0xC9f0cDE8316AbC5Efc8C3f5A6b571e815C021B51");
const SPONSOR_WALLET_PRIVATE_KEY = ("TURBOPACK compile-time value", "0x0abba15249271743713eeebc09e1881e577db29ff959f7b441af37add7b57c41");
const addressHubContract = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$getContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContract"])({
    address: ADDRESS_HUB,
    abi: addressHubAbi,
    client: {
        public: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["publicClient"],
        account: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userClient"]
    }
});
const PAYMASTER_ADDRESS = await addressHubContract.read.paymaster4337([]);
const CHAIN_ID = 10143;
const MIN_BONDED_BALANCE = BigInt(100000000000000000);
const CHAIN = {
    id: Number(CHAIN_ID),
    name: "Monad Testnet",
    nativeCurrency: {
        decimals: 18,
        name: "Monad",
        symbol: "MON"
    },
    rpcUrls: {
        default: {
            http: [
                RPC_URL
            ]
        },
        public: {
            http: [
                RPC_URL
            ]
        }
    },
    blockExplorers: {
        default: {
            name: "Monad Explorer",
            url: "https://testnet.monadexplorer.com/"
        }
    }
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/providers.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__, k: __turbopack_refresh__, m: module } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>Providers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$DynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/DynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@dynamic-labs/ethereum/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$EthereumWalletConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dynamic-labs/ethereum/src/EthereumWalletConnectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fastlane/constants.ts [app-client] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
'use client';
;
;
;
;
const evmNetworks = [
    {
        blockExplorerUrls: [
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAIN"].blockExplorers?.default?.url
        ],
        chainId: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAIN"].id,
        chainName: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAIN"].name,
        iconUrls: [
            'https://app.dynamic.xyz/assets/networks/eth.svg'
        ],
        name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAIN"].name,
        nativeCurrency: {
            decimals: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAIN"].nativeCurrency.decimals,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAIN"].nativeCurrency.name,
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAIN"].nativeCurrency.symbol,
            iconUrl: 'https://app.dynamic.xyz/assets/networks/eth.svg'
        },
        networkId: 1,
        rpcUrls: [
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAIN"].rpcUrls.default.http[0]
        ],
        vanityName: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAIN"].name
    }
];
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$DynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicContextProvider"], {
        theme: "auto",
        settings: {
            environmentId: ("TURBOPACK compile-time value", "0e5734d6-1ea1-4349-8571-25f697b62ab7"),
            walletConnectors: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$EthereumWalletConnectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EthereumWalletConnectors"]
            ],
            overrides: {
                evmNetworks
            }
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/providers.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
}]);

//# sourceMappingURL=lib_207620c6._.js.map