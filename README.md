# MemeVault

## Technology Stack & Tools

- **Solidity**: Writing and testing smart contracts.
- **JavaScript**: Developing with **Next.js** and implementing tests.
- **Hardhat**: A robust Ethereum development framework.
- **Ethers.js**: For seamless blockchain interactions.
- **Next.js**: A powerful frontend framework.

---

## Requirements for Initial Setup

- Install [Node.js](https://nodejs.org/en/): We recommend using an LTS (long-term-support) version. For managing Node.js versions efficiently, consider installing Node.js via [NVM](https://github.com/nvm-sh/nvm#intro).

---

## Setting Up MemeVault

### 1. Clone or Download the Repository
   ```bash
   git clone https://github.com/your-username/memevault.git
   cd memevault


### 2. Install Dependencies:
`$ npm install`

### 3. Run tests
`$ npx hardhat test`

### 4. Start Hardhat node
`$ npx hardhat node`

### 5. Run deployment script
In a separate terminal execute:

`$ npx hardhat ignition deploy ignition/modules/Factory.js --network localhost`

If you have previously deployed you may want to append `--reset` at the end:

`$ npx hardhat ignition deploy ignition/modules/Factory.js --network localhost --reset`

### 6. Start frontend
`$ npm run dev`
