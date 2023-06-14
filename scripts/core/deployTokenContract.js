const { deployContract, contractAt, sendTxn, getFrameSigner } = require("../shared/helpers")

async function deployTokenContract() {
    await deployContract ("WBTC", [], "WBTC");
    const wbtcToken = await contractAt("WBTC", getDeployFilteredInfo("WBTC").imple)
    await sendTxn(wbtcToken.mint("0x42d0b8efF2fFF1a70B57C8E96bE77C2e49A774c3", 100000), "WBTC token minting")

    await deployContract ("USDT", [], "USDT");
    const usdtToken = await contractAt("USDT", getDeployFilteredInfo("USDT").imple)
    await sendTxn(usdtToken.mint("0x42d0b8efF2fFF1a70B57C8E96bE77C2e49A774c3", 100000), "USDT token minting")
    
    await deployContract ("USDC", [], "USDC");
    const usdcToken = await contractAt("USDC", getDeployFilteredInfo("USDC").imple)
    await sendTxn(usdcToken.mint("0x42d0b8efF2fFF1a70B57C8E96bE77C2e49A774c3", 100000), "USDC token minting")
    
    await deployContract ("UNI", [], "UNI");
    const uniToken = await contractAt("UNI", getDeployFilteredInfo("UNI").imple)
    await sendTxn(uniToken.mint("0x42d0b8efF2fFF1a70B57C8E96bE77C2e49A774c3", 100000), "UNI token minting")
    
    await deployContract ("DAI", [], "DAI");
    const daiToken = await contractAt("DAI", getDeployFilteredInfo("DAI").imple)
    await sendTxn(daiToken.mint("0x42d0b8efF2fFF1a70B57C8E96bE77C2e49A774c3", 100000), "DAI token minting")
    
    await deployContract ("Frax", [], "Frax");
    const fraxToken = await contractAt("Frax", getDeployFilteredInfo("Frax").imple)
    await sendTxn(fraxToken.mint("0x42d0b8efF2fFF1a70B57C8E96bE77C2e49A774c3", 100000), "Frax token minting")

}

module.exports = deployTokenContract