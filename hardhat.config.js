require("@nomiclabs/hardhat-waffle");
require('hardhat-contract-sizer');
require('@nomiclabs/hardhat-etherscan');
require("@cronos-labs/hardhat-cronoscan");

const secret = require('./.secret.js');
const sk = secret.sk;
const apiKey = secret.apiKey;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 100
          },
          outputSelection: {
            "*": {
              "*": [
                "abi",
                "evm.bytecode",
                "evm.deployedBytecode",
                "evm.methodIdentifiers",
                "metadata"
              ],
            }
          }
        }
      },
    ]
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    rollux: {
      url: 'https://rpc-tanenbaum.rollux.com/',
      gasPrice: "auto",
      hardfork: "london",
      chainId: 57000,
      accounts: [sk]
    }
  },
  etherscan: {
    apiKey: apiKey,
  }
};
