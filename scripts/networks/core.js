const deployTokenManager = require("../access/deployTokenManager");
const deployOrderBook = require("../core/deployOrderBook");
const deployPositionManager = require("../core/deployPositionManager");
const deployPositionRouter = require("../core/deployPositionRouter");
const deployReferralReader = require("../core/deployReferralReader");
const deployReferralStorage = require("../core/deployReferralStorage");
const deployShortsTracker = require("../core/deployShortsTracker");
const deployVault = require("../core/deployVault");
const deployGMX = require("../gmx/deployGMX");
const deployTokens = require("../gmx/deployTokens");
const deployOrderBookReader = require("../peripherals/deployOrderBookReader");
// const deployOrderExecutor = require("../core/deployOrderExecutor");
const deployBatchSender = require("../peripherals/deployBatchSender");
const deployPriceFeedTimelock = require("../peripherals/deployPriceFeedTimelock");
const deployReader = require("../peripherals/deployReader");
const deployRewardReader = require("../peripherals/deployRewardReader");
const setMaxGlobalSizes = require("../core/setMaxGlobalSizes");
const deployShortsTrackerTimelock = require("../peripherals/deployShortsTrackerTimelock");
const setTiersReferralStorage = require("../core/setTiersReferralStorage");
const deployTimelock = require("../peripherals/deployTimelock");
const deployVaultReader = require("../peripherals/deployVaultReader");
const deployRewardRouterV2 = require("../staking/deployRewardRouterV2");
const deployPriceFeed = require("../core/deployPriceFeed");
const { getGasUsed, syncDeployInfo } = require("../shared/syncParams");
const deployGlpRewardRouter = require("../staking/deployGlpRewardRouter");
const deployMulticall = require("../core/deployMulticall");
const deployTokenContract = require("../core/deployTokenContract");
const setDistributorValues = require("../core/setDistributorValues");
const deploy_core = async () => {
  syncDeployInfo("eth", {
    name: "weth",
    imple: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  });
  syncDeployInfo("wbtc", {
    name: "wbtc",
    imple: "0xa33ac1C966a48Eed6A4F4026416ADD2355A1aAae",
  });
  syncDeployInfo("uni", {
    name: "uni",
    imple: "0x4f4B9DCd382fbD5D109CC03d782367cf8eeEA9D2",
  });
  syncDeployInfo("link", {
    name: "link",
    imple: "0xDe00B33181FEb562bd2fDA9392FFbCb2A5519db1",
  });
  syncDeployInfo("usdt", {
    name: "usdt",
    imple: "0x3a589D6C10fAb020EA5c8b4503Fe974883BE2752",
  });
  syncDeployInfo("usdc", {
    name: "usdc",
    imple: "0xaD55709eBB4B0e03A3512E2924c42245110587dc",
  });
  syncDeployInfo("dai", {
    name: "dai",
    imple: "0x6bd97493d411F9e4Dc0Ff03BBeDC4dADE444d08c",
  });
  syncDeployInfo("frax", {
    name: "frax",
    imple: "0xebDDEb185be1f9dFD01F1a04B4F13a7F2ac67AF2",
  });
  syncDeployInfo("MultiSigner1", {
    name: "MultiSigner1",
    imple: "0x2faf8ab2b9ac8Bd4176A0B9D31502bA3a59B4b41",
  });
  syncDeployInfo("MultiSigner2", {
    name: "MultiSigner2",
    imple: "0x10494fbe1b966824Dd98a2bcD7bc983e2307F60F",
  });
  syncDeployInfo("MultiSigner3", {
    name: "MultiSigner3",
    imple: "0x84f8bF4bB72F4BE2C131a5F7B519b23958A76980",
  });
  syncDeployInfo("MultiSigner4", {
    name: "MultiSigner4",
    imple: "0xa63afBB98eB3580799022A64648adC355244DD6c",
  });
  syncDeployInfo("MultiSigner5", {
    name: "MultiSigner5",
    imple: "0xC8f2227Cf7dA427fe4EF762886dC0F6D2D7c8399",
  });
  syncDeployInfo("MultiSigner6", {
    name: "MultiSigner6",
    imple: "0xfA9E2084fc38DaFca0aea969bE314061E5F1d424",
  });
  // await deployMulticall()
  // await deployGMX()
  // await deployVault()
  // await deployVaultReader()
  // await deployReader()
  // await deployRewardReader()
  // await deployTokens()
  // await deployRewardRouterV2()
  // await deployOrderBook()
  // // // await deployOrderExecutor()
  // await deployOrderBookReader()
  // await deployReferralStorage()
  
  // await setTiersReferralStorage ()

  // await deployReferralReader()
  // await deployShortsTracker() // set deployed wallet address
  // await deployShortsTrackerTimelock()
  // await deployTokenManager()
  // await deployTimelock()
  // await deployPositionRouter()
  // await deployPositionManager()

  // await setDistributorValues()
  await deployBatchSender()
  
  await deployPriceFeedTimelock()
  await deployPriceFeed()
  await deployGlpRewardRouter()

  // await setMaxGlobalSizes ()
  console.log("gas used:", getGasUsed());

  // await directPoolDeposit('1000000000000000000') // 1 WETH
  //  await configureNewToken()
};

module.exports = { deploy_core };
