const randomBytes = require('randombytes')
const BigInteger = require('bigi')
const ecurve = require('ecurve')
const crypto = require('crypto')
const cs = require('coinstring')

let secp256k1 = ecurve.getCurveByName('secp256k1')
let randombytes = randomBytes(32).toString('hex')
let privateKey = Buffer.from(randombytes, 'hex')
let ecparams = ecurve.getCurveByName('secp256k1')
let curvePt = ecparams.G.multiply(BigInteger.fromBuffer(privateKey))
let x = curvePt.affineX.toBuffer(32)
let y = curvePt.affineY.toBuffer(32)
let publicKey = Buffer.concat([Buffer.from([0x04]), x, y])
// publicKey = curvePt.getEncoded(true)
let sha = crypto.createHash('sha256').update(publicKey).digest()
let pubkeyHash = crypto.createHash('rmd160').update(sha).digest()
console.log("私钥:" + privateKey.toString('hex'))
console.log("标准私钥：" + cs.encode(privateKey, 0x80))
console.log("标准公钥地址:" + publicKey.toString('hex'))
console.log("公钥hash:" + pubkeyHash.toString('hex'))
console.log("地址：" + cs.encode(pubkeyHash, 0x0))
// 2rf8PvzW77EmdLEooqujY5hS7G7Nw9wmAqsAoJN5oE7W
/*
let
    pubKey1 = '026477115981fe981a6918a6297d9803c4dc04f328f22041bedff886bbc2962e01',
    pubKey2 = '02c96db2302d19b43d4c69368babace7854cc84eb9e061cde51cfa77ca4a22b8b9',
    pubKey3 = '03c6103b3b83e4a24a0e33a4df246ef11772f9992663db0c35759a5e2ebf68d8e9',
    pubKeys = [pubKey1, pubKey2, pubKey3].map(s => Buffer.from(s, 'hex'));

console.log(pubKeys);*/
