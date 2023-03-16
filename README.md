# Pegasys-One Periphery

<div align="center">
    <img width="400px" height="auto" 
    src="image/logo.svg">
  </a>
</div>

## Set up Environment

install node.js(12.X) and npm

## Compile from source
##### 1. install denpendencies
install the package listed in the `package.json` via yarn

##### 2. compile
compile via following command

```
$ npx hardhat compile
```

##### 3. compiled json file
after compile, the abi and code of the contracts can be found in files `artifacts/*.sol/*.json`

## Run test cases

##### 1. compile one-core
before running test case, you should compile [one-core](https://github.com/pegasys-fi/one-core) first.
you can refer to the README.md in the link to compile the core, suppose the project dir of one-core 
is `${ONE_CORE_DIR}`

##### 2. copy compiled json from one-core to one-periphery
after compile the one-core project, copy dirs `${ONE_CORE_DIR}/artifacts/*.sol` to 
`${ONE_PERIPHERY}/test/core/`
copy compiled json file of weth into `${ONE_PERIPHERY}/test/core/` and name it as `WETH9.json`
because when we running test cases, we will find abi and code of one-core contracts and weth contract under `${ONE_PERIPHERY}/test/core/`

##### 3. run test case
run test cases via following command
```
$ npx hardhat test
```
if you want to only run a single test case, simply run
```
$ npx hardhat test test/${FILE_OF_TEST_CASE}.json
```

## Example of Deploy and interact

##### 1. Example of Deploy and interact
we provide example scripts for deploy contracts, add pool, add liquidity, view liquidity, swap, prequery price.
in the following, we take the example of deploying and interface in eth-network network, which has been set in `${ONE_PERIPHERY}/hardhat.config.js`, if you want to deploy and interface in other eth-networks, you could just configure the network in the `hardhat.config.js` and specified it via `--network` when runing coresponding scripts

##### 2. prepare work
establish a file called `.settings.js` under dir `${ONE_PERIPHERY}`
```
$ cp .settings.js.example .settings.js
```
following 3 field must be filled
change the field of sk to a private key of your sign account of the network you want to deploy
change the field of weth to address of contract weth of the network
change the field of izumiswapFactory to address of the IzumiswapFactory contract in the network, the deployment of IzumiswapFactory can be refered in [one-core](https://github.com/pegasys-fi/one-core) 

the following field in the .settings.js can be empty string currently

##### 3. Example to deploy "NonfungibleLiquidityManager" and "Swap"

you can refer to the example script `scripts/deployPeriphery.js`.

```
$ npx hardhat run scripts/deployPeriphery.js --network eth-networks
```

after running, the deployed addresses of `NonfungibleLiquidityManager` and `Swap` can be viewed on the screen.
and you should copy them to the fields `nflmAddr` and `swapAddr` in the `.settings.js` for  ineractions of add pool, add liquidity and swap

##### 4. Example to deploy "Quoter" contract.
```
$ npx hardhat run scripts/deployQuoter.js --network network
```
after running, the deployed addresses of `Quoter` can be viewed on the screen.
and you should copy them to the field `quoterAddr` in the `.settings.js` for  ineractions of pre query price

##### 5. Example to "add pool", "add Liquidity", "swap" and "prequery price"
`scripts/addPool` will add a pool of `(BIT/USDC/3000)`
before runing, make sure that `nflmAddr`, `swapAddr`, `BIT`, `USDC` in the `.settings.js` is correct, `BIT` and `USDC` are 2 token address used in the script, if you donot have such tokens in your eth-network, you can deploy them using `contracts/test/Token.sol`
running addPool
```
$ npx hardhat run scripts/addPool.js --network eth-network
```

```
$ npx hardhat run scripts/getPool --network eth-network
```
you can view the pool address of `(BIT/USDC/3000)`

add and view liquidity
```
$ npx hardhat run scripts/addPool.js --network eth-network
$ npx hardhat run scripts/viewLiquidity.js --network eth-network
```

call swapX2Y(...) of Swap contract
```
$ npx hardhat run scripts/swapX2Y.js -- network eth-network
```

call swapY2X(...)
```
$ npx hardhat run scripts/swapY2X.js -- network eth-network
```

prequery price
```
$ node scripts/getSwapPrice.js
```
