require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
const MUMBAI_URL = process.env.MUMBAI_RPC_URL;
const MUMBAI_PRIVATE_KEY = process.env.MUMBAI_PRIVATE_KEY;
const POLYSCAN_API_KEY = process.env.POLYSCAN_API_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      blockconfirmations: 1,
    },
    mumbai: {
      chainId: 80001,
      blockconfirmations: 1,
      url: MUMBAI_URL,
      accounts: [MUMBAI_PRIVATE_KEY],
    },
  },
  solidity: "0.8.18",
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYSCAN_API_KEY,
    },
  },
};
