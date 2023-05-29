# Crust Contracts
Contracts for Crust.

## Install Dependencies
If npx is not installed yet:
`npm install -g npx`

Install packages:
`npm i`

## Compile Contracts
`npx hardhat compile`

## Run Tests
`npx hardhat test`

*** npx hardhat run --network mumbai scripts/gmx/deployGMX.js
[V] GMX: 0xd7F5e9DAd9C544802eF5ceC23f3585AA05947C8E
*** npx hardhat verify --network mumbai 0xd7F5e9DAd9C544802eF5ceC23f3585AA05947C8E
-------------------------------------------------------------------------------
*** npx hardhat run --network mumbai scripts/core/deployVault.js
[V] Vault: 0xfF1b9b8e96b14cf95F62257589aa7D0A61Fa8f8B
[ ] USDG: 0xCbDc6a990522f270F2C52C93c83199756B351f57 "0xfF1b9b8e96b14cf95F62257589aa7D0A61Fa8f8B
[ ] Router: 0xEd56C7DC79D0895Ab7bCEb4f3Ae99a95fC95f2f5 "0xfF1b9b8e96b14cf95F62257589aa7D0A61Fa8f8B" "0xCbDc6a990522f270F2C52C93c83199756B351f57" "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889"
[V] VaultPriceFeed: 0x12085BF59144e9AE36449d1FB79d73f20B7a290B
[ ] GLP: 0xC16c789701fB883b929be9F0D44C5C013a818cC7
[ ] ShortsTracker: 0x0D9265fcA8Ab7267cC880fcd98B69f6eeeAA79b3 "0xfF1b9b8e96b14cf95F62257589aa7D0A61Fa8f8B"
[ ] GlpManager: 0x91A957ea8fea0d3999753990Ac713768Fc1f6d80 "0xfF1b9b8e96b14cf95F62257589aa7D0A61Fa8f8B" "0xCbDc6a990522f270F2C52C93c83199756B351f57" "0xC16c789701fB883b929be9F0D44C5C013a818cC7" "0x0D9265fcA8Ab7267cC880fcd98B69f6eeeAA79b3" "900"
[ ] VaultErrorController: 0xaD12D30012d2347fE106a9A0f7Aaf213890657aB
[ ] VaultUtils: 0x7bE05c136F36EEC7D1D4197b72277bcDB4e2A5fb "0xfF1b9b8e96b14cf95F62257589aa7D0A61Fa8f8B"
-------------------------------------------------------------------------------
*** npx hardhat run --network mumbai scripts/peripherals/deployVaultReader.js
[V] VaultReader: 0x2D50b49295b00Ad7d4f7776a0cfd7bAF30D44660
-------------------------------------------------------------------------------
*** npx hardhat run --network mumbai scripts/peripherals/deployReader.js
[V] Reader: 0xA46890Ab2F0EF5f747820217589B966A5aA9bAc0
-------------------------------------------------------------------------------
*** npx hardhat run --network mumbai scripts/peripherals/deployRewardReader.js
[ ] RewardReader: 0xbAE1196Fe771aC36F76ACBc12c0003d060d4Bd52
-------------------------------------------------------------------------------
*** npx hardhat run --network mumbai scripts/gmx/deployTokens.js
[V] esGMX: 0x0954cb8c3067438Ae89699709B9C9F335e291C28 "esGMX IOU" "esGMX:IOU" "0"
-------------------------------------------------------------------------------
Check Contract addresses    6.8
*** npx hardhat run --network mumbai scripts/staking/deployRewardRouterV2.js
[ ] bnGMX 0x97017e2441725f1cBae9317bbcf22bA8d94d6AAF "Bonus GMX" "bnGMX" "0"
[ ] sGMX RewardTracker 0x7896102e2ddFE372f8Dc5966C7637C91BFEB98e8 "Staked GMX" "sGMX"
[V] sGMX RewardDistributor 0xC0d218eAF562809a6131E15bE1676a3767204541 "0x0954cb8c3067438Ae89699709B9C9F335e291C28" "0x7896102e2ddFE372f8Dc5966C7637C91BFEB98e8"
[ ] sbGMX RewardTracker 0x74529B6c90b50Fcbd4bB4140129C5A4FeD20a888 "Staked + Bonus GMX" "sbGMX"
[ ] sbGMX BonusDistributor 0x12E89167f1117d42Cb78c08E4182764f45C29645 "0x97017e2441725f1cBae9317bbcf22bA8d94d6AAF" "0x74529B6c90b50Fcbd4bB4140129C5A4FeD20a888"
[ ] sbfGMX RewardTracker 0x78d0aeA2fEfd2d406821b525A0c16ed51965EC0F "Staked + Bonus + Fee GMX" "sbfGMX"
[ ] sbfGMX RewardDistributor 0x5BC0a31d11dA81063a9fe43d4048279c11082373 "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889" "0x78d0aeA2fEfd2d406821b525A0c16ed51965EC0F"
[ ] fGLP RewardTracker 0x3B0028ba191b80880a7C6010973e4DE439AaD03b "Fee GLP" "fGLP"
[ ] fGLP RewardDistributor 0x233DB8084e8236A21F0dA7ad355CF7f3926Aad16 "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889" "0x3B0028ba191b80880a7C6010973e4DE439AaD03b"
[ ] fsGLP RewardTracker 0xDEd0DA75B65Aa0170cC9310625AFE2b4215e9A04 "Fee + Staked GLP" "fsGLP"
[ ] fsGLP RewardDistributor 0xBd68857023e87490E834E1eC05e1390e0c4BE7ad "0x0954cb8c3067438Ae89699709B9C9F335e291C28" "0xDEd0DA75B65Aa0170cC9310625AFE2b4215e9A04"
[ ] vGMX Vester 0x2d3b66B20E717E0fDEB3D8B40f90a291Aa9cd32c "Vested GMX" "vGMX" "31536000" "0x0954cb8c3067438Ae89699709B9C9F335e291C28" "0x78d0aeA2fEfd2d406821b525A0c16ed51965EC0F" "0xd7F5e9DAd9C544802eF5ceC23f3585AA05947C8E" "0x7896102e2ddFE372f8Dc5966C7637C91BFEB98e8"
[ ] vGLP Vester 0xB073e3c92bEC4B048a4814d44a6A92a56Fc116fd "Vested GLP" "vGLP" "31536000" "0x0954cb8c3067438Ae89699709B9C9F335e291C28" "0xDEd0DA75B65Aa0170cC9310625AFE2b4215e9A04" "0xd7F5e9DAd9C544802eF5ceC23f3585AA05947C8E" "0xDEd0DA75B65Aa0170cC9310625AFE2b4215e9A04"
[ ] RewardRouterV2 0xfb1f2B71E6778e1a5555dcA344A216774EB02a19
-------------------------------------------------------------------------------
Check Contract addresses
*** npx hardhat run --network mumbai scripts/core/deployOrderBook.js
[ ] OrderBook 0xf2EA7176F2eC920C53DdD6Eb758eAC3B3d9cD85B
-------------------------------------------------------------------------------
*** npx hardhat run --network mumbai scripts/peripherals/deployOrderBookReader.js
[ ] OrderBookReader 0xeAD1900d25A0Af81284daa6376767573998EEE4b
-------------------------------------------------------------------------------
*** npx hardhat run --network mumbai scripts/core/deployReferralStorage.js
[ ] ReferralStorage 0x83060Cf9dA781CA28FB0B85E1217f3A5b0dEcf81
================  Need to set variables with positionRouter & positionManager
-------------------------------------------------------------------------------
*** npx hardhat run --network mumbai scripts/core/deployReferralReader.js
[ ] ReferralReader 0xaE4202bc65a83fC8E504Ad6A6E13c2EDcFfD3E63
-------------------------------------------------------------------------------
*** npx hardhat run --network mumbai scripts/access/deployTokenManager.js
[ ] TokenManager 0xb13DAE716771285317dAd37DCD22DFa7bC25808E "4"

-------------------------------------------------------------------------------
*** npx hardhat run --network mumbai scripts/peripherals/deployPriceFeedTimelock.js
[ ] PriceFeedTimelock: 0x03Ba268C2B7DbaE185eCe7802e668b85D8E16F7F "0x2cA62Cf3F7D24A31D7125962b55809A61e05560a" "86400" "0xb13DAE716771285317dAd37DCD22DFa7bC25808E"

================  call setTier of RefferralStorage
-------------------------------------------------------------------------------
*** npx hardhat run --network mumbai scripts/peripherals/deployTimelock.js
[ ] Timelock 0x6C46725b86E14777ab96640c6f2185b017d1a337 "0x2cA62Cf3F7D24A31D7125962b55809A61e05560a" "86400" "0xb13DAE716771285317dAd37DCD22DFa7bC25808E" "0xb13DAE716771285317dAd37DCD22DFa7bC25808E" "0x91A957ea8fea0d3999753990Ac713768Fc1f6d80" "0xfb1f2B71E6778e1a5555dcA344A216774EB02a19" "13250000000000000000000000" "10" "500"
[-] vault.gov = TimeLock  // done
================  Need to setup things again after positionManager and positionRouter
-------------------------------------------------------------------------------
*** npx hardhat run --network mumbai scripts/core/deployPositionRouter.js
[V] PositionUtils: 0x646a062D5740c886Fcd4bf808851A6cc85116411
[V] PositionRouter 0xe0FFa48C679D5608D9e94af6689Ec4b569206564 "0xfF1b9b8e96b14cf95F62257589aa7D0A61Fa8f8B" "0xEd56C7DC79D0895Ab7bCEb4f3Ae99a95fC95f2f5" "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889" "0x0D9265fcA8Ab7267cC880fcd98B69f6eeeAA79b3" "30" "20000000000000000"
================ shortsTrackerTimelock.signal
-------------------------------------------------------------------------------
*** npx hardhat run --network mumbai scripts/core/deployPositionManager.js
[V] PositionManager 0x2393377D751d1EACBD09f11C201aE5cbD0D99807 "0xfF1b9b8e96b14cf95F62257589aa7D0A61Fa8f8B" "0xEd56C7DC79D0895Ab7bCEb4f3Ae99a95fC95f2f5" "0x0D9265fcA8Ab7267cC880fcd98B69f6eeeAA79b3" "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889" "30" "0xf2EA7176F2eC920C53DdD6Eb758eAC3B3d9cD85B"

-------------------------------------------------------------------------------
*** npx hardhat run --network mumbai scripts/core/deployPriceFeed.js
[ ] FastPriceEvents 0xAe650EC0abB81Ce41904E752Fe5c1b2974eB3736
[ ] FastPriceFeed:SecondaryPriceFeed 0x22E38bE1016378CDcb0dEad91dc37C84C26152D6 "300" "3600" "1" "250" "0xAe650EC0abB81Ce41904E752Fe5c1b2974eB3736" "0x5F799f365Fa8A2B60ac0429C48B153cA5a6f0Cf8"

/////////// Mumbai / VaultPriceFeed.setTokenConfig
- BTC/USD
0	_token	address	0x0d787a4a1548f673ed375445535a6c7A1EE56180
1	_priceFeed	address	0x007A22900a3B98143368Bd5906f8E17e9867581b
2	_priceDecimals	uint256	8
3	_isStrictStable	bool false

- DAI/USD
0	_token	address	0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F
1	_priceFeed	address	0x0FCAa9c899EC5A91eBc3D5Dd869De833b06fB046
2	_priceDecimals	uint256	8
3	_isStrictStable	bool true

- ETH/USD
0	_token	address	0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa
1	_priceFeed	address	0x0715A7794a1dc8e42615F059dD6e406A6594651A
2	_priceDecimals	uint256	8
3	_isStrictStable	bool false

/////////// Mumbai / Vault.setTokenConfig
- BTC/USD
0	_token	address	0x0d787a4a1548f673ed375445535a6c7A1EE56180
1	_tokenDecimals	uint256	18
2	_tokenWeight	uint256	25000
3	_minProfitBps	uint256	150
4	_maxUsdgAmount	uint256	50000000000000000000000000
5	_isStable	bool	false
6	_isShortable	bool	true

- DAI/USD
0	_token	address	0x001B3B4d0F3714Ca98ba10F6042DaEbF0B1B7b6F
1	_tokenDecimals	uint256	18
2	_tokenWeight	uint256	20000
3	_minProfitBps	uint256	150
4	_maxUsdgAmount	uint256	50000000000000000000000000
5	_isStable	bool	true
6	_isShortable	bool	false

- ETH/USD
0	_token	address	0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa
1	_tokenDecimals	uint256	18
2	_tokenWeight	uint256	15000
3	_minProfitBps	uint256	150
4	_maxUsdgAmount	uint256	30000000000000000000000000
5	_isStable	bool	false
6	_isShortable	bool	true






//Set Tokens Per Interval for RewardDistributor
//
Mint EsMMS token to StakedGmxDistributor

deploy timelock

//
npx hardhat run --network mumbai scripts/peripherals/deployBatchSender.js


//deploy referral subgraph
https://thegraph.com/docs/en/deploying/deploying-a-subgraph-to-hosted/

PositionRouter should be vault timelock's contract handler
PositionRouter should be referralStorage's contract handler.

reward distributers should have esMMS as rewardtoken
src\pages\ClaimEsGmx\ClaimEsGmx.js has receiver addresses
//complex contract verify
npx hardhat verify --constructor-args arguments.js DEPLOYED_CONTRACT_ADDRESS
npx hardhat verify --network mumbai --constructor-args verify/MLP.js 0x9d530DdC986bd20beC3E70dC5382dF2e0a1bE7a6
npx hardhat verify --network mumbai --constructor-args verify/MintableBaseToken.js 0x6e29e6db1Ea778fCC17BA575C8fB22A4dfeAE08f
npx hardhat verify --network mumbai --constructor-args verify/RewardTracker.js 0x8b498C45465f4a7e9CEc0D12Aa6a695A6b563A34
npx hardhat verify --network mumbai --constructor-args verify/PositionManager.js 0xda18A5372fF256314fd3654FA074B4d949aBE823
npx hardhat verify --network mumbai --constructor-args verify/PositionRouter.js 0xFe42F6CccD52542DFbB785dFa014Cb8ce70Bcf57
npx hardhat verify --network mumbai 0xD3D403595ccBB99537Af13099aC89A102AAd70D1 "0x9e34FDE4Bf55061a1805C11654C21acCd34d511E" "0x6A154CE91003Cf4b8787280fd7C96D9BFb3f88C3" "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7" "0x2ff5dCfdB0C6b2a90480281c8dF77d0bc0884A49" "30" "20000000000000000"
npx hardhat verify --network mumbai --constructor-args verify/PriceTimeLock.js 0x379aa69316Ab12A2ACD59134fF683eC068C0acFc
npx hardhat verify --network mumbai --constructor-args verify/FastPriceFeed.js 0x68A644fFcC1BBEF5C8437c3FE3468424b959B684
