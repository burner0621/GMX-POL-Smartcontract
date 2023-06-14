const { getFrameSigner, deployContract, contractAt , sendTxn, readTmpAddresses, writeTmpAddresses } = require("../shared/helpers")
const { expandDecimals } = require("../../test/shared/utilities")
const { toUsd } = require("../../test/shared/units");
const { getArgumentForSignature } = require("typechain");
const { getNetwork, getDeployFilteredInfo } = require("../shared/syncParams");

const network = (process.env.HARDHAT_NETWORK || 'mainnet');
console.log (network)
const tokens = require('./tokens')[network];

async function getArbTestnetValues() {
  return { vaultAddress: getDeployFilteredInfo("Vault").imple, gasLimit: 12500000 }
}

async function getArbValues() {
  return { vaultAddress: getDeployFilteredInfo("Vault").imple, gasLimit: 12500000 }
}

async function getAvaxValues() {
  return { vaultAddress: getDeployFilteredInfo("Vault").imple }
}

async function getCoreValues() {
  return { vaultAddress: getDeployFilteredInfo("Vault").imple, gasLimit: 12500000 }
}

async function getValues() {
  if (network === "avax") {
    return await getAvaxValues()
  } else if (network === "arbitrumTestnet") {
    return await getArbTestnetValues()
  } else if (network === "core") {
    return await getCoreValues()
  } else {
    return await getArbValues()
  }
}

async function deployShortsTracker() {
  const { vaultAddress, gasLimit } = await getValues()
  const gov = { address: "0x42d0b8efF2fFF1a70B57C8E96bE77C2e49A774c3" }
  const shortsTracker = await deployContract("ShortsTracker", [vaultAddress], "ShortsTracker", { gasLimit })
  await sendTxn(shortsTracker.setGov(gov.address), "shortsTracker.setGov")
}

module.exports = deployShortsTracker