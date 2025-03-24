module.exports = {

"[externals]/next/dist/compiled/next-server/pages-api.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/viem/account-abstraction [external] (viem/account-abstraction, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("viem/account-abstraction");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/viem [external] (viem, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("viem");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/fastlane/constants.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
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
const RPC_URL = ("TURBOPACK compile-time value", "https://rpc.monad-testnet.fastlane.xyz");
const SHBUNDLER_URL = ("TURBOPACK compile-time value", "https://monad-testnet.4337-shbundler-fra.fastlane-labs.xyz");
const PAYMASTER_URL = ("TURBOPACK compile-time value", "https://monad-testnet.4337-shbundler-fra.fastlane-labs.xyz");
const PRIVATE_KEY = ("TURBOPACK compile-time value", "0x0abba15249271743713eeebc09e1881e577db29ff959f7b441af37add7b57c41");
const ADDRESS_HUB = ("TURBOPACK compile-time value", "0xC9f0cDE8316AbC5Efc8C3f5A6b571e815C021B51");
const PAYMASTER_ADDRESS = ("TURBOPACK compile-time value", "0x686bff22da7EeCff8d9606e81b1A8ce15Dd925b7");
const SPONSOR_WALLET_PRIVATE_KEY = ("TURBOPACK compile-time value", "0x0abba15249271743713eeebc09e1881e577db29ff959f7b441af37add7b57c41");
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
}}),
"[externals]/permissionless/accounts [external] (permissionless/accounts, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("permissionless/accounts");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/viem/accounts [external] (viem/accounts, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("viem/accounts");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/permissionless/clients [external] (permissionless/clients, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("permissionless/clients");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/fastlane/user.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/viem [external] (viem, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fastlane/constants.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$permissionless$2f$accounts__$5b$external$5d$__$28$permissionless$2f$accounts$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/permissionless/accounts [external] (permissionless/accounts, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$account$2d$abstraction__$5b$external$5d$__$28$viem$2f$account$2d$abstraction$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/viem/account-abstraction [external] (viem/account-abstraction, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$accounts__$5b$external$5d$__$28$viem$2f$accounts$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/viem/accounts [external] (viem/accounts, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$permissionless$2f$clients__$5b$external$5d$__$28$permissionless$2f$clients$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/permissionless/clients [external] (permissionless/clients, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$permissionless$2f$accounts__$5b$external$5d$__$28$permissionless$2f$accounts$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$account$2d$abstraction__$5b$external$5d$__$28$viem$2f$account$2d$abstraction$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$accounts__$5b$external$5d$__$28$viem$2f$accounts$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$permissionless$2f$clients__$5b$external$5d$__$28$permissionless$2f$clients$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$permissionless$2f$accounts__$5b$external$5d$__$28$permissionless$2f$accounts$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$account$2d$abstraction__$5b$external$5d$__$28$viem$2f$account$2d$abstraction$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$accounts__$5b$external$5d$__$28$viem$2f$accounts$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$permissionless$2f$clients__$5b$external$5d$__$28$permissionless$2f$clients$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
// EOA
const EOA = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$accounts__$5b$external$5d$__$28$viem$2f$accounts$2c$__esm_import$29$__["privateKeyToAccount"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PRIVATE_KEY"]);
// user client
const userClient = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__["createWalletClient"])({
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["CHAIN"],
    transport: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__["http"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RPC_URL"]),
    account: EOA
});
// public client
const publicClient = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__["createPublicClient"])({
    transport: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__["http"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RPC_URL"]),
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["CHAIN"]
});
// paymaster client
const paymasterClient = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$account$2d$abstraction__$5b$external$5d$__$28$viem$2f$account$2d$abstraction$2c$__esm_import$29$__["createPaymasterClient"])({
    transport: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__["http"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["PAYMASTER_URL"])
});
// sponsor account
const sponsorEOA = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$accounts__$5b$external$5d$__$28$viem$2f$accounts$2c$__esm_import$29$__["privateKeyToAccount"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["SPONSOR_WALLET_PRIVATE_KEY"]);
// sponsor wallet
const sponsorClient = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__["createWalletClient"])({
    account: sponsorEOA,
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["CHAIN"],
    transport: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__["http"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["RPC_URL"])
});
// smart wallet
const smartAccount = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$permissionless$2f$accounts__$5b$external$5d$__$28$permissionless$2f$accounts$2c$__esm_import$29$__["toSafeSmartAccount"])({
    client: publicClient,
    entryPoint: {
        address: __TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$account$2d$abstraction__$5b$external$5d$__$28$viem$2f$account$2d$abstraction$2c$__esm_import$29$__["entryPoint07Address"],
        version: "0.7"
    },
    owners: [
        EOA
    ],
    version: "1.4.1"
});
const shBundler = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$account$2d$abstraction__$5b$external$5d$__$28$viem$2f$account$2d$abstraction$2c$__esm_import$29$__["createBundlerClient"])({
    transport: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__["http"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["SHBUNDLER_URL"]),
    name: "shBundler",
    account: smartAccount,
    client: publicClient,
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["CHAIN"],
    paymaster: paymasterClient
});
const smartAccountClient = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$permissionless$2f$clients__$5b$external$5d$__$28$permissionless$2f$clients$2c$__esm_import$29$__["createSmartAccountClient"])({
    account: smartAccount,
    client: publicClient,
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["CHAIN"],
    bundlerTransport: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__["http"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["SHBUNDLER_URL"])
});
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[externals]/superjson [external] (superjson, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("superjson");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/pages/api/paymaster.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "config": (()=>config),
    "default": (()=>handler),
    "handleGetSignature": (()=>handleGetSignature)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$account$2d$abstraction__$5b$external$5d$__$28$viem$2f$account$2d$abstraction$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/viem/account-abstraction [external] (viem/account-abstraction, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/viem [external] (viem, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fastlane/user.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$superjson__$5b$external$5d$__$28$superjson$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/superjson [external] (superjson, esm_import)");
(()=>{
    const e = new Error("Cannot find module 'raw-body'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$account$2d$abstraction__$5b$external$5d$__$28$viem$2f$account$2d$abstraction$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$api$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$superjson__$5b$external$5d$__$28$superjson$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$account$2d$abstraction__$5b$external$5d$__$28$viem$2f$account$2d$abstraction$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$superjson__$5b$external$5d$__$28$superjson$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
const config = {
    api: {
        bodyParser: false
    }
};
async function handler(req, res) {
    // Only accept POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    try {
        const rawBody = await getRawBody(req, {
            encoding: 'utf8'
        });
        const { jsonrpc, id, method, params } = __TURBOPACK__imported__module__$5b$externals$5d2f$superjson__$5b$external$5d$__$28$superjson$2c$__esm_import$29$__["default"].parse(rawBody);
        // Validate the JSON-RPC request
        if (jsonrpc !== '2.0' || !id || !method) {
            return res.status(400).json({
                jsonrpc: '2.0',
                id: id || null,
                error: {
                    code: -32600,
                    message: 'Invalid request'
                }
            });
        }
        // Handle different RPC methods
        switch(method){
            case 'backend_getSignature':
                const { userOp, validUntil, validAfter, paymasterAddress, chainId } = params;
                console.log("userOp", userOp);
                console.log("validUntil", validUntil);
                console.log("validAfter", validAfter);
                console.log("paymasterAddress", paymasterAddress);
                console.log("chainId", chainId);
                // Convert validUntil and validAfter to BigInt
                const validUntilBigInt = BigInt(validUntil);
                const validAfterBigInt = BigInt(validAfter);
                //chainId is a string, convert to bigint
                const chainIdBigInt = BigInt(chainId);
                // convert userOp to PackedUserOperation
                const packedUserOp = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$account$2d$abstraction__$5b$external$5d$__$28$viem$2f$account$2d$abstraction$2c$__esm_import$29$__["toPackedUserOperation"])(userOp);
                return handleGetSignature(packedUserOp, validUntilBigInt, validAfterBigInt, paymasterAddress, chainIdBigInt);
            default:
                return res.status(400).json({
                    jsonrpc: '2.0',
                    id,
                    error: {
                        code: -32601,
                        message: 'Method not found'
                    }
                });
        }
    } catch (error) {
        console.error('RPC handler error:', error);
        return res.status(500).json({
            jsonrpc: '2.0',
            id: req.body?.id || null,
            error: {
                code: -32603,
                message: 'Internal error',
                data: error.message
            }
        });
    }
}
async function handleGetSignature(userOp, validUntil, validAfter, paymasterAddress, chainId) {
    const hash = await getHash(userOp, validUntil, validAfter, paymasterAddress, chainId);
    // Sign hash with sponsor wallet
    const sponsorSignature = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sponsorClient"].signMessage({
        account: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sponsorClient"].account,
        message: {
            raw: hash
        }
    });
    return sponsorSignature;
}
/**
 * Gets the hash of the user operation.
 * @param userOp The user operation
 * @param validUntil The end timestamp of the user operation
 * @param validAfter The start timestamp of the user operation
 * @param paymasterAddress The address of the paymaster contract
 * @param chainId The chain ID
 * @returns The hash of the user operation
 */ function getHash(userOp, validUntil, validAfter, paymasterAddress, chainId) {
    // Encode the parameters according to the Solidity abi.encode format
    return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__["encodeAbiParameters"])((0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__["parseAbiParameters"])('address, uint256, bytes32, bytes32, bytes32, uint256, address, uint48, uint48'), [
        userOp.sender,
        userOp.nonce,
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__["keccak256"])(userOp.initCode || '0x'),
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__["keccak256"])(userOp.callData),
        userOp.gasFees,
        chainId,
        paymasterAddress,
        Number(validUntil),
        Number(validAfter)
    ]));
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/node_modules/next/dist/esm/server/route-modules/pages-api/module.compiled.js [api] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time truthy", 1) {
        module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/pages-api.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api.runtime.dev.js, cjs)");
    } else {
        "TURBOPACK unreachable";
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/esm/server/route-kind.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "RouteKind": (()=>RouteKind)
});
var RouteKind = /*#__PURE__*/ function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
    return RouteKind;
}({}); //# sourceMappingURL=route-kind.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/helpers.js [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ __turbopack_context__.s({
    "hoist": (()=>hoist)
});
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ('then' in module && typeof module.then === 'function') {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === 'function' && name === 'default') {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
} //# sourceMappingURL=helpers.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/pages-api.js { INNER_PAGE => \"[project]/pages/api/paymaster.ts [api] (ecmascript)\" } [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "config": (()=>config),
    "default": (()=>__TURBOPACK__default__export__),
    "routeModule": (()=>routeModule)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/pages-api/module.compiled.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/build/templates/helpers.js [api] (ecmascript)");
// Import the userland code.
var __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$paymaster$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/pages/api/paymaster.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$paymaster$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$paymaster$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$paymaster$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, 'default');
const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$helpers$2e$js__$5b$api$5d$__$28$ecmascript$29$__["hoist"])(__TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$paymaster$2e$ts__$5b$api$5d$__$28$ecmascript$29$__, 'config');
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$pages$2d$api$2f$module$2e$compiled$2e$js__$5b$api$5d$__$28$ecmascript$29$__["PagesAPIRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$api$5d$__$28$ecmascript$29$__["RouteKind"].PAGES_API,
        page: "/api/paymaster",
        pathname: "/api/paymaster",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$pages$2f$api$2f$paymaster$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
}); //# sourceMappingURL=pages-api.js.map
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__74bbf52b._.js.map