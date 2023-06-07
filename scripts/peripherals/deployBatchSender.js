const { deployContract } = require("../shared/helpers")

async function deployBatchSender() {
  const batchSender = await deployContract("BatchSender", [])
  return { batchSender }
}

module.exports = deployBatchSender