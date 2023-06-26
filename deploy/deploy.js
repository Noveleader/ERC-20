const { network, ethers } = require("hardhat");
const {
  developmentChains,
  networkConfig,
  initialSupply,
} = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const args = [initialSupply];
  const ourToken = await deploy("OurToken", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmation: network.config.blockConfirmations || 1,
  });

  log(`ourToken deployed at ${ourToken.address}`);

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    log("Verifying...");
    await verify(ourToken.address, args);
  }
  log("------------------------------------------");
};

module.exports.tags = ["all", "token"];
