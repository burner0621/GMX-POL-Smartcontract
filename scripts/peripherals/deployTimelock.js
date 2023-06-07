const { deployContract, contractAt, sendTxn, getFrameSigner } = require("../shared/helpers")
const { expandDecimals } = require("../../test/shared/utilities");
const { getDeployFilteredInfo } = require("../shared/syncParams");

async function deployTimelock() {
  const signer = await getFrameSigner()
  const admin = signer.address
  const buffer = 24 * 60 * 60
  const maxTokenSupply = expandDecimals("13250000", 18)

  const { imple: vault } = getDeployFilteredInfo("Vault")
  const { imple: tokenManager } = getDeployFilteredInfo("TokenManager")
  const { imple: glpManager } = getDeployFilteredInfo("GlpManager")
  const { imple: rewardRouter } = getDeployFilteredInfo("RewardRouterV2")
  const { imple: positionRouterAddress } = getDeployFilteredInfo("PositionRouter")
  const { imple: positionManagerAddress } = getDeployFilteredInfo("PositionManager")
  const { imple: gmx } = getDeployFilteredInfo("GMX")
  const mintReceiver = tokenManager

  await deployContract("Timelock", [
    admin, // admin
    buffer, // buffer
    tokenManager, // tokenManager
    mintReceiver, // mintReceiver
    glpManager, // glpManager
    rewardRouter, // rewardRouter
    maxTokenSupply, // maxTokenSupply
    10, // marginFeeBasisPoints 0.1%
    500 // maxMarginFeeBasisPoints 5%
  ], "Timelock")

  const timelock = await contractAt("Timelock", getDeployFilteredInfo("Timelock").imple)

  const positionUtils = await contractAt("PositionUtils", getDeployFilteredInfo("PositionUtils").imple)
  const positionRouter = await contractAt("PositionRouter", getDeployFilteredInfo("PositionRouter").imple, undefined, {
    libraries: {
      PositionUtils: positionUtils.address
    }
  })
  const positionManager = await contractAt("PositionManager", getDeployFilteredInfo("PositionManager").imple, undefined, {
    libraries: {
      PositionUtils: positionUtils.address
    },
  })

  await sendTxn(timelock.setShouldToggleIsLeverageEnabled(true), "timelock.setShouldToggleIsLeverageEnabled(true)")
  await sendTxn(timelock.setContractHandler(positionRouter.address, true), "timelock.setContractHandler(positionRouter)")
  await sendTxn(timelock.setContractHandler(positionManager.address, true), "timelock.setContractHandler(positionManager)")

  // // update gov of vault
  // const vaultGov = await contractAt("Timelock", await vault.gov())

  // await sendTxn(vaultGov.signalSetGov(vault.address, deployedTimelock.address), "vaultGov.signalSetGov")
  // await sendTxn(deployedTimelock.signalSetGov(vault.address, vaultGov.address), "deployedTimelock.signalSetGov(vault)")

  const handlers = [
    getDeployFilteredInfo("MultiSigner1").imple, // coinflipcanada
    getDeployFilteredInfo("MultiSigner2").imple, // G
    getDeployFilteredInfo("MultiSigner3").imple, // kr
    getDeployFilteredInfo("MultiSigner4").imple, // quat
    getDeployFilteredInfo("MultiSigner5").imple // xhiroz
  ]

  for (let i = 0; i < handlers.length; i++) {
    const handler = handlers[i]
    await sendTxn(timelock.setContractHandler(handler, true), `timelock.setContractHandler(${handler})`)
  }

  const keepers = [
    getDeployFilteredInfo("MultiSigner6").imple // X
  ]

  for (let i = 0; i < keepers.length; i++) {
    const keeper = keepers[i]
    await sendTxn(timelock.setKeeper(keeper, true), `timelock.setKeeper(${keeper})`)
  }

  await sendTxn(timelock.signalApprove(gmx, admin, "1000000000000000000"), "timelock.signalApprove")

  const referralStorage = await contractAt("ReferralStorage", getDeployFilteredInfo("ReferralStorage").imple)
  await sendTxn(referralStorage.setGov(timelock.address), `referralStorage.setGov(${timelock.address})`)
}

module.exports = deployTimelock