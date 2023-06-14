const { contractAt , sendTxn } = require("../shared/helpers")
const { getDeployFilteredInfo } = require("../shared/syncParams");
const { expandDecimals } = require("../../test/shared/utilities")
const { toUsd } = require("../../test/shared/units")

const network = (process.env.HARDHAT_NETWORK || 'mainnet');
const tokens = require('./tokens')[network];

async function getArbValues() {
  const referralStorage = await contractAt("ReferralStorage", getDeployFilteredInfo("ReferralStorage").imple)

  return { referralStorage }
}

async function getAvaxValues() {
  const referralStorage = await contractAt("ReferralStorage", getDeployFilteredInfo("ReferralStorage").imple)

  return { referralStorage }
}

async function getCoreValues() {
  const referralStorage = await contractAt("ReferralStorage", getDeployFilteredInfo("ReferralStorage").imple)

  return { referralStorage }
}

async function getValues() {
  if (network === "arbitrum") {
    return getArbValues()
  }

  if (network === "core") {
    return getCoreValues()
  }

  if (network === "avax") {
    return getAvaxValues()
  }
}

async function setTiersReferralStorage() {
  const { referralStorage } = await getValues()

  await sendTxn(referralStorage.setTier(0, 1000, 5000), "referralStorage.setTier 0")
  await sendTxn(referralStorage.setTier(1, 2000, 6000), "referralStorage.setTier 1")
  await sendTxn(referralStorage.setTier(2, 2700, 4444), "referralStorage.setTier 2")

  // await sendTxn(referralStorage.setReferrerTier("0xbb00f2E53888E60974110d68F1060e5eAAB34790", 1), "referralStorage.setReferrerTier 1")
  // await sendTxn(referralStorage.setReferrerTier("0x5F799f365Fa8A2B60ac0429C48B153cA5a6f0Cf8", 2), "referralStorage.setReferrerTier 2")
}

module.exports = setTiersReferralStorage