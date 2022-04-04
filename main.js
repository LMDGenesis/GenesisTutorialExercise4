var ethers = require('ethers');  
var crypto = require('crypto');
var bip39 = require('bip39');

//Create Mnemonic
//const mnemonic = bip39.generateMnemonic(256)
//console.log(mnemonic)
const mnemonicSaved = "copy vast such slogan life educate meat bitter bus grief survey trip reopen scrap north swing write arm celery exit quit fork vintage praise"

//Create a wallet based on a mnemonic
var walletHard = new ethers.Wallet.fromMnemonic(mnemonicSaved);
console.log("Address: " + walletHard.address);

//Connect Wallet to Ropsten Test-Net
wallet = walletHard.connect(new ethers.providers.InfuraProvider("ropsten"));

//Creating a transaction
tx = {
    to: "0xe939557dc16341eC621DbE1c752f54cDB28f9c85",
    value: ethers.utils.parseEther("0.00001")
}
console.log("Created Transaction!")

//Sign transaction
wallet.signTransaction(tx)
console.log("Signing Transaction!")

//Send a transaction
wallet.sendTransaction(tx);
console.log("Sent Transaction!")