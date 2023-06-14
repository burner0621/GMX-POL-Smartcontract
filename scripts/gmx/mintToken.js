const { contractAt, sendTxn } = require("../shared/helpers")
const { expandDecimals, maxUint256 } = require("../../test/shared/utilities")

async function main() {
  const wallet = { address: "0x42d0b8efF2fFF1a70B57C8E96bE77C2e49A774c3" }
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
