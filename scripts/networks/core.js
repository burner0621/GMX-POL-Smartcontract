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
const setPriceFeedUpdater = require("../core/setPriceFeedUpdater");
const deploy_core = async () => {
  syncDeployInfo("weth", {
    name: "weth",
    imple: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  });
  syncDeployInfo("WETH", {
    name: "WETH",
    imple: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
  });
  syncDeployInfo("wbtc", {
    name: "wbtc",
    imple: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
  });
  syncDeployInfo("uni", {
    name: "uni",
    imple: "0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0",
  });
  syncDeployInfo("link", {
    name: "link",
    imple: "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
  });
  syncDeployInfo("usdt", {
    name: "usdt",
    imple: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
  });
  syncDeployInfo("usdc", {
    name: "usdc",
    imple: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  });
  syncDeployInfo("dai", {
    name: "dai",
    imple: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
  });
  syncDeployInfo("frax", {
    name: "frax",
    imple: "0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F",
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
  await deployMulticall()
  await deployGMX()
  await deployVault()
  await deployVaultReader()
  await deployReader()
  await deployRewardReader()
  await deployTokens()
  await deployRewardRouterV2()
  await deployOrderBook()
  // // await deployOrderExecutor()
  await deployOrderBookReader()
  await deployReferralStorage()
  
  await setTiersReferralStorage ()

  await deployReferralReader()
  await deployShortsTracker() // set deployed wallet address
  await deployShortsTrackerTimelock()
  await deployTokenManager()
  await deployTimelock()
  await deployPositionRouter()
  await deployPositionManager()

  await setDistributorValues()
  await deployBatchSender()
  
  await deployPriceFeedTimelock()
  await deployPriceFeed()
  await setPriceFeedUpdater()
  await deployGlpRewardRouter()

  // await setMaxGlobalSizes ()
  console.log("gas used:", getGasUsed());

  // await directPoolDeposit('1000000000000000000') // 1 WETH
  //  await configureNewToken()
};

module.exports = { deploy_core };
