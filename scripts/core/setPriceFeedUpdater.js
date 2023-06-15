const { deployContract, contractAt , sendTxn, getFrameSigner } = require("../shared/helpers")
const { getDeployFilteredInfo, getNetwork } = require("../shared/syncParams");

async function setPriceFeedUpdater() {
    const signer = await getFrameSigner()
    const priceFeedTimelock = await contractAt("PriceFeedTimelock", getDeployFilteredInfo("PriceFeedTimelock").imple)
    await sendTxn(priceFeedTimelock.setBuffer(0), "priceFeedTimelock.setBuffer(0)")
    await sendTxn(priceFeedTimelock.signalSetPriceFeedUpdater(getDeployFilteredInfo("FastPriceFeed").imple,
                signer.address,
                true),
                "priceFeedTimelock.signalSetPriceFeedUpdater")
    await sendTxn(priceFeedTimelock.setPriceFeedUpdater(getDeployFilteredInfo("FastPriceFeed").imple,
                signer.address,
                true),
                "priceFeedTimelock.setPriceFeedUpdater")
    await sendTxn(priceFeedTimelock.setBuffer(86400), "priceFeedTimelock.setBuffer(86400)")
}

module.exports = setPriceFeedUpdater