const crypto = require('crypto')
const bip39 = require('bip39');
const bip32 = require('bip32');
const base58 = require('bs58');
const cs = require('coinstring');
const bs58check = require('bs58check');
const createHash = require('create-hash');
const bitcoin = require('bitcoinjs-lib');
const networks = require('../utils/networks.js');

let address = {};

address.generateMnemonic = () => {
    return bip39.generateMnemonic();
};

address.mnemonicToRoot = (mnemonic) => {
    const seed = bip39.mnemonicToSeed(mnemonic)
    const root = bip32.fromSeed(seed)
    return root
}

address.deriveNode = (root, path) => {
    const node = root.derivePath(path);
    return node
}

address.derivePrivateKey = (root, path) => {
    const node = root.derivePath(path);
    return node.__d.toString('hex')
}

address.derivePublicKey = (root, path) => {
    const node = root.derivePath(path);
    return node.publicKey.toString('hex')
}

address.encodeWif = (privateKey, network) => {
    return cs.encode(Buffer.from(privateKey, 'hex'), networks[network].wif)
}


address.encodeCompressWif = (privateKey, network) => {
    // prefix
    const prefix = networks[network].wif.toString(16)
    let newKey = prefix + privateKey + '01';

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

address.getAddress = (node, network) => {
    return bitcoin.payments.p2pkh({ pubkey: node.publicKey, network }).address
}

address.getSegwitAddress = (node, network) => {
    return bitcoin.payments.p2sh({
        redeem: bitcoin.payments.p2wpkh({ pubkey: node.publicKey, network}),
        network: network
    }).address
}

address.getZecAddress = (node) => {
    const step1 = node.publicKey;
    const step2 = createHash('sha256').update(step1).digest();
    const step3 = createHash('rmd160').update(step2).digest();

    var step4 = Buffer.allocUnsafe(22);
    step4.writeUInt16BE(0x1cb8, 0);
    step3.copy(step4, 2);
    const step9 = bs58check.encode(step4);
    return step9
}

module.exports = address