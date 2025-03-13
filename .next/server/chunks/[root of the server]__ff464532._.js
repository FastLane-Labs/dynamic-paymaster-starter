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
"[project]/lib/fastlane/abi/paymaster.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"type\":\"constructor\",\"inputs\":[{\"name\":\"_entryPoint\",\"type\":\"address\",\"internalType\":\"contract IEntryPoint\"},{\"name\":\"_addressHub\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"_escrowDuration\",\"type\":\"uint48\",\"internalType\":\"uint48\"},{\"name\":\"_overhead\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"nonpayable\"},{\"type\":\"receive\",\"stateMutability\":\"payable\"},{\"type\":\"function\",\"name\":\"ADDRESS_HUB\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"addStake\",\"inputs\":[{\"name\":\"unstakeDelaySec\",\"type\":\"uint32\",\"internalType\":\"uint32\"}],\"outputs\":[],\"stateMutability\":\"payable\"},{\"type\":\"function\",\"name\":\"administrator\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"deposit\",\"inputs\":[],\"outputs\":[],\"stateMutability\":\"payable\"},{\"type\":\"function\",\"name\":\"entryPoint\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"contract IEntryPoint\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"getDeposit\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"getHash\",\"inputs\":[{\"name\":\"userOp\",\"type\":\"tuple\",\"internalType\":\"struct PackedUserOperation\",\"components\":[{\"name\":\"sender\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"nonce\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"initCode\",\"type\":\"bytes\",\"internalType\":\"bytes\"},{\"name\":\"callData\",\"type\":\"bytes\",\"internalType\":\"bytes\"},{\"name\":\"accountGasLimits\",\"type\":\"bytes32\",\"internalType\":\"bytes32\"},{\"name\":\"preVerificationGas\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"gasFees\",\"type\":\"bytes32\",\"internalType\":\"bytes32\"},{\"name\":\"paymasterAndData\",\"type\":\"bytes\",\"internalType\":\"bytes\"},{\"name\":\"signature\",\"type\":\"bytes\",\"internalType\":\"bytes\"}]},{\"name\":\"validUntil\",\"type\":\"uint48\",\"internalType\":\"uint48\"},{\"name\":\"validAfter\",\"type\":\"uint48\",\"internalType\":\"uint48\"}],\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\",\"internalType\":\"bytes32\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"overhead\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"POLICY_ID\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"uint64\",\"internalType\":\"uint64\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"postOp\",\"inputs\":[{\"name\":\"mode\",\"type\":\"uint8\",\"internalType\":\"enum IPaymaster.PostOpMode\"},{\"name\":\"context\",\"type\":\"bytes\",\"internalType\":\"bytes\"},{\"name\":\"actualGasCost\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"actualUserOpFeePerGas\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"redeemAndWithdrawShMonad\",\"inputs\":[{\"name\":\"amount\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"setAdministrator\",\"inputs\":[{\"name\":\"newAdministrator\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"shMonad\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"contract IShMonad\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"unbondShMonad\",\"inputs\":[{\"name\":\"amount\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"newMinBalance\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"unlockStake\",\"inputs\":[],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"validatePaymasterUserOp\",\"inputs\":[{\"name\":\"userOp\",\"type\":\"tuple\",\"internalType\":\"struct PackedUserOperation\",\"components\":[{\"name\":\"sender\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"nonce\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"initCode\",\"type\":\"bytes\",\"internalType\":\"bytes\"},{\"name\":\"callData\",\"type\":\"bytes\",\"internalType\":\"bytes\"},{\"name\":\"accountGasLimits\",\"type\":\"bytes32\",\"internalType\":\"bytes32\"},{\"name\":\"preVerificationGas\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"gasFees\",\"type\":\"bytes32\",\"internalType\":\"bytes32\"},{\"name\":\"paymasterAndData\",\"type\":\"bytes\",\"internalType\":\"bytes\"},{\"name\":\"signature\",\"type\":\"bytes\",\"internalType\":\"bytes\"}]},{\"name\":\"userOpHash\",\"type\":\"bytes32\",\"internalType\":\"bytes32\"},{\"name\":\"maxCost\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[{\"name\":\"context\",\"type\":\"bytes\",\"internalType\":\"bytes\"},{\"name\":\"validationData\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"withdrawStake\",\"inputs\":[{\"name\":\"withdrawAddress\",\"type\":\"address\",\"internalType\":\"address payable\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"withdrawTo\",\"inputs\":[{\"name\":\"withdrawAddress\",\"type\":\"address\",\"internalType\":\"address payable\"},{\"name\":\"amount\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"event\",\"name\":\"UserOperationSponsored\",\"inputs\":[{\"name\":\"userOpHash\",\"type\":\"bytes32\",\"indexed\":true,\"internalType\":\"bytes32\"},{\"name\":\"user\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"payor\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"actualGasCost\",\"type\":\"uint256\",\"indexed\":false,\"internalType\":\"uint256\"},{\"name\":\"policyID\",\"type\":\"uint64\",\"indexed\":false,\"internalType\":\"uint64\"}],\"anonymous\":false},{\"type\":\"error\",\"name\":\"ForwardingError\",\"inputs\":[{\"name\":\"nestedError\",\"type\":\"bytes4\",\"internalType\":\"bytes4\"}]},{\"type\":\"error\",\"name\":\"InsufficientBalance\",\"inputs\":[]},{\"type\":\"error\",\"name\":\"InvalidMode\",\"inputs\":[]},{\"type\":\"error\",\"name\":\"InvalidPaymasterAndDataLength\",\"inputs\":[]},{\"type\":\"error\",\"name\":\"InvalidPaymasterConfigLength\",\"inputs\":[]},{\"type\":\"error\",\"name\":\"InvalidPayorAddress\",\"inputs\":[]},{\"type\":\"error\",\"name\":\"InvalidTimestampRange\",\"inputs\":[]}]"));}}),
"[project]/lib/fastlane/abi/addresshub.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"type\":\"function\",\"name\":\"S_addresses\",\"inputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"S_labels\",\"inputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[{\"name\":\"\",\"type\":\"string\",\"internalType\":\"string\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"S_owners\",\"inputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"bool\",\"internalType\":\"bool\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"S_pointers\",\"inputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"addOwner\",\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"addPointerAddress\",\"inputs\":[{\"name\":\"newPointer\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"newAddress\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"newLabel\",\"type\":\"string\",\"internalType\":\"string\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"atlas\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"capitalAllocator\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"clearingHouse\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"entryPoint\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"entrypoint4337\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"getAddressFromPointer\",\"inputs\":[{\"name\":\"pointer\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"getAddressesFromPointers\",\"inputs\":[{\"name\":\"pointersArray\",\"type\":\"uint256[]\",\"internalType\":\"uint256[]\"}],\"outputs\":[{\"name\":\"addressesArray\",\"type\":\"address[]\",\"internalType\":\"address[]\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"getLabelFromPointer\",\"inputs\":[{\"name\":\"pointer\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[{\"name\":\"\",\"type\":\"string\",\"internalType\":\"string\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"getPointerFromAddress\",\"inputs\":[{\"name\":\"target\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"initialize\",\"inputs\":[{\"name\":\"deployer\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"intraFastLaneBatchCall\",\"inputs\":[{\"name\":\"pointers\",\"type\":\"uint256[]\",\"internalType\":\"uint256[]\"},{\"name\":\"values\",\"type\":\"uint256[]\",\"internalType\":\"uint256[]\"},{\"name\":\"gasses\",\"type\":\"uint256[]\",\"internalType\":\"uint256[]\"},{\"name\":\"datumses\",\"type\":\"bytes[]\",\"internalType\":\"bytes[]\"}],\"outputs\":[{\"name\":\"successes\",\"type\":\"bool[]\",\"internalType\":\"bool[]\"},{\"name\":\"returnDatumses\",\"type\":\"bytes[]\",\"internalType\":\"bytes[]\"}],\"stateMutability\":\"payable\"},{\"type\":\"function\",\"name\":\"intraFastLaneBatchStaticCall\",\"inputs\":[{\"name\":\"pointers\",\"type\":\"uint256[]\",\"internalType\":\"uint256[]\"},{\"name\":\"gasses\",\"type\":\"uint256[]\",\"internalType\":\"uint256[]\"},{\"name\":\"datumses\",\"type\":\"bytes[]\",\"internalType\":\"bytes[]\"}],\"outputs\":[{\"name\":\"successes\",\"type\":\"bool[]\",\"internalType\":\"bool[]\"},{\"name\":\"returnDatumses\",\"type\":\"bytes[]\",\"internalType\":\"bytes[]\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"intraFastLaneCall\",\"inputs\":[{\"name\":\"pointer\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"data\",\"type\":\"bytes\",\"internalType\":\"bytes\"}],\"outputs\":[{\"name\":\"\",\"type\":\"bool\",\"internalType\":\"bool\"},{\"name\":\"\",\"type\":\"bytes\",\"internalType\":\"bytes\"}],\"stateMutability\":\"payable\"},{\"type\":\"function\",\"name\":\"intraFastLaneStaticCall\",\"inputs\":[{\"name\":\"pointer\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"data\",\"type\":\"bytes\",\"internalType\":\"bytes\"}],\"outputs\":[{\"name\":\"\",\"type\":\"bool\",\"internalType\":\"bool\"},{\"name\":\"\",\"type\":\"bytes\",\"internalType\":\"bytes\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"isFastLane\",\"inputs\":[{\"name\":\"target\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"bool\",\"internalType\":\"bool\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"isOwner\",\"inputs\":[{\"name\":\"caller\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"bool\",\"internalType\":\"bool\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"paymaster\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"paymaster4337\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"removeOwner\",\"inputs\":[{\"name\":\"oldOwner\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"shMonad\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"stakingHub\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"taskManager\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"updatePointerAddress\",\"inputs\":[{\"name\":\"pointer\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"newAddress\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"validatorAuction\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"stateMutability\":\"view\"},{\"type\":\"event\",\"name\":\"Initialized\",\"inputs\":[{\"name\":\"version\",\"type\":\"uint64\",\"indexed\":false,\"internalType\":\"uint64\"}],\"anonymous\":false},{\"type\":\"error\",\"name\":\"BatchArrayLengthInvalid\",\"inputs\":[]},{\"type\":\"error\",\"name\":\"BatchValueArrayInvalid\",\"inputs\":[]},{\"type\":\"error\",\"name\":\"InvalidInitialization\",\"inputs\":[]},{\"type\":\"error\",\"name\":\"NotInitializing\",\"inputs\":[]}]"));}}),
"[project]/lib/fastlane/abi/shmonad.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("[{\"type\":\"constructor\",\"inputs\":[{\"name\":\"addressHub\",\"type\":\"address\",\"internalType\":\"address\"}],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"ADDRESS_HUB\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"DOMAIN_SEPARATOR\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\",\"internalType\":\"bytes32\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"addPolicyAgent\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"agent\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"agentExecuteWithSponsor\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"payor\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"recipient\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"msgValue\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"gasLimit\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"callTarget\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"callData\",\"type\":\"bytes\",\"internalType\":\"bytes\"}],\"outputs\":[{\"name\":\"actualPayorCost\",\"type\":\"uint128\",\"internalType\":\"uint128\"},{\"name\":\"success\",\"type\":\"bool\",\"internalType\":\"bool\"},{\"name\":\"returnData\",\"type\":\"bytes\",\"internalType\":\"bytes\"}],\"stateMutability\":\"payable\"},{\"type\":\"function\",\"name\":\"agentTransferFromBonded\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"from\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"to\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"fromReleaseAmount\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"inUnderlying\",\"type\":\"bool\",\"internalType\":\"bool\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"agentUnbond\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"from\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"fromReleaseAmount\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"inUnderlying\",\"type\":\"bool\",\"internalType\":\"bool\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"agentWithdrawFromBonded\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"from\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"to\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"fromReleaseAmount\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"inUnderlying\",\"type\":\"bool\",\"internalType\":\"bool\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"allowance\",\"inputs\":[{\"name\":\"owner\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"spender\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"approve\",\"inputs\":[{\"name\":\"spender\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[{\"name\":\"\",\"type\":\"bool\",\"internalType\":\"bool\"}],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"asset\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"balanceOf\",\"inputs\":[{\"name\":\"account\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"balanceOfBonded\",\"inputs\":[{\"name\":\"account\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"balanceOfBonded\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"account\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"balanceOfUnbonding\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"account\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"batchHold\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"accounts\",\"type\":\"address[]\",\"internalType\":\"address[]\"},{\"name\":\"amounts\",\"type\":\"uint256[]\",\"internalType\":\"uint256[]\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"batchRelease\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"accounts\",\"type\":\"address[]\",\"internalType\":\"address[]\"},{\"name\":\"amounts\",\"type\":\"uint256[]\",\"internalType\":\"uint256[]\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"bond\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"bondRecipient\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"bondedTotalSupply\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"boostYield\",\"inputs\":[{\"name\":\"shMonAmount\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"from\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"boostYield\",\"inputs\":[],\"outputs\":[],\"stateMutability\":\"payable\"},{\"type\":\"function\",\"name\":\"claim\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"amount\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"claimAndRebond\",\"inputs\":[{\"name\":\"fromPolicyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"toPolicyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"bondRecipient\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"claimAndWithdraw\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"amount\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[{\"name\":\"shares\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"convertToAssets\",\"inputs\":[{\"name\":\"shares\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"convertToShares\",\"inputs\":[{\"name\":\"assets\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"createPolicy\",\"inputs\":[{\"name\":\"escrowDuration\",\"type\":\"uint48\",\"internalType\":\"uint48\"}],\"outputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"policyERC20Wrapper\",\"type\":\"address\",\"internalType\":\"address\"}],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"decimals\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"uint8\",\"internalType\":\"uint8\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"deposit\",\"inputs\":[{\"name\":\"assets\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"receiver\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"payable\"},{\"type\":\"function\",\"name\":\"depositAndBond\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"bondRecipient\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"shMonToBond\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[],\"stateMutability\":\"payable\"},{\"type\":\"function\",\"name\":\"disablePolicy\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"eip712Domain\",\"inputs\":[],\"outputs\":[{\"name\":\"fields\",\"type\":\"bytes1\",\"internalType\":\"bytes1\"},{\"name\":\"name\",\"type\":\"string\",\"internalType\":\"string\"},{\"name\":\"version\",\"type\":\"string\",\"internalType\":\"string\"},{\"name\":\"chainId\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"verifyingContract\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"salt\",\"type\":\"bytes32\",\"internalType\":\"bytes32\"},{\"name\":\"extensions\",\"type\":\"uint256[]\",\"internalType\":\"uint256[]\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"getHoldAmount\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"account\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"getPolicy\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"}],\"outputs\":[{\"name\":\"\",\"type\":\"tuple\",\"internalType\":\"struct Policy\",\"components\":[{\"name\":\"escrowDuration\",\"type\":\"uint48\",\"internalType\":\"uint48\"},{\"name\":\"active\",\"type\":\"bool\",\"internalType\":\"bool\"}]}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"getPolicyAgents\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"}],\"outputs\":[{\"name\":\"\",\"type\":\"address[]\",\"internalType\":\"address[]\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"hold\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"account\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"initialize\",\"inputs\":[{\"name\":\"deployer\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"isPolicyAgent\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"agent\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"bool\",\"internalType\":\"bool\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"maxDeposit\",\"inputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"maxMint\",\"inputs\":[{\"name\":\"\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"maxRedeem\",\"inputs\":[{\"name\":\"owner\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"maxWithdraw\",\"inputs\":[{\"name\":\"owner\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"mint\",\"inputs\":[{\"name\":\"shares\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"receiver\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"payable\"},{\"type\":\"function\",\"name\":\"name\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"string\",\"internalType\":\"string\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"nonces\",\"inputs\":[{\"name\":\"owner\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"permit\",\"inputs\":[{\"name\":\"owner\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"spender\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"deadline\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"v\",\"type\":\"uint8\",\"internalType\":\"uint8\"},{\"name\":\"r\",\"type\":\"bytes32\",\"internalType\":\"bytes32\"},{\"name\":\"s\",\"type\":\"bytes32\",\"internalType\":\"bytes32\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"policyCount\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"uint64\",\"internalType\":\"uint64\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"previewDeposit\",\"inputs\":[{\"name\":\"assets\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"previewMint\",\"inputs\":[{\"name\":\"shares\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"previewRedeem\",\"inputs\":[{\"name\":\"shares\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"previewWithdraw\",\"inputs\":[{\"name\":\"assets\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"redeem\",\"inputs\":[{\"name\":\"shares\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"receiver\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"owner\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"release\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"account\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"removePolicyAgent\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"agent\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"setMinBondedBalance\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"minBonded\",\"type\":\"uint128\",\"internalType\":\"uint128\"},{\"name\":\"maxTopUpPerPeriod\",\"type\":\"uint128\",\"internalType\":\"uint128\"},{\"name\":\"topUpPeriodDuration\",\"type\":\"uint32\",\"internalType\":\"uint32\"}],\"outputs\":[],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"symbol\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"string\",\"internalType\":\"string\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"totalAssets\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"totalSupply\",\"inputs\":[],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"transfer\",\"inputs\":[{\"name\":\"to\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[{\"name\":\"\",\"type\":\"bool\",\"internalType\":\"bool\"}],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"transferFrom\",\"inputs\":[{\"name\":\"from\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"to\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[{\"name\":\"\",\"type\":\"bool\",\"internalType\":\"bool\"}],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"unbond\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"amount\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"newMinBalance\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"outputs\":[{\"name\":\"unbondBlock\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"nonpayable\"},{\"type\":\"function\",\"name\":\"unbondingCompleteBlock\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"account\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"view\"},{\"type\":\"function\",\"name\":\"withdraw\",\"inputs\":[{\"name\":\"assets\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"receiver\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"owner\",\"type\":\"address\",\"internalType\":\"address\"}],\"outputs\":[{\"name\":\"\",\"type\":\"uint256\",\"internalType\":\"uint256\"}],\"stateMutability\":\"nonpayable\"},{\"type\":\"event\",\"name\":\"AddPolicyAgent\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"indexed\":true,\"internalType\":\"uint64\"},{\"name\":\"agent\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"}],\"anonymous\":false},{\"type\":\"event\",\"name\":\"AgentExecuteWithSponsor\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"indexed\":true,\"internalType\":\"uint64\"},{\"name\":\"payor\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"agent\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"recipient\",\"type\":\"address\",\"indexed\":false,\"internalType\":\"address\"},{\"name\":\"msgValue\",\"type\":\"uint256\",\"indexed\":false,\"internalType\":\"uint256\"},{\"name\":\"gasLimit\",\"type\":\"uint256\",\"indexed\":false,\"internalType\":\"uint256\"},{\"name\":\"actualPayorCost\",\"type\":\"uint256\",\"indexed\":false,\"internalType\":\"uint256\"}],\"anonymous\":false},{\"type\":\"event\",\"name\":\"AgentTransferFromBonded\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"indexed\":true,\"internalType\":\"uint64\"},{\"name\":\"from\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"to\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\",\"indexed\":false,\"internalType\":\"uint256\"}],\"anonymous\":false},{\"type\":\"event\",\"name\":\"AgentUnbonded\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"indexed\":true,\"internalType\":\"uint64\"},{\"name\":\"from\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\",\"indexed\":false,\"internalType\":\"uint256\"}],\"anonymous\":false},{\"type\":\"event\",\"name\":\"AgentWithdrawFromBonded\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"indexed\":true,\"internalType\":\"uint64\"},{\"name\":\"from\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"to\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\",\"indexed\":false,\"internalType\":\"uint256\"}],\"anonymous\":false},{\"type\":\"event\",\"name\":\"Approval\",\"inputs\":[{\"name\":\"owner\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"spender\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\",\"indexed\":false,\"internalType\":\"uint256\"}],\"anonymous\":false},{\"type\":\"event\",\"name\":\"Bond\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"indexed\":true,\"internalType\":\"uint64\"},{\"name\":\"account\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\",\"indexed\":false,\"internalType\":\"uint256\"}],\"anonymous\":false},{\"type\":\"event\",\"name\":\"Claim\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"indexed\":true,\"internalType\":\"uint64\"},{\"name\":\"account\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\",\"indexed\":false,\"internalType\":\"uint256\"}],\"anonymous\":false},{\"type\":\"event\",\"name\":\"CreatePolicy\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"indexed\":true,\"internalType\":\"uint64\"},{\"name\":\"creator\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"escrowDuration\",\"type\":\"uint48\",\"indexed\":false,\"internalType\":\"uint48\"}],\"anonymous\":false},{\"type\":\"event\",\"name\":\"Deposit\",\"inputs\":[{\"name\":\"sender\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"owner\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"assets\",\"type\":\"uint256\",\"indexed\":false,\"internalType\":\"uint256\"},{\"name\":\"shares\",\"type\":\"uint256\",\"indexed\":false,\"internalType\":\"uint256\"}],\"anonymous\":false},{\"type\":\"event\",\"name\":\"DisablePolicy\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"indexed\":true,\"internalType\":\"uint64\"}],\"anonymous\":false},{\"type\":\"event\",\"name\":\"EIP712DomainChanged\",\"inputs\":[],\"anonymous\":false},{\"type\":\"event\",\"name\":\"Initialized\",\"inputs\":[{\"name\":\"version\",\"type\":\"uint64\",\"indexed\":false,\"internalType\":\"uint64\"}],\"anonymous\":false},{\"type\":\"event\",\"name\":\"RemovePolicyAgent\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"indexed\":true,\"internalType\":\"uint64\"},{\"name\":\"agent\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"}],\"anonymous\":false},{\"type\":\"event\",\"name\":\"SetTopUp\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"indexed\":true,\"internalType\":\"uint64\"},{\"name\":\"account\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"minBonded\",\"type\":\"uint128\",\"indexed\":false,\"internalType\":\"uint128\"},{\"name\":\"maxTopUpPerPeriod\",\"type\":\"uint128\",\"indexed\":false,\"internalType\":\"uint128\"},{\"name\":\"topUpPeriodDuration\",\"type\":\"uint32\",\"indexed\":false,\"internalType\":\"uint32\"}],\"anonymous\":false},{\"type\":\"event\",\"name\":\"Transfer\",\"inputs\":[{\"name\":\"from\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"to\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"value\",\"type\":\"uint256\",\"indexed\":false,\"internalType\":\"uint256\"}],\"anonymous\":false},{\"type\":\"event\",\"name\":\"Unbond\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"indexed\":true,\"internalType\":\"uint64\"},{\"name\":\"account\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\",\"indexed\":false,\"internalType\":\"uint256\"},{\"name\":\"expectedUnbondBlock\",\"type\":\"uint256\",\"indexed\":false,\"internalType\":\"uint256\"}],\"anonymous\":false},{\"type\":\"event\",\"name\":\"Withdraw\",\"inputs\":[{\"name\":\"sender\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"receiver\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"owner\",\"type\":\"address\",\"indexed\":true,\"internalType\":\"address\"},{\"name\":\"assets\",\"type\":\"uint256\",\"indexed\":false,\"internalType\":\"uint256\"},{\"name\":\"shares\",\"type\":\"uint256\",\"indexed\":false,\"internalType\":\"uint256\"}],\"anonymous\":false},{\"type\":\"error\",\"name\":\"AgentSelfUnbondingDisallowed\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"agent\",\"type\":\"address\",\"internalType\":\"address\"}]},{\"type\":\"error\",\"name\":\"ECDSAInvalidSignature\",\"inputs\":[]},{\"type\":\"error\",\"name\":\"ECDSAInvalidSignatureLength\",\"inputs\":[{\"name\":\"length\",\"type\":\"uint256\",\"internalType\":\"uint256\"}]},{\"type\":\"error\",\"name\":\"ECDSAInvalidSignatureS\",\"inputs\":[{\"name\":\"s\",\"type\":\"bytes32\",\"internalType\":\"bytes32\"}]},{\"type\":\"error\",\"name\":\"ERC20InsufficientAllowance\",\"inputs\":[{\"name\":\"spender\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"allowance\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"needed\",\"type\":\"uint256\",\"internalType\":\"uint256\"}]},{\"type\":\"error\",\"name\":\"ERC20InsufficientBalance\",\"inputs\":[{\"name\":\"sender\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"balance\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"needed\",\"type\":\"uint256\",\"internalType\":\"uint256\"}]},{\"type\":\"error\",\"name\":\"ERC20InvalidApprover\",\"inputs\":[{\"name\":\"approver\",\"type\":\"address\",\"internalType\":\"address\"}]},{\"type\":\"error\",\"name\":\"ERC20InvalidReceiver\",\"inputs\":[{\"name\":\"receiver\",\"type\":\"address\",\"internalType\":\"address\"}]},{\"type\":\"error\",\"name\":\"ERC20InvalidSender\",\"inputs\":[{\"name\":\"sender\",\"type\":\"address\",\"internalType\":\"address\"}]},{\"type\":\"error\",\"name\":\"ERC20InvalidSpender\",\"inputs\":[{\"name\":\"spender\",\"type\":\"address\",\"internalType\":\"address\"}]},{\"type\":\"error\",\"name\":\"ERC2612ExpiredSignature\",\"inputs\":[{\"name\":\"deadline\",\"type\":\"uint256\",\"internalType\":\"uint256\"}]},{\"type\":\"error\",\"name\":\"ERC2612InvalidSigner\",\"inputs\":[{\"name\":\"signer\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"owner\",\"type\":\"address\",\"internalType\":\"address\"}]},{\"type\":\"error\",\"name\":\"ERC4626ExceededMaxDeposit\",\"inputs\":[{\"name\":\"receiver\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"assets\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"max\",\"type\":\"uint256\",\"internalType\":\"uint256\"}]},{\"type\":\"error\",\"name\":\"ERC4626ExceededMaxMint\",\"inputs\":[{\"name\":\"receiver\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"shares\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"max\",\"type\":\"uint256\",\"internalType\":\"uint256\"}]},{\"type\":\"error\",\"name\":\"ERC4626ExceededMaxRedeem\",\"inputs\":[{\"name\":\"owner\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"shares\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"max\",\"type\":\"uint256\",\"internalType\":\"uint256\"}]},{\"type\":\"error\",\"name\":\"ERC4626ExceededMaxWithdraw\",\"inputs\":[{\"name\":\"owner\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"assets\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"max\",\"type\":\"uint256\",\"internalType\":\"uint256\"}]},{\"type\":\"error\",\"name\":\"ForwardingError\",\"inputs\":[{\"name\":\"nestedError\",\"type\":\"bytes4\",\"internalType\":\"bytes4\"}]},{\"type\":\"error\",\"name\":\"InsufficientBondedForHold\",\"inputs\":[{\"name\":\"bonded\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"holdRequested\",\"type\":\"uint256\",\"internalType\":\"uint256\"}]},{\"type\":\"error\",\"name\":\"InsufficientFunds\",\"inputs\":[{\"name\":\"bonded\",\"type\":\"uint128\",\"internalType\":\"uint128\"},{\"name\":\"unbonding\",\"type\":\"uint128\",\"internalType\":\"uint128\"},{\"name\":\"held\",\"type\":\"uint128\",\"internalType\":\"uint128\"},{\"name\":\"requested\",\"type\":\"uint128\",\"internalType\":\"uint128\"}]},{\"type\":\"error\",\"name\":\"InsufficientNativeTokenSent\",\"inputs\":[]},{\"type\":\"error\",\"name\":\"InsufficientUnbondedBalance\",\"inputs\":[{\"name\":\"available\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"requested\",\"type\":\"uint256\",\"internalType\":\"uint256\"}]},{\"type\":\"error\",\"name\":\"InsufficientUnbondingBalance\",\"inputs\":[{\"name\":\"available\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"requested\",\"type\":\"uint256\",\"internalType\":\"uint256\"}]},{\"type\":\"error\",\"name\":\"InsufficientUnheldBondedBalance\",\"inputs\":[{\"name\":\"bonded\",\"type\":\"uint128\",\"internalType\":\"uint128\"},{\"name\":\"held\",\"type\":\"uint128\",\"internalType\":\"uint128\"},{\"name\":\"requested\",\"type\":\"uint128\",\"internalType\":\"uint128\"}]},{\"type\":\"error\",\"name\":\"InvalidAccountNonce\",\"inputs\":[{\"name\":\"account\",\"type\":\"address\",\"internalType\":\"address\"},{\"name\":\"currentNonce\",\"type\":\"uint256\",\"internalType\":\"uint256\"}]},{\"type\":\"error\",\"name\":\"InvalidInitialization\",\"inputs\":[]},{\"type\":\"error\",\"name\":\"MsgDotValueExceedsMsgValueArg\",\"inputs\":[{\"name\":\"msgDotValue\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"msgValueArg\",\"type\":\"uint256\",\"internalType\":\"uint256\"}]},{\"type\":\"error\",\"name\":\"MsgGasLimitTooLow\",\"inputs\":[{\"name\":\"gasLeft\",\"type\":\"uint256\",\"internalType\":\"uint256\"},{\"name\":\"gasLimit\",\"type\":\"uint256\",\"internalType\":\"uint256\"}]},{\"type\":\"error\",\"name\":\"NotInitializing\",\"inputs\":[]},{\"type\":\"error\",\"name\":\"NotPolicyAgent\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"caller\",\"type\":\"address\",\"internalType\":\"address\"}]},{\"type\":\"error\",\"name\":\"PolicyAgentAlreadyExists\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"agent\",\"type\":\"address\",\"internalType\":\"address\"}]},{\"type\":\"error\",\"name\":\"PolicyAgentNotFound\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"},{\"name\":\"agent\",\"type\":\"address\",\"internalType\":\"address\"}]},{\"type\":\"error\",\"name\":\"PolicyInactive\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"}]},{\"type\":\"error\",\"name\":\"PolicyNeedsAtLeastOneAgent\",\"inputs\":[{\"name\":\"policyID\",\"type\":\"uint64\",\"internalType\":\"uint64\"}]},{\"type\":\"error\",\"name\":\"SafeCastOverflowedUintDowncast\",\"inputs\":[{\"name\":\"bits\",\"type\":\"uint8\",\"internalType\":\"uint8\"},{\"name\":\"value\",\"type\":\"uint256\",\"internalType\":\"uint256\"}]},{\"type\":\"error\",\"name\":\"TopUpPeriodDurationTooShort\",\"inputs\":[{\"name\":\"requestedPeriodDuration\",\"type\":\"uint32\",\"internalType\":\"uint32\"},{\"name\":\"minPeriodDuration\",\"type\":\"uint32\",\"internalType\":\"uint32\"}]},{\"type\":\"error\",\"name\":\"UnbondingPeriodIncomplete\",\"inputs\":[{\"name\":\"unbondingCompleteBlock\",\"type\":\"uint256\",\"internalType\":\"uint256\"}]}]"));}}),
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
    "PAYMASTER_URL": (()=>PAYMASTER_URL),
    "PRIVATE_KEY": (()=>PRIVATE_KEY),
    "RPC_URL": (()=>RPC_URL),
    "SHBUNDLER_URL": (()=>SHBUNDLER_URL),
    "SPONSOR_WALLET_PRIVATE_KEY": (()=>SPONSOR_WALLET_PRIVATE_KEY)
});
const RPC_URL = ("TURBOPACK compile-time value", "https://testnet-rpc.monad.xyz");
const SHBUNDLER_URL = ("TURBOPACK compile-time value", "https://monad-testnet.4337-shbundler-fra.fastlane-labs.xyz");
const PAYMASTER_URL = ("TURBOPACK compile-time value", "http://localhost:3000/api/paymaster");
const PRIVATE_KEY = ("TURBOPACK compile-time value", "0x0abba15249271743713eeebc09e1881e577db29ff959f7b441af37add7b57c41");
const ADDRESS_HUB = ("TURBOPACK compile-time value", "0xC9f0cDE8316AbC5Efc8C3f5A6b571e815C021B51");
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
    "sponsorAccount": (()=>sponsorAccount),
    "sponsorWallet": (()=>sponsorWallet),
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
const sponsorAccount = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$accounts__$5b$external$5d$__$28$viem$2f$accounts$2c$__esm_import$29$__["privateKeyToAccount"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["SPONSOR_WALLET_PRIVATE_KEY"]);
// sponsor wallet
const sponsorWallet = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__["createWalletClient"])({
    account: sponsorAccount,
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
    paymaster: paymasterClient,
    paymasterContext: {
        mode: "sponsor",
        address: sponsorAccount.address
    }
});
const smartAccountClient = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$permissionless$2f$clients__$5b$external$5d$__$28$permissionless$2f$clients$2c$__esm_import$29$__["createSmartAccountClient"])({
    account: smartAccount,
    client: publicClient,
    chain: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["CHAIN"],
    bundlerTransport: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem__$5b$external$5d$__$28$viem$2c$__esm_import$29$__["http"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["SHBUNDLER_URL"]),
    paymaster: paymasterClient,
    paymasterContext: {
        mode: "sponsor",
        address: sponsorAccount.address
    }
});
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/pages/api/paymaster.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>handler)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$account$2d$abstraction__$5b$external$5d$__$28$viem$2f$account$2d$abstraction$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/viem/account-abstraction [external] (viem/account-abstraction, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$abi$2f$paymaster$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/fastlane/abi/paymaster.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$abi$2f$addresshub$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/fastlane/abi/addresshub.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$abi$2f$shmonad$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/lib/fastlane/abi/shmonad.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fastlane/user.ts [api] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/fastlane/constants.ts [api] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$account$2d$abstraction__$5b$external$5d$__$28$viem$2f$account$2d$abstraction$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$api$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$account$2d$abstraction__$5b$external$5d$__$28$viem$2f$account$2d$abstraction$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$api$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
/**
 * Helper: Read paymaster address directly from the contract
 */ async function getPaymasterAddress() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["ADDRESS_HUB"]) {
        console.error('ADDRESS_HUB is not defined. Please check your environment variables.');
        return null;
    }
    try {
        const paymasterAddress = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["publicClient"].readContract({
            address: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["ADDRESS_HUB"],
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$abi$2f$addresshub$2e$json__$28$json$29$__["default"],
            functionName: 'paymaster4337',
            args: []
        });
        if (!paymasterAddress || paymasterAddress === '0x0000000000000000000000000000000000000000') {
            console.error('Invalid paymaster address read from contract');
            return null;
        }
        return paymasterAddress;
    } catch (error) {
        console.error('Error reading paymaster address:', error);
        return null;
    }
}
async function getBondedBalance(smartAccountAddress) {
    const paymasterAddress = await getPaymasterAddress();
    if (!paymasterAddress) {
        throw new Error("Failed to get paymaster address");
    }
    const policyId = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["publicClient"].readContract({
        address: paymasterAddress,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$abi$2f$paymaster$2e$json__$28$json$29$__["default"],
        functionName: 'POLICY_ID',
        args: []
    });
    const shMonadAddress = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["publicClient"].readContract({
        address: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["ADDRESS_HUB"],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$abi$2f$addresshub$2e$json__$28$json$29$__["default"],
        functionName: 'shMonad',
        args: []
    });
    return await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["publicClient"].readContract({
        address: shMonadAddress,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$abi$2f$shmonad$2e$json__$28$json$29$__["default"],
        functionName: 'balanceOfBonded',
        args: [
            policyId,
            smartAccountAddress
        ]
    });
}
/**
 * Helper: Generate and sign paymaster data for a user operation
 */ async function signUserOperationWithSponsor(userOperation, validUntil, validAfter) {
    try {
        // Get paymaster address
        const paymasterAddress = await getPaymasterAddress();
        if (!paymasterAddress) {
            console.error('No paymaster address available for signing');
            return null;
        }
        // Validate sponsor wallet
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sponsorWallet"] || !__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sponsorAccount"]) {
            console.error('No sponsor wallet available');
            return null;
        }
        // Get hash to sign directly from the contract
        const hash = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["publicClient"].readContract({
            address: paymasterAddress,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$abi$2f$paymaster$2e$json__$28$json$29$__["default"],
            functionName: 'getHash',
            args: [
                (0, __TURBOPACK__imported__module__$5b$externals$5d2f$viem$2f$account$2d$abstraction__$5b$external$5d$__$28$viem$2f$account$2d$abstraction$2c$__esm_import$29$__["toPackedUserOperation"])(userOperation),
                validUntil,
                validAfter
            ]
        });
        if (!hash) {
            throw new Error(`Invalid hash returned from paymaster contract ${paymasterAddress}`);
        }
        // Sign hash with sponsor wallet
        const signature = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sponsorWallet"].signMessage({
            account: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sponsorAccount"],
            message: {
                raw: hash
            }
        });
        console.info('Generated signature for user operation', {
            sender: userOperation.sender,
            signature: signature.substring(0, 10) + '...'
        });
        // Create paymaster data with the signature
        const paymasterData = paymasterMode("sponsor", validUntil, validAfter, signature, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$user$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["sponsorWallet"]);
        return {
            signature: signature,
            paymasterAddress,
            paymasterData
        };
    } catch (error) {
        console.error('Failed to sign user operation with sponsor:', error);
        return null;
    }
}
/**
 * Helper: Classify and format error for consistent response
 */ function formatPaymasterError(error, id) {
    const errorMsg = error?.message || 'Unknown error';
    if (errorMsg.includes('insufficient') && errorMsg.includes('balance')) {
        return {
            jsonrpc: '2.0',
            id,
            error: {
                code: -32010,
                message: 'Paymaster has insufficient balance',
                data: errorMsg
            }
        };
    }
    if (errorMsg.includes('policy') || errorMsg.includes('limit')) {
        return {
            jsonrpc: '2.0',
            id,
            error: {
                code: -32011,
                message: 'Policy limit exceeded',
                data: errorMsg
            }
        };
    }
    // Default error
    return {
        jsonrpc: '2.0',
        id,
        error: {
            code: -32603,
            message: 'Paymaster internal error',
            data: errorMsg
        }
    };
}
async function handler(req, res) {
    // Only accept POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed'
        });
    }
    try {
        const { jsonrpc, id, method, params } = req.body;
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
            case 'pm_getPaymasterData':
                return handleGetPaymasterData(req, res);
            case 'pm_getPaymasterStubData':
                return handleGetPaymasterStubData(req, res);
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
/**
 * Handle pm_getPaymasterData method
 */ async function handleGetPaymasterData(req, res) {
    const { id, params } = req.body;
    try {
        // Extract parameters
        const [userOperation, entryPointAddress, chainId, context] = params;
        // QUICK VALIDATION - must respond fast to avoid timeouts
        if (!userOperation || !userOperation.sender || !entryPointAddress || !chainId || !context.mode || !context.address) {
            return res.status(400).json({
                jsonrpc: '2.0',
                id,
                error: {
                    code: -32602,
                    message: 'Invalid params',
                    data: 'Required parameters: userOperation, entryPointAddress, chainId, context'
                }
            });
        }
        if (context.mode === 'sponsor') {
            return await handlePaymasterWithSponsor(userOperation, id, res, context.address);
        } else if (context.mode === 'user') {
            return await handlePaymasterWithoutSponsor(id, res, context.address);
        } else {
            return res.status(400).json({
                jsonrpc: '2.0',
                id,
                error: {
                    code: -32602,
                    message: 'Invalid context'
                }
            });
        }
    } catch (error) {
        console.error('Error in getPaymasterData:', error);
        // Format the error for consistent response
        const errorResponse = formatPaymasterError(error, id);
        return res.status(500).json(errorResponse);
    }
}
/**
 * Handle pm_getPaymasterStubData method
 */ async function handleGetPaymasterStubData(req, res) {
    const { id, params } = req.body;
    try {
        // Extract parameters
        const [userOperation, entryPointAddress, chainId, context] = params;
        // Validate required parameters
        if (!userOperation || !userOperation.sender || !entryPointAddress || !chainId || !context.mode || !context.address) {
            return res.status(400).json({
                jsonrpc: '2.0',
                id,
                error: {
                    code: -32602,
                    message: 'Invalid params',
                    data: 'Required parameters: userOperation, entryPointAddress, chainId, context'
                }
            });
        }
        if (context.mode === 'sponsor') {
            return await handlePaymasterWithSponsor(userOperation, id, res, context.address);
        } else if (context.mode === 'user') {
            return await handlePaymasterWithoutSponsor(id, res, context.address);
        } else {
            return res.status(400).json({
                jsonrpc: '2.0',
                id,
                error: {
                    code: -32602,
                    message: 'Invalid context'
                }
            });
        }
    } catch (error) {
        console.error('Error in getPaymasterStubData:', error);
        // Format the error for consistent response
        const errorResponse = formatPaymasterError(error, id);
        return res.status(500).json(errorResponse);
    }
}
async function handlePaymasterWithSponsor(userOperation, id, res, payorAddress) {
    const bondedBalance = await getBondedBalance(payorAddress);
    if (bondedBalance < __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["MIN_BONDED_BALANCE"]) {
        return res.status(400).json({
            jsonrpc: '2.0',
            id,
            error: {
                code: -32602,
                message: 'Insufficient bonded balance. Visit shmonad.xyz to bond more MON.'
            }
        });
    }
    // Set validity window (valid for 1 hour)
    const currentTime = BigInt(Math.floor(Date.now() / 1000));
    const validUntil = currentTime + BigInt(3600);
    const validAfter = BigInt(0);
    // Generate and sign the paymaster data
    const signResult = await signUserOperationWithSponsor(userOperation, validUntil, validAfter);
    if (!signResult) {
        return res.status(500).json({
            jsonrpc: '2.0',
            id,
            error: {
                code: -32603,
                message: 'Failed to sign user operation',
                data: 'Error generating paymaster signature'
            }
        });
    }
    return res.status(200).json({
        jsonrpc: '2.0',
        id,
        result: {
            paymaster: signResult.paymasterAddress,
            paymasterData: signResult.paymasterData,
            paymasterVerificationGasLimit: '75000',
            paymasterPostOpGasLimit: '120000',
            sponsor: {
                name: 'Fastlane Paymaster'
            },
            isFinal: true // This is the final data with real signature
        }
    });
}
async function handlePaymasterWithoutSponsor(id, res, payorAddress) {
    const bondedBalance = await getBondedBalance(payorAddress);
    if (bondedBalance < __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$fastlane$2f$constants$2e$ts__$5b$api$5d$__$28$ecmascript$29$__["MIN_BONDED_BALANCE"]) {
        return res.status(400).json({
            jsonrpc: '2.0',
            id,
            error: {
                code: -32602,
                message: 'Insufficient bonded balance. Visit shmonad.xyz to bond more MON.'
            }
        });
    }
    return res.status(200).json({
        jsonrpc: '2.0',
        id,
        result: {
            paymaster: await getPaymasterAddress(),
            paymasterData: paymasterMode('user'),
            paymasterVerificationGasLimit: '75000',
            paymasterPostOpGasLimit: '120000',
            sponsor: {
                name: 'Fastlane Paymaster'
            },
            isFinal: true // This is the final data with real signature
        }
    });
}
function paymasterMode(mode, validUntil, validAfter, sponsorSignature, userClient) {
    if (mode === "user") {
        return "0x00";
    } else {
        if (userClient === undefined) {
            throw new Error("userClient is undefined");
        }
        if (validUntil === undefined) {
            throw new Error("validUntil is undefined");
        }
        if (validAfter === undefined) {
            throw new Error("validAfter is undefined");
        }
        if (sponsorSignature === undefined) {
            throw new Error("sponsorSignature is undefined");
        }
        const accountAddress = userClient.account?.address;
        if (!accountAddress) {
            throw new Error("userClient.account is undefined");
        }
        return `0x01${accountAddress.slice(2)}${validUntil.toString(16).padStart(12, "0")}${validAfter.toString(16).padStart(12, "0")}${sponsorSignature.slice(2)}`;
    }
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

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__ff464532._.js.map