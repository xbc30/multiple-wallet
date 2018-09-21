const bip39 = require('bip39');
const eip55 = require('eip55');
const hdkey = require('hdkey');
const createHash = require('create-hash');
const bs58check = require('bs58check');
const base58 = require('bs58');
const util = require('ethereumjs-util');
const crypto = require('crypto')
const ecurve = require('ecurve')
const cs = require('coinstring')
const bitcoin = require('bitcoinjs-lib');
const testnet = bitcoin.networks.testnet;
const networks = require('../utils/networks.js');

function encodePrivKey(privateKey, network) {
    // Add version prefix + suffix
    //ltc B0 btc 80 test EF
    var prefix = (network === "litecoin")? "B0" : "EF";
    var newKey = prefix + privateKey + '01';

    // Create checksum by taking first 4 bytes of sha256(sha256(newKey))
    var bytes = Buffer.from(newKey, 'hex');
    var one = crypto.createHash('sha256').update(bytes).digest();
    var two = crypto.createHash('sha256').update(one).digest();
    var checksum = two.toString('hex').substr(0,8);

    // Add checksum to end of key
    newKey += checksum;

    // Convert to base58 encoding
    bytes = Buffer.from(newKey, 'hex');
    const key = base58.encode(bytes);
    return key;
}

const mnemonic = "stable element chronic swift tell obvious hope display unique drum desert clarify";
const seed = bip39.mnemonicToSeed(mnemonic); //creates seed buffer
console.log('mnemonic: ' + mnemonic);
console.log('Seed: ' + seed.toString('hex')+'\n');

const root = hdkey.fromMasterSeed(seed);
const masterPrivateKey = root.privateKey;
console.log('masterPrivateKey: ' + masterPrivateKey.toString('hex'));
console.log('BIP32 Root Key：' + JSON.stringify(root)+'\n');

const bIP32ExtendedPrivateKey = root.derive("m/44'/0'/0'/0");
console.log('bIP32ExtendedPrivateKey: ' + JSON.stringify(bIP32ExtendedPrivateKey)+'\n')

//btc
/*
const addrnode = root.derive("m/44'/0'/0'/0/0");
console.log('addrnode: ' + JSON.stringify(addrnode))
console.log('addrnodePrivateKey: ' + addrnode._privateKey.toString('hex'))
console.log('addrnodePrivateKey: ' + cs.encode(addrnode._privateKey, 0x80))
console.log('addrnodePublicKey: '+ addrnode._publicKey.toString('hex')+'\n')

const step1 = addrnode._publicKey;
const step2 = createHash('sha256').update(step1).digest();
const step3 = createHash('rmd160').update(step2).digest();

var step4 = Buffer.allocUnsafe(21);
step4.writeUInt8(0x00, 0);
step3.copy(step4, 1); //step4 now holds the extended RIPMD-160 result
const step9 = bs58check.encode(step4);
console.log('Base58Check Address: ' + step9);*/


//btc testnet

/*const addrnode = root.derive("m/44'/1'/0'/0/0");
console.log('addrnode: ' + JSON.stringify(addrnode))
console.log('addrnodePrivateKey: ' + addrnode._privateKey.toString('hex'))
console.log('addrnodePrivateKey: ' + encodePrivKey(addrnode._privateKey.toString('hex')))
console.log('addrnodePublicKey: '+ addrnode._publicKey.toString('hex')+'\n')

const step1 = addrnode._publicKey;
const step2 = createHash('sha256').update(step1).digest();
const step3 = createHash('rmd160').update(step2).digest();

var step4 = Buffer.allocUnsafe(21);
step4.writeUInt8(0x6f, 0);
step3.copy(step4, 1); //step4 now holds the extended RIPMD-160 result
const step9 = bs58check.encode(step4);
console.log('Base58Check Address: ' + step9);*/

//btc testnet segwit address

/*const addrnode = root.derive("m/49'/1'/0'/0/0");
console.log('addrnode: ' + JSON.stringify(addrnode))
console.log('addrnodePrivateKey: ' + addrnode._privateKey.toString('hex'))
console.log('addrnodePrivateKey: ' + encodePrivKey(addrnode._privateKey.toString('hex')))
console.log('addrnodePublicKey: '+ addrnode._publicKey.toString('hex')+'\n')

const keyPair = bitcoin.ECPair.fromWIF(encodePrivKey(addrnode._privateKey.toString('hex')), testnet)
const { address } = bitcoin.payments.p2sh({
    redeem: bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey, network: testnet }),
    network: testnet
})
console.log('address: ' + address);

const wif = networks['bitcoin'].wif
console.log(wif)*/
//segwit address

/*const addrnode = root.derive("m/49'/0'/0'/0/0");
console.log('addrnode: ' + JSON.stringify(addrnode))
console.log('addrnodePrivateKey: ' + addrnode._privateKey.toString('hex'))
console.log('addrnodePrivateKey: ' + encodePrivKey(addrnode._privateKey.toString('hex')))
console.log('addrnodePublicKey: '+ addrnode._publicKey.toString('hex')+'\n')

const keyPair = bitcoin.ECPair.fromWIF(encodePrivKey(addrnode._privateKey.toString('hex')))
const address = bitcoin.payments.p2sh({
    redeem: bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey })
}).address
console.log('address: ' + address);*/

//bch
/*const addrnode = root.derive("m/44'/145'/0'/0/0");
console.log('addrnode: ' + JSON.stringify(addrnode))
console.log('addrnodePrivateKey: ' + addrnode._privateKey.toString('hex'))
console.log('addrnodePrivateKey: ' + cs.encode(addrnode._privateKey, 0x80))
console.log('addrnodePublicKey: '+ addrnode._publicKey.toString('hex')+'\n')

const step1 = addrnode._publicKey;
const step2 = createHash('sha256').update(step1).digest();
const step3 = createHash('rmd160').update(step2).digest();

var step4 = Buffer.allocUnsafe(21);
step4.writeUInt8(0x00, 0);
step3.copy(step4, 1); //step4 now holds the extended RIPMD-160 result
const step9 = bs58check.encode(step4);
console.log('Base58Check Address: ' + step9);*/

//eth
/*const addrnode = root.derive("m/44'/60'/0'/0/0");
console.log('addrnodePrivateKey: ' + addrnode._privateKey.toString('hex'))

console.log('eth Address: ' + eip55.encode("0x" + (util.pubToAddress(addrnode._publicKey, true)).toString('hex')));*/

//etc
/*const addrnode = root.derive("m/44'/61'/0'/0/0");
console.log('addrnodePrivateKey: ' + addrnode._privateKey.toString('hex'))

console.log('eth Address: ' + eip55.encode("0x" + (util.pubToAddress(addrnode._publicKey, true)).toString('hex')));*/

//litecoin
/*const addrnode = root.derive("m/44'/2'/0'/0/0");
console.log('addrnode: ' + JSON.stringify(addrnode))
console.log('addrnodePrivateKey: ' + addrnode._privateKey.toString('hex'))
console.log('addrnodePrivateKey: ' + encodePrivKey(addrnode._privateKey.toString('hex'), 'litecoin'))
console.log('addrnodePublicKey: '+ addrnode._publicKey.toString('hex')+'\n')

const step1 = addrnode._publicKey;
const step2 = createHash('sha256').update(step1).digest();
const step3 = createHash('rmd160').update(step2).digest();

var step4 = Buffer.allocUnsafe(21);
step4.writeUInt8(0x30, 0);
step3.copy(step4, 1); //step4 now holds the extended RIPMD-160 result
const step9 = bs58check.encode(step4);
console.log('Base58Check Address: ' + step9);*/


//zcash address
const addrnode = root.derive("m/44'/133'/0'/0/0");
console.log('addrnode: ' + JSON.stringify(addrnode))
console.log('addrnodePrivateKey: ' + addrnode._privateKey.toString('hex'))
console.log('addrnodePrivateKey: ' + encodePrivKey(addrnode._privateKey.toString('hex')))
console.log('addrnodePublicKey: '+ addrnode._publicKey.toString('hex')+'\n')

const step1 = addrnode._publicKey;
const step2 = createHash('sha256').update(step1).digest();
const step3 = createHash('rmd160').update(step2).digest();

var step4 = Buffer.allocUnsafe(22);
step4.writeUInt16BE(0x1cb8, 0);
step3.copy(step4, 2); //step4 now holds the extended RIPMD-160 result
const step9 = bs58check.encode(step4);
console.log('Base58Check Address: ' + step9);
