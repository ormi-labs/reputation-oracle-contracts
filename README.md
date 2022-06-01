[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Build pass](https://github.com/AAVE/protocol-v2/actions/workflows/node.js.yml/badge.svg)](https://github.com/aave/protocol-v2/actions/workflows/node.js.yml)
```                                                                                                                                             
     OOOOOOOOO     RRRRRRRRRRRRRRRRR   MMMMMMMM               MMMMMMMMIIIIIIIIII
   OO:::::::::OO   R::::::::::::::::R  M:::::::M             M:::::::MI::::::::I
 OO:::::::::::::OO R::::::RRRRRR:::::R M::::::::M           M::::::::MI::::::::I
O:::::::OOO:::::::ORR:::::R     R:::::RM:::::::::M         M:::::::::MII::::::II
O::::::O   O::::::O  R::::R     R:::::RM::::::::::M       M::::::::::M  I::::I  
O:::::O     O:::::O  R::::R     R:::::RM:::::::::::M     M:::::::::::M  I::::I  
O:::::O     O:::::O  R::::RRRRRR:::::R M:::::::M::::M   M::::M:::::::M  I::::I  
O:::::O     O:::::O  R:::::::::::::RR  M::::::M M::::M M::::M M::::::M  I::::I  
O:::::O     O:::::O  R::::RRRRRR:::::R M::::::M  M::::M::::M  M::::::M  I::::I  
O:::::O     O:::::O  R::::R     R:::::RM::::::M   M:::::::M   M::::::M  I::::I  
O:::::O     O:::::O  R::::R     R:::::RM::::::M    M:::::M    M::::::M  I::::I  
O::::::O   O::::::O  R::::R     R:::::RM::::::M     MMMMM     M::::::M  I::::I  
O:::::::OOO:::::::ORR:::::R     R:::::RM::::::M               M::::::MII::::::II
 OO:::::::::::::OO R::::::R     R:::::RM::::::M               M::::::MI::::::::I
   OO:::::::::OO   R::::::R     R:::::RM::::::M               M::::::MI::::::::I
     OOOOOOOOO     RRRRRRRR     RRRRRRRMMMMMMMM               MMMMMMMMIIIIIIIIII
                                                                                                                                
```

# Credit: Chainlink Hardhat Box
The Ormi reputation oracle is built on top of Chainlink.

 Implementation of the following Chainlink feature using the [Hardhat](https://hardhat.org/) development environment:
 - [Request & Receive data](https://docs.chain.link/docs/request-and-receive-data)


 ## Requirements

- [NPM](https://www.npmjs.com/) or [YARN](https://yarnpkg.com/)

## Compile
```
TS_NODE_TRANSPILE_ONLY=1 yarn hardhat compile.
Note: Without TS_NODE_TRANSPILE_ONLY=1 flag, compiling may result in error that generated 'typechain' artifact/folder does not exist.
```

### Kovan Ethereum Testnet
Set your `KOVAN_RPC_URL` [environment variable.](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html). You can get one for free at [Infura's site.](https://infura.io/) You'll also need to set the variable `PRIVATE_KEY`, which is your private key from your wallet, ie MetaMask. This is needed for deploying contracts to public networks. You can optionally set your `MNEMONIC` environment variable instead with some changes to the `hardhat.config.js`.


### Setting Environment Variables
You can set these in your `.env` file if you're unfamiliar with how setting environment variables work. Check out our [.env example](https://github.com/smartcontractkit/hardhat-starter-kit/blob/main/.env.example). If you wish to use this method to set these variables, update the values in the .env.example file, and then rename it to '.env'

![WARNING](https://via.placeholder.com/15/f03c15/000000?text=+) **WARNING** ![WARNING](https://via.placeholder.com/15/f03c15/000000?text=+)

Don't commit and push any changes to .env files that may contain sensitive information, such as a private key! If this information reaches a public GitHub repository, someone can use it to check if you have any Mainnet funds in that wallet address, and steal them!

`.env` example:
```
KOVAN_RPC_URL='www.infura.io/asdfadsfafdadf'
PRIVATE_KEY='abcdef'
MAINNET_RPC_URL="https://eth-mainnet.alchemyapi.io/v2/your-api-key"
POLYGON_MAINNET_RPC_URL='https://rpc-mainnet.maticvigil.com'
ETHERSCAN_API_KEY="abcdef"
```

If you plan on deploying to a local [Hardhat network](https://hardhat.org/hardhat-network/) that's a fork of the Ethereum mainnet instead of a public test network like Kovan, you'll also need to set your `MAINNET_RPC_URL` [environment variable.](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html) and uncomment the `forking` section in `hardhat.config.js`. You can get one for free at [Alchemy's site.](https://alchemyapi.io/).

You can also use a `PRIVATE_KEY` instead of a `MNEMONIC` environment variable by uncommenting the section in the `hardhat.config.js`, and commenting out the `MNEMONIC` line.

Then you can install all the dependencies

```bash
npm install
```

Or

```bash
yarn
```


## Auto-Funding

This Starter Kit is configured by default to attempt to auto-fund any newly deployed contract that uses Any-API or Chainlink VRF, to save having to manually fund them after each deployment. The amount in LINK to send as part of this process can be modified in the [Starter Kit Config](https://github.com/smartcontractkit/chainlink-hardhat-box/blob/main/helper-hardhat-config.js), and are configurable per network.

| Parameter  | Description                                       | Default Value |
| ---------- | :------------------------------------------------ | :------------ |
| fundAmount | Amount of LINK to transfer when funding contracts | 1 LINK        |

If you wish to deploy the smart contracts without performing the auto-funding, run the following command when doing your deployment:

```bash
yarn hardhat deploy --tags main
```


## Deploy

Deployment scripts are in the [deploy](https://github.com/smartcontractkit/hardhat-starter-kit/tree/main/deploy) directory. If required, edit the desired environment specific variables or constructor parameters in each script, then run the hardhat deployment plugin as follows. If no network is specified, it will default to the Kovan network.

This will deploy to a local hardhat network

```bash
yarn hardhat deploy
```

To deploy to testnet:
```bash
yarn hardhat deploy --network kovan
```

## Verify
To verify deployed contracts API Consumer & Reputation Accessor:

```
# Verify Deployed API Consumer Contract
yarn hardhat verify-api-consumer-contract --network <NETWORK> --contract <DEPLOYED API CONSUMER>

# Verify Deployed Reputation Accessor Contract. Note: ReputationAccessor contract has # no complex parameter so we can simply use hardhat verify.
yarn hardhat verify --network <NETWORK> <DEPLOYED REPUTATION ACCESSOR>
```
## Test
Tests are located in the [test](https://github.com/smartcontractkit/hardhat-starter-kit/tree/main/test) directory, and are split between unit tests and integration tests. Unit tests should only be run on local environments, and integration tests should only run on live environments.

To run unit tests:

```bash
yarn test
```

To run integration tests:

```bash
yarn test-integration
```

## Run

The deployment output will give you the contract addresses as they are deployed. You can then use these contract addresses in conjunction with Hardhat tasks to perform operations on each contract

### Request & Receive Data
The APIConsumer contract has two tasks, one to request external data based on a set of parameters, and one to check to see what the result of the data request is. This contract needs to be funded with link first:

```bash
yarn hardhat fund-link --contract insert-contract-address-here --network network
```

Once it's funded, you can request external data by passing in a number of parameters to the request-data task. The contract parameter is mandatory, the rest are optional

```bash
# Command
yarn hardhat request-data --contract <CONTRACT ADDRESS> --query <QUERY DATA> --path <PATH> --network <NETWORK> 

# Example
yarn hardhat request-data --contract 0xB24e0cebBe0fCa1571419bb9B020B5DfE429571E --query 'data?id=0x2\&type=ETH' --path 'reputation' --network kovan
```

Once you have successfully made a request for external data, you can see the result via the read-data task
```bash
yarn hardhat read-data --contract <CONTRACT ADDRESS> --network <NETWORK>
```

## Verify on Etherscan

You'll need an `ETHERSCAN_API_KEY` environment variable. You can get one from the [Etherscan API site.](https://etherscan.io/apis)

```
# 
yarn hardhat verify --network <NETWORK> <CONTRACT_ADDRESS> <CONSTRUCTOR_PARAMETERS>
```
example:

```
yarn hardhat verify --network kovan 0x9279791897f112a41FfDa267ff7DbBC46b96c296 "0x9326BFA02ADD2366b30bacB125260Af641031331"
```


### Linting

```
yarn lint:fix
```
