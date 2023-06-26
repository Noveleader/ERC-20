//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OurToken is ERC20 {
    // initial supply is 50 <- 50 wei
    // initial supply 50e18 <- 50 ether
    constructor(uint256 initialSupply) ERC20("OurToken", "OT") {
        _mint(msg.sender, initialSupply); //whoever deploys it first gets all the tokens
    }
}
