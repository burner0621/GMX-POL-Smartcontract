const { deployContract, contractAt , sendTxn, getFrameSigner } = require("../shared/helpers")
const { getDeployFilteredInfo, getNetwork } = require("../shared/syncParams");

async function setDistributorValues() {
    const signer = await getFrameSigner()
    const stakedGmxDistributor = await contractAt("RewardDistributor", getDeployFilteredInfo("RewardDistributorStakedGMX").imple)
    const feeGmxDistributor = await contractAt("RewardDistributor", getDeployFilteredInfo("RewardDistributorStakedBonusFeeGMX").imple)
    const feeGlpDistributor = await contractAt("RewardDistributor", getDeployFilteredInfo("RewardDistributorFeeGLP").imple)
    const stakedGlpDistributor = await contractAt("RewardDistributor", getDeployFilteredInfo("RewardDistributorFeeStakedGLP").imple)
    const bonusGmxDistributor = await contractAt("BonusDistributor", getDeployFilteredInfo("BonusDistributorStakedGMX").imple)
    
    const EsGMXContract = await contractAt("EsGMX", getDeployFilteredInfo("EsGMX").imple)
    const GMXContract = await contractAt("GMX", getDeployFilteredInfo("GMX").imple)

    await sendTxn(feeGmxDistributor.setTokensPerInterval(1000000000000000), "feeGmxDistributor.setTokensPerInterval(1000000000000000)")
    await sendTxn(feeGlpDistributor.setTokensPerInterval(2000000000000000), "feeGlpDistributor.setTokensPerInterval(2000000000000000)")
    await sendTxn(stakedGmxDistributor.setTokensPerInterval(4000000000000000), "stakedGmxDistributor.setTokensPerInterval(4000000000000000)")
    await sendTxn(stakedGlpDistributor.setTokensPerInterval(0), "stakedGlpDistributor.setTokensPerInterval(0)")
    await sendTxn(bonusGmxDistributor.setBonusMultiplier(10000), "bonusGmxDistributor.setTokensPerInterval(10000)")

    await sendTxn(EsGMXContract.setMinter(signer.address, true), "EsGMXContract.setMinter(signer.address, true)")
    await sendTxn(EsGMXContract.mint(stakedGmxDistributor.address, "200000000000000000000000"), "EsGMXContract.mint(stakedGmxDistributor.address, '200000000000000000000000')")
    await sendTxn(GMXContract.setMinter(signer.address, true), "GMXContract.setMinter(signer.address, true)")
    await sendTxn(GMXContract.mint(getDeployFilteredInfo("VesterGMX").imple, "200000000000000000000000"), "GMXContract.mint(getDeployFilteredInfo('VesterGMX').imple, '200000000000000000000000')")
    await sendTxn(GMXContract.mint(getDeployFilteredInfo("VesterGLP").imple, "200000000000000000000000"), "GMXContract.mint(getDeployFilteredInfo('VesterGLP').imple, '200000000000000000000000')")

}

module.exports = setDistributorValues