const randomBytes = require('randombytes')
const BigInteger = require('bigi')
const ecurve = require('ecurve')
const crypto = require('crypto')
const cs = require('coinstring')

function generateWallet() {
    let randombytes = randomBytes(32).toString('hex');
    let privateKey = Buffer.from(randombytes, 'hex');
    let ecparams = ecurve.getCurveByName('secp256k1');
    let curvePt = ecparams.G.multiply(BigInteger.fromBuffer(privateKey));
    let x = curvePt.affineX.toBuffer(32);
    let y = curvePt.affineY.toBuffer(32);
    let publicKey = Buffer.concat([Buffer.from([0x04]), x, y]);
    let sha = crypto.createHash('sha256').update(publicKey).digest();
    let pubkeyHash = crypto.createHash('rmd160').update(sha).digest();
    let pri = cs.encode(privateKey, 0x80);
    let add = cs.encode(pubkeyHash, 0x0);
    return {
        privateKey: pri,
        address: add
    }
}

console.log(generateWallet());