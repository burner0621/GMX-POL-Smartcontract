const { getFrameSigner, deployContract, contractAt , sendTxn, readTmpAddresses, writeTmpAddresses } = require("../shared/helpers")
const { expandDecimals } = require("../../test/shared/utilities")
const { toUsd } = require("../../test/shared/units");
const { getArgumentForSignature } = require("typechain");

const network = (process.env.HARDHAT_NETWORK || 'mainnet');
console.log (network)
const tokens = require('./tokens')[network];

async function getArbTestnetValues() {
  return { vaultAddress: "0xBc9BC47A7aB63db1E0030dC7B60DDcDe29CF4Ffb", gasLimit: 12500000 }
}

async function getArbValues() {
  return { vaultAddress: "0x489ee077994B6658eAfA855C308275EAd8097C4A", gasLimit: 12500000 }
}

async function getAvaxValues() {
  return { vaultAddress: "0x9ab2De34A33fB459b538c43f251eB825645e8595" }
}

async function getCoreValues() {
  return { vaultAddress: "0xBcb097D10314996657D967218c5Ce235bF3d13B5", gasLimit: 12500000 }
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
  const gov = { address: "0xE31bf8f9C0d036b0b3A0e0a76c131cB919af6134" }
  const shortsTracker = await deployContract("ShortsTracker", [vaultAddress], "ShortsTracker", { gasLimit })
  await sendTxn(shortsTracker.setGov(gov.address), "shortsTracker.setGov")
}

module.exports = deployShortsTracker