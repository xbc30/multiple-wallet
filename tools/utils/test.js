const bip39 = require('bip39');
const eip55 = require('eip55');
const config = require('../config/config')
const hdkey = require('../hdkey/hdkey');
const util = require('ethereumjs-util');
const keythereum = require('../keythereum/keythereum');
const cs = require('coinstring')
const crypto = require('crypto')
const randomBytes = require('randombytes')
const BigInteger = require('bigi')
const ecurve = require('ecurve')

let a = {};
a.generateMnemonic = () => {
    return bip39.generateMnemonic();
};

a.mnemonicToBtcPrivate = (mnemonic) => {
    let seed = bip39.mnemonicToSeed(mnemonic);
    let hdWallet = hdkey.fromMasterSeed(seed);
    let key = hdWallet.derivePath("m/44'/0'/0'/0/0");
    return key._hdkey._privateKey.toString('hex');
};

a.mnemonicToBtcWIFPrivate = (mnemonic) => {
    let seed = bip39.mnemonicToSeed(mnemonic);
    let hdWallet = hdkey.fromMasterSeed(seed);
    let key = hdWallet.derivePath("m/44'/0'/0'/0/0");
    return cs.encode(key._hdkey._privateKey, 0x80);
};

a.mnemonicToEthPrivate = (mnemonic) => {
    let seed = bip39.mnemonicToSeed(mnemonic);
    let hdWallet = hdkey.fromMasterSeed(seed);
    let key = hdWallet.derivePath("m/44'/60'/0'/0/0");
    return key._hdkey._privateKey.toString('hex');
};

a.mnemonicToEthAddress = (mnemonic) => {
    let seed = bip39.mnemonicToSeed(mnemonic);
    let hdWallet = hdkey.fromMasterSeed(seed);
    let key = hdWallet.derivePath("m/44'/60'/0'/0/0");
    return eip55.encode("0x" + (util.pubToAddress(key._hdkey._publicKey, true)).toString('hex'));
};

a.privateKeyToBtcAddress = (privateKey) => {
    let ecparams = ecurve.getCurveByName('secp256k1')
    let curvePt = ecparams.G.multiply(BigInteger.fromBuffer(Buffer.from(privateKey, 'hex')))
    let x = curvePt.affineX.toBuffer(32)
    let y = curvePt.affineY.toBuffer(32)
    let publicKey = Buffer.concat([Buffer.from([0x04]), x, y])
// publicKey = curvePt.getEncoded(true)
    let sha = crypto.createHash('sha256').update(publicKey).digest()
    let pubkeyHash = crypto.createHash('rmd160').update(sha).digest()
    return cs.encode(pubkeyHash, 0x0)
}

let b = 'until spend pluck flat top shell they vacant erode van sheriff wife';

let c = a.mnemonicToBtcPrivate(b)

let d = a.mnemonicToBtcWIFPrivate(b);

let e = a.mnemonicToEthPrivate(b);

let f = a.privateKeyToBtcAddress(c);

let g = a.mnemonicToEthAddress(b);

console.log('助记词：' + b + '\n');
console.log('BTC私钥：' + c);
console.log('BTC私钥(WIF)：' + d);
console.log('ETH私钥：' + e + '\n');
console.log('BTC地址：' + f);
console.log('ETH地址：' + g);

