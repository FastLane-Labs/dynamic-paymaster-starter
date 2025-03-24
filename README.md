This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Setup

1. Clone this repository and open it in your terminal.

```sh
git clone https://github.com/FastLane-Labs/dynamic-paymaster-starter.git
```

2. Install the necessary dependencies with `npm`.

```sh
npm i
```

3. Initialize your environment variables by copying the `.env.example` file to an `.env.local` file.

```sh
# In your terminal, create .env.local from .env.example
cp .env.example .env.local

# Add your environement variables to .env.local
NEXT_PUBLIC_RPC_URL=<RPC_URL>
NEXT_PUBLIC_SHBUNDLER_URL=https://monad-testnet.4337-shbundler-fra.fastlane-labs.xyz
NEXT_PUBLIC_ADDRESS_HUB=0xC9f0cDE8316AbC5Efc8C3f5A6b571e815C021B51
NEXT_PUBLIC_SPONSOR_WALLET_PRIVATE_KEY=<SPONSOR_PRIVATE_KEY>
NEXT_PUBLIC_PRIVATE_KEY=<EOA_PRIVATE_KEY>
NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID=<DYNAMIC_ENVIRONMENT_ID>
NEXT_PUBLIC_PAYMASTER_URL=https://monad-testnet.4337-shbundler-fra.fastlane-labs.xyz
```
4. Either the sponsor or user MUST stake and bond MON to the paymaster. You can do this on shmonad.xyz.

## Example
When using sendUserOperation, you MUST set the paymasterConfig:
1. Sponsor pays for gas
```typescript
paymasterContext: {
  mode: "sponsor",
  address: sponsorAccount?.address
}
```
2. User pays for gas
```typescript
paymasterContext: {
  mode: "user",
  address: smartWalletClient.account.address
}
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
