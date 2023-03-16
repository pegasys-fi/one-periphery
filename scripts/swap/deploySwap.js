const { ethers } = require("hardhat");
const deployed = require('../deployed.js');

/*

example: 

HARDHAT_NETWORK='izumiTest' node scripts/swap/deploySwap.js

*/

const net = process.env.HARDHAT_NETWORK
async function main() {

  const factory = deployed[net].iZiSwapFactory;

  // deploy swap
  const Swap = await ethers.getContractFactory("Swap");
  const weth = deployed[net].wrapChainToken;
  const swap = await Swap.deploy(factory, weth);
  await swap.deployed();
  console.log("Swap: ", swap.address);
}

main().then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })