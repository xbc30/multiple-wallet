const address = require('../utils/address');
const path = require('../utils/path');
const bitcoin = require('bitcoinjs-lib');
const networks = require('../utils/networks')
const util = require('ethereumjs-util');

const mnemonic = 'stable element chronic swift tell obvious hope display unique drum desert clarify';
const root = address.mnemonicToRoot(mnemonic);

const btcNode = address.deriveNode(root, path.btc);
const btcSegwitNode = address.deriveNode(root, path.btcSegwit);
const btcTestnetNode = address.deriveNode(root, path.btcTestnet);
const btcTestnetSegwitNode = address.deriveNode(root, path.btcTestnetSegwit);
const bchNode = address.deriveNode(root, path.bch);
const ethNode = address.deriveNode(root, path.eth);
const etcNode = address.deriveNode(root, path.etc);
const ltcNode = address.deriveNode(root, path.ltc);
const zecNode = address.deriveNode(root, path.zec)

const btcPrivate = address.derivePrivateKey(root, path.btc);
const btcSegwitPrivate = address.derivePrivateKey(root, path.btcSegwit);
const btcPrivateWif = address.encodeWif(btcPrivate, 'bitcoin');
const btcPrivateCompressWif = address.encodeCompressWif(btcPrivate, 'bitcoin');
const btcAddress = address.getAddress(btcNode, networks.bitcoin);
const btcSegwitPrivateWif = address.encodeCompressWif(btcSegwitPrivate, 'bitcoin');
const btcSegwitAddress = address.getSegwitAddress(btcSegwitNode, networks.bitcoin);

const btcTestnetPrivate = address.derivePrivateKey(root, path.btcTestnet);
const btcTestnetSegwitPrivate = address.derivePrivateKey(root, path.btcTestnetSegwit);
const btcTestnetPrivateWif = address.encodeWif(btcTestnetPrivate, 'testnet');
const btcTestnetPrivateCompressWif = address.encodeCompressWif(btcTestnetPrivate, 'testnet');
const btcTestnetAddress = address.getAddress(btcTestnetNode, networks.testnet);
const btcTestnetSegwitPrivateWif = address.encodeCompressWif(btcTestnetSegwitPrivate, 'testnet');
const btcTestnetSegwitAddress = address.getSegwitAddress(btcTestnetSegwitNode, networks.testnet);

const bchPrivate = address.derivePrivateKey(root, path.bch);
const bchPrivateWif = address.encodeWif(bchPrivate, 'bitcoincash');
const bchPrivateCompressWif = address.encodeCompressWif(bchPrivate, 'bitcoincash');
const bchAddress = address.getAddress(bchNode, networks.bitcoincash);

const ethPrivate = '0x' + address.derivePrivateKey(root, path.eth);
const ethAddress = '0x' + util.privateToAddress(ethPrivate).toString('hex');

const etcPrivate = '0x' + address.derivePrivateKey(root, path.etc);
const etcAddress = '0x' + util.privateToAddress(etcPrivate).toString('hex');

const ltcPrivate = address.derivePrivateKey(root, path.ltc);
const ltcPrivateWif = address.encodeWif(ltcPrivate, 'litecoin');
const ltcPrivateCompressWif = address.encodeCompressWif(ltcPrivate, 'litecoin');
const ltcAddress = address.getAddress(ltcNode, networks.litecoin);

const zecPrivate = address.derivePrivateKey(root, path.zec);
const zecPrivateWif = address.encodeWif(zecPrivate, 'zcash');
const zecPrivateCompressWif = address.encodeCompressWif(zecPrivate, 'zcash');
const zecAddress = address.getZecAddress(zecNode);

console.log('---------------btc--------------' + '\n' +
            'mnemonic: ' + mnemonic + '\n' +
            'btc private: ' + btcPrivate + '\n' +
            'btc private(WIF): ' + btcPrivateWif + '\n' +
            'btc private(cWIF): ' + btcPrivateCompressWif + '\n' +
            'btc address: ' + btcAddress + '\n' +
            'btc segwit private(cWIF): ' + btcSegwitPrivateWif + '\n' +
            'btc segwit address: ' + btcSegwitAddress + '\n' +
            '-----------btc-testnet---------' + '\n' +
            'btc testnet private: ' + btcTestnetPrivate + '\n' +
            'btc testnet private(WIF): ' + btcTestnetPrivateWif + '\n' +
            'btc testnet private(cWIF): ' + btcTestnetPrivateCompressWif + '\n' +
            'btc testnet address: ' + btcTestnetAddress + '\n' +
            'btc testnet segwit private(cWIF): ' + btcTestnetSegwitPrivateWif + '\n' +
            'btc testnet segwit address: ' + btcTestnetSegwitAddress + '\n' +
            '--------------bch-------------' + '\n' +
            'bch private: ' + bchPrivate + '\n' +
            'bch private(WIF): ' + bchPrivateWif + '\n' +
            'bch private(cWIF): ' + bchPrivateCompressWif + '\n' +
            'bch address: ' + bchAddress + '\n' +
            '--------------eth-------------' + '\n' +
            'eth private: ' + ethPrivate + '\n' +
            'eth address: ' + ethAddress + '\n' +
            '--------------etc-------------' + '\n' +
            'etc private: ' + etcPrivate + '\n' +
            'etc address: ' + etcAddress + '\n' +
            '--------------ltc-------------' + '\n' +
            'ltc private: ' + ltcPrivate + '\n' +
            'ltc private(WIF): ' + ltcPrivateWif + '\n' +
            'ltc private(cWIF): ' + ltcPrivateCompressWif + '\n' +
            'ltc address: ' + ltcAddress + '\n' +
            '--------------zec-------------' + '\n' +
            'zec private: ' + zecPrivate + '\n' +
            'zec private(WIF): ' + zecPrivateWif + '\n' +
            'zec private(cWIF): ' + zecPrivateCompressWif + '\n' +
            'zec address: ' + zecAddress + '\n');
