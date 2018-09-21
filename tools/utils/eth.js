const bip39 = require('bip39');
const eip55 = require('eip55');
const config = require('../config/config')
const hdkey = require('../hdkey/hdkey');
const util = require('ethereumjs-util');
const keythereum = require('../keythereum/keythereum');

exports.privateToKeyStore = (password, privateKey) => {
    let params = { keyBytes: 32, ivBytes: 16 };
    let dk = keythereum.create(params);
    return JSON.stringify(keythereum.dump(password, privateKey, dk.salt.toString('hex'), dk.iv.toString('hex'), config['keyStoreOptions']));
};

exports.keyStoreToPrivate = (password, keyObject) => {
    return (keythereum.recover(password, keyObject)).toString('hex');
};

exports.generateMnemonic = () => {
    return bip39.generateMnemonic();
};

exports.mnemonicToEthPrivate = (mnemonic) => {
    let seed = bip39.mnemonicToSeed(mnemonic);
    let hdWallet = hdkey.fromMasterSeed(seed);
    let key = hdWallet.derivePath("m/44'/60'/0'/0/0");
    return key._hdkey._privateKey.toString('hex');
};

exports.mnemonicToEthAddress = (mnemonic) => {
    let seed = bip39.mnemonicToSeed(mnemonic);
    let hdWallet = hdkey.fromMasterSeed(seed);
    let key = hdWallet.derivePath("m/44'/60'/0'/0/0");
    return eip55.encode("0x" + (util.pubToAddress(key._hdkey._publicKey, true)).toString('hex'));
};

exports.privateKeyToAddress = (privateKey) => {
    return '0x' + util.privateToAddress(Buffer.from(privateKey, 'hex')).toString('hex');
};
