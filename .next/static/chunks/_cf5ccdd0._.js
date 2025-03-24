(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_cf5ccdd0._.js", {

"[project]/lib/dynamic.ts [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/dynamic.ts [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@dynamic-labs/ethereum/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dynamic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/dynamic.ts [app-client] (ecmascript) <locals>");
}}),
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
    paymaster: paymasterClient
});
const smartAccountClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$permissionless$2f$_esm$2f$clients$2f$createSmartAccountClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSmartAccountClient"])({
    account: smartAccount,
    client: publicClient,
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAIN"],
    bundlerTransport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHBUNDLER_URL"])
});
;
var _c;
__turbopack_context__.k.register(_c, "EOA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/lib/api/getSignature.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getSignature": (()=>getSignature)
});
async function getSignature(packedUserOp, validUntil, validAfter, paymasterAddress, chainId) {
    const payload = {
        jsonrpc: "2.0",
        id: 1,
        method: "backend_getSignature",
        params: {
            userOp: packedUserOp,
            validUntil,
            validAfter,
            paymasterAddress,
            chainId
        }
    };
    const response = await fetch('/api/paymaster', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload, (key, value)=>typeof value === 'bigint' ? value.toString() : value)
    });
    const data = await response.json();
    if (data.error) {
        throw new Error(`Error from backend: ${data.error.message}`);
    }
    return data.result;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/Methods.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__, k: __turbopack_refresh__, m: module } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>DynamicMethods)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext/useDynamicContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useIsLoggedIn$2f$useIsLoggedIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/utils/hooks/useIsLoggedIn/useIsLoggedIn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@dynamic-labs/ethereum/src/index.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$wallet$2f$isEthereumWallet$2f$isEthereumWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dynamic-labs/ethereum-core/src/wallet/isEthereumWallet/isEthereumWallet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fastlane/user.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$userOperation$2f$toPackedUserOperation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/account-abstraction/utils/userOperation/toPackedUserOperation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$getSignature$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/getSignature.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fastlane/constants.ts [app-client] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function DynamicMethods({ isDarkMode }) {
    _s();
    const isLoggedIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useIsLoggedIn$2f$useIsLoggedIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsLoggedIn"])();
    const { sdkHasLoaded, primaryWallet } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDynamicContext"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const safeStringify = (obj)=>{
        const seen = new WeakSet();
        return JSON.stringify(obj, (key, value)=>{
            if (typeof value === 'object' && value !== null) {
                if (seen.has(value)) {
                    return '[Circular]';
                }
                seen.add(value);
            }
            return value;
        }, 2);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DynamicMethods.useEffect": ()=>{
            if (sdkHasLoaded && isLoggedIn && primaryWallet) {
                setIsLoading(false);
            } else {
                setIsLoading(true);
            }
        }
    }["DynamicMethods.useEffect"], [
        sdkHasLoaded,
        isLoggedIn,
        primaryWallet
    ]);
    function clearResult() {
        setResult('');
    }
    async function fetchWalletClient() {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartAccountClient"]) return;
        setResult(safeStringify(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartAccountClient"]));
    }
    async function sendSponsoredTransaction() {
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartAccountClient"]) return;
        const calls = [
            {
                to: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userClient"].account.address,
                value: 1000000000000000n
            }
        ];
        const userOp = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartAccountClient"].prepareUserOperation({
            account: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartAccountClient"].account,
            calls
        });
        const packedUserOp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$account$2d$abstraction$2f$utils$2f$userOperation$2f$toPackedUserOperation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPackedUserOperation"])(userOp);
        console.log("packedUserOp", packedUserOp);
        console.log("gasFees", packedUserOp.gasFees);
        // BACKEND SERVICE: START
        const currentTime = BigInt(Math.floor(Date.now() / 1000));
        const validUntil = currentTime + 3600n;
        const validAfter = 0n;
        const sponsorSignature = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$getSignature$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSignature"])(packedUserOp, validUntil, validAfter, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PAYMASTER_ADDRESS"], __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CHAIN_ID"]);
        // BACKEND SERVICE: END
        const userOpHash = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shBundler"].sendUserOperation({
            account: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smartAccountClient"].account,
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
                sponsor: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sponsorClient"].account.address,
                sponsorSignature,
                validUntil: validUntil.toString(),
                validAfter: validAfter.toString()
            }
        });
        const userOpReceipt = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shBundler"].waitForUserOperationReceipt({
            hash: userOpHash
        });
        console.log("User Operation Receipt:", userOpReceipt);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "dynamic-methods",
            "data-theme": isDarkMode ? 'dark' : 'light',
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "methods-container",
                    children: primaryWallet && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$ethereum$2d$core$2f$src$2f$wallet$2f$isEthereumWallet$2f$isEthereumWallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEthereumWallet"])(primaryWallet) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-primary",
                                onClick: fetchWalletClient,
                                children: "Fetch Wallet Client"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Methods.js",
                                lineNumber: 106,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn btn-primary",
                                onClick: sendSponsoredTransaction,
                                children: "Send Sponsored Transaction"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Methods.js",
                                lineNumber: 107,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/app/components/Methods.js",
                    lineNumber: 101,
                    columnNumber: 11
                }, this),
                result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "results-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                        className: "results-text",
                        children: result
                    }, void 0, false, {
                        fileName: "[project]/app/components/Methods.js",
                        lineNumber: 114,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/Methods.js",
                    lineNumber: 113,
                    columnNumber: 13
                }, this),
                result && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "clear-container",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-primary",
                        onClick: clearResult,
                        children: "Clear"
                    }, void 0, false, {
                        fileName: "[project]/app/components/Methods.js",
                        lineNumber: 119,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/Methods.js",
                    lineNumber: 118,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Methods.js",
            lineNumber: 100,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
_s(DynamicMethods, "q96H5ij7gWW+TbizSS6SGYeTj3w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$utils$2f$hooks$2f$useIsLoggedIn$2f$useIsLoggedIn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsLoggedIn"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useDynamicContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDynamicContext"]
    ];
});
_c = DynamicMethods;
var _c;
__turbopack_context__.k.register(_c, "DynamicMethods");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/app/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__, k: __turbopack_refresh__, m: module } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>Main)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$dynamic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/lib/dynamic.ts [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$DynamicWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dynamic-labs/sdk-react-core/src/lib/widgets/DynamicWidget/DynamicWidget.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Methods.js [app-client] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const checkIsDarkSchemePreferred = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return window.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false;
    }
    "TURBOPACK unreachable";
};
function Main() {
    _s();
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(checkIsDarkSchemePreferred);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Main.useEffect": ()=>{
            const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = {
                "Main.useEffect.handleChange": ()=>setIsDarkMode(checkIsDarkSchemePreferred())
            }["Main.useEffect.handleChange"];
            darkModeMediaQuery.addEventListener('change', handleChange);
            return ({
                "Main.useEffect": ()=>darkModeMediaQuery.removeEventListener('change', handleChange)
            })["Main.useEffect"];
        }
    }["Main.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `container ${isDarkMode ? 'dark' : 'light'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "logo",
                        src: isDarkMode ? "/logo-light.png" : "/logo-dark.png",
                        alt: "dynamic"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "header-buttons",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "docs-button",
                                onClick: ()=>window.open('https://docs.dynamic.xyz', '_blank', 'noopener,noreferrer'),
                                children: "Docs"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "get-started",
                                onClick: ()=>window.open('https://app.dynamic.xyz', '_blank', 'noopener,noreferrer'),
                                children: "Get started"
                            }, void 0, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$widgets$2f$DynamicWidget$2f$DynamicWidget$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DynamicWidget"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Methods$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isDarkMode: isDarkMode
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "footer-text",
                        children: "Made with ❤️ by dynamic"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        className: "footer-image",
                        src: isDarkMode ? "/image-dark.png" : "/image-light.png",
                        alt: "dynamic"
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(Main, "Pv6ty234/TzpUEpZ60lvATc35Bk=");
_c = Main;
var _c;
__turbopack_context__.k.register(_c, "Main");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
}]);

//# sourceMappingURL=_cf5ccdd0._.js.map