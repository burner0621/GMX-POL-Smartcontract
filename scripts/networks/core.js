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
const deployTimelock = require("../peripherals/deployTimelock");
const deployVaultReader = require("../peripherals/deployVaultReader");
const deployRewardRouterV2 = require("../staking/deployRewardRouterV2");
const deployPriceFeed = require("../core/deployPriceFeed");
const { getGasUsed, syncDeployInfo } = require("../shared/syncParams");
const deployGlpRewardRouter = require("../staking/deployGlpRewardRouter");
const deployMulticall = require("../core/deployMulticall");
// const directPoolDeposit = require("../core/directPoolDeposit");
// const configureNewToken = require("../peripherals/configureNewToken");

const deploy_core = async () => {
  syncDeployInfo("eth", {
    name: "weth",
    imple: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
  });
  syncDeployInfo("wbtc", {
    name: "wbtc",
    imple: "0xC04B0d3107736C32e19F1c62b2aF67BE61d63a05",
  });
  syncDeployInfo("uni", {
    name: "uni",
    imple: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
  });
  syncDeployInfo("link", {
    name: "link",
    imple: "0x63bfb2118771bd0da7A6936667A7BB705A06c1bA",
  });
  syncDeployInfo("usdt", {
    name: "usdt",
    imple: "0x509Ee0d083DdF8AC028f2a56731412edD63223B9",
  });
  syncDeployInfo("usdc", {
    name: "usdc",
    imple: "0x2f3A40A3db8a7e3D09B0adfEfbCe4f6F81927557",
  });
  syncDeployInfo("dai", {
    name: "dai",
    imple: "0x73967c6a0904aA032C103b4104747E88c566B1A2",
  });
  syncDeployInfo("frax", {
    name: "frax",
    imple: "0x92d43093959C7DDa89896418bCE9DE0B87879646",
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
  // deploy-core.json : change the weth address
  // await deployMulticall()
  // await deployGMX()
  // await deployVault()
  // await deployVaultReader()
  // await deployReader()
  // await deployRewardReader()
  // await deployTokens()
  // await deployRewardRouterV2()
  // await deployOrderBook()
  // // await deployOrderExecutor()
  // await deployOrderBookReader()
  // await deployReferralStorage()
  ////////////////////////////////
  //////// set tier values ///////
  ////////////////////////////////
  // await deployReferralReader()
  // await deployShortsTracker()
  // await deployTokenManager()
  // await deployPositionRouter()
  // await deployPositionManager()
  ////////////////////////////////
  /////set distributor values ////
  ////////////////////////////////
  // await deployTimelock()
  // await deployBatchSender()
  
  // await deployPriceFeedTimelock()
  // // await deployShortsTrackerTimelock()
  // await deployPriceFeed()
  // await deployGlpRewardRouter()

  /////////////////////////////////////////////////////////
  /////// change tokenArr variable in this function ///////
  /////////////////////////////////////////////////////////
  // await setMaxGlobalSizes ()
  console.log("gas used:", getGasUsed());

  // await directPoolDeposit('1000000000000000000') // 1 WETH
  //  await configureNewToken()
};

module.exports = { deploy_core };
