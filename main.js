var ethers = require('ethers');  
var crypto = require('crypto');


//Creates a random 32 byte string in hex
var id = crypto.randomBytes(32).toString('hex');

//Creates a private key by adding eth's sig on top of 0x
var privateKey = "0x"+id;
console.log("SAVE BUT DO NOT SHARE THIS:", privateKey);

var wallet = new ethers.Wallet(privateKey);
console.log("Address: " + wallet.address);