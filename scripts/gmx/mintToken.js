const { contractAt, sendTxn } = require("../shared/helpers")
const { expandDecimals, maxUint256 } = require("../../test/shared/utilities")

async function main() {
  const wallet = { address: "0xE31bf8f9C0d036b0b3A0e0a76c131cB919af6134" }
  const gmx = await contractAt("USDG", "0x3abE9198B4AC558760020AFbac3cC0642bc6714F")
  console.log (wallet.address)
  //  await sendTxn(gmx.setMinter(wallet.address, "true"), "gmx.setMinter(minter, isActive)")
   await sendTxn(gmx.mint(wallet.address, "10000000000"), "gmx.mint(account, amount)")
//   await sendTxn(gmx.approve("0xE67AC12f8d493504ea17CE06c0e6d22353F1Be0D", "100000000000000000000"), "gmx.approve(account, amount)")
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
