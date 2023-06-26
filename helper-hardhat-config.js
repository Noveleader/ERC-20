const { ethers } = require("hardhat");
const networkConfig = {
  31337: {
    name: "hardhat",
  },
  80001: {
    name: "mumbai",
  },
};
const initialSupply = "1000000000";
const developmentChains = ["hardhat", "localhost"];
module.exports = {
  networkConfig,
  developmentChains,
  initialSupply,
};
