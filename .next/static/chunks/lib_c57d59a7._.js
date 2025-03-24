(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/lib_c57d59a7._.js", {

"[project]/lib/fastlane/constants.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ADDRESS_HUB": (()=>ADDRESS_HUB),
    "AUCTIONEER_ADDRESS": (()=>AUCTIONEER_ADDRESS),
    "AUCTIONEER_ENDPOINT": (()=>AUCTIONEER_ENDPOINT),
    "CHAIN": (()=>CHAIN),
    "CHAIN_ID": (()=>CHAIN_ID),
    "MIN_BONDED_BALANCE": (()=>MIN_BONDED_BALANCE),
    "PAIR_ADDRESS": (()=>PAIR_ADDRESS),
    "PAYMASTER_URL": (()=>PAYMASTER_URL),
    "PRIVATE_KEY": (()=>PRIVATE_KEY),
    "RFQ_CONTROL_ADDRESS": (()=>RFQ_CONTROL_ADDRESS),
    "ROUTER_ADDRESS": (()=>ROUTER_ADDRESS),
    "RPC_URL": (()=>RPC_URL),
    "SHBUNDLER_URL": (()=>SHBUNDLER_URL),
    "SOLVER_CONTRACT_ADDRESS": (()=>SOLVER_CONTRACT_ADDRESS),
    "SPONSOR_WALLET_PRIVATE_KEY": (()=>SPONSOR_WALLET_PRIVATE_KEY),
    "USER_BUY_TOKEN_ADDRESS": (()=>USER_BUY_TOKEN_ADDRESS),
    "USER_SELL_TOKEN_ADDRESS": (()=>USER_SELL_TOKEN_ADDRESS),
    "USER_SELL_TOKEN_AMOUNT": (()=>USER_SELL_TOKEN_AMOUNT),
    "WETH_ADDRESS": (()=>WETH_ADDRESS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const RPC_URL = ("TURBOPACK compile-time value", "https://rpc.monad-testnet.fastlane.xyz");
const SHBUNDLER_URL = ("TURBOPACK compile-time value", "https://monad-testnet.4337-shbundler-fra.fastlane-labs.xyz");
const PAYMASTER_URL = ("TURBOPACK compile-time value", "http://localhost:3000/api/paymaster");
const PRIVATE_KEY = ("TURBOPACK compile-time value", "0x0abba15249271743713eeebc09e1881e577db29ff959f7b441af37add7b57c41");
const ADDRESS_HUB = ("TURBOPACK compile-time value", "0xC9f0cDE8316AbC5Efc8C3f5A6b571e815C021B51");
const SPONSOR_WALLET_PRIVATE_KEY = ("TURBOPACK compile-time value", "0x0abba15249271743713eeebc09e1881e577db29ff959f7b441af37add7b57c41");
const AUCTIONEER_ENDPOINT = ("TURBOPACK compile-time value", "https://auctioneer-fra.fastlane-labs.xyz/gen");
const AUCTIONEER_ADDRESS = ("TURBOPACK compile-time value", "0x1d6C72A7Ca003DbC700D419A2577f08582133b3a");
const RFQ_CONTROL_ADDRESS = ("TURBOPACK compile-time value", "0x4c085DE876A991b7C9aF8bCc283625f85D944444");
const USER_BUY_TOKEN_ADDRESS = ("TURBOPACK compile-time value", "0x1b4Cb47622705F0F67b6B18bBD1cB1a91fc77d37");
const USER_SELL_TOKEN_ADDRESS = ("TURBOPACK compile-time value", "0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701");
const USER_SELL_TOKEN_AMOUNT = ("TURBOPACK compile-time value", "900000000000");
const ROUTER_ADDRESS = ("TURBOPACK compile-time value", "0x5e491b996601e32D944ffaD28140A979311F1084");
const PAIR_ADDRESS = ("TURBOPACK compile-time value", "0x0Fb77fE46c0FEe4d9E38D30D9Efc5c126B2BBd14");
const SOLVER_CONTRACT_ADDRESS = ("TURBOPACK compile-time value", "0xDAb915B11478e26a3F881299a2588f1906ae2FE");
const WETH_ADDRESS = ("TURBOPACK compile-time value", "0x760AfE86e5de5fa0Ee542fc7B7B713e1c5425701");
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
}}),
"[project]/lib/providers.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
}}),
}]);

//# sourceMappingURL=lib_c57d59a7._.js.map