const bitcoin = require('bitcoinjs-lib');
const testnet = bitcoin.networks.testnet;
const https = require('https');
const Primise = require('bluebird');
const config = require('../config/config');
let tx = {}

tx.request = (host, path, method, data) => {
    return new Primise((resolve, reject) => {
        const options = {
            hostname: host,
            port: 443,
            path: path,
            method: method
        };

        let postData = JSON.stringify(data);

        const req = https.request(options, (res) => {
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                resolve(JSON.parse(chunk));
            });
            res.on('end', () => {
            });
        });

        req.on('error', (e) => {
            reject(e);
        });
        req.write(postData);
        req.end();
    })
}

tx.createTx = (data) => {
    return new Primise((resolve, reject) => {
        req.request('api.blockcypher.com', '/v1/btc/test3/txs/new', 'POST', data).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

tx.getUtxo = (net, address) => {
    return new Primise((resolve, reject) => {
        if (net === 1) {
            req.request('blockchain.info', '/unspent?active=' + address, 'GET', '').then(res => {
                resolve(res['unspent_outputs'])
            }).catch(err => {
                reject(err)
            })
        } else if (net === 2) {
            req.request('testnet.blockchain.info', '/unspent?active=' + address, 'GET', '').then(res => {
                resolve(res['unspent_outputs'])
            }).catch(err => {
                reject(err)
            })
        }
    })
}

// testnet
tx.createTxHex = (utxo, privateKey, toAddress, toAmount, fee, changeAddress) => {
    return new Primise((resolve, reject) => {
        // 1. 导入私钥用于签名
        let keys = bitcoin.ECPair.fromWIF(privateKey, testnet);
        // 2. 初始化交易对象
        let txb = new bitcoin.TransactionBuilder(bitcoin.networks.testnet);
        // 3. 设置交易版本号
        txb.setVersion(1);
        // 4. 用于记录UTXO总量
        var totalAmount=0;
        // 5. 将UTXO的相关信息依次填入交易体中
        for( let i=0; i < utxo.length; i++ ) {
            txb.addInput(utxo[i].tx_hash_big_endian, utxo[i].tx_output_n);
            totalAmount += utxo[i].value;
        }
        // 6. 填入转出目标地址和对应的金额
        txb.addOutput(toAddress, toAmount);
        // 7. 填入找零地址，并填入把找零金额
        txb.addOutput(changeAddress, totalAmount-toAmount-fee);
        // 8. 对交易体中的UTXO依次签名
        for( let i=0; i < utxo.length; i++ ){
            txb.sign(i, keys);
        }
        // 9. 得到最终交易序列
        resolve(txb.buildIncomplete().toHex())
    })
}

tx.createSegwitTxHex = (utxo, privateKey, toAddress, toAmount, fee, changeAddress) => {
    return new Primise((resolve, reject) => {
        // 1. 导入私钥用于签名
        let keys = bitcoin.ECPair.fromWIF(privateKey, testnet);
        // 2. 初始化交易对象
        let txb = new bitcoin.TransactionBuilder(bitcoin.networks.testnet);
        // 3. 设置交易版本号
        txb.setVersion(1);
        // 4. 用于记录UTXO总量
        var totalAmount=0;
        // 5. 将UTXO的相关信息依次填入交易体中
        for( let i=0; i < utxo.length; i++ ) {
            txb.addInput(utxo[i].tx_hash_big_endian, utxo[i].tx_output_n);
            totalAmount += utxo[i].value;
        }
        // 6. 填入转出目标地址和对应的金额
        txb.addOutput(toAddress, toAmount);
        // 7. 填入找零地址，并填入把找零金额
        txb.addOutput(changeAddress, totalAmount-toAmount-fee);
        // 8. 对交易体中的UTXO依次签名
        for( let i=0; i < utxo.length; i++ ){
            txb.sign(i, keys);
        }
        // 9. 得到最终交易序列
        resolve(txb.buildIncomplete().toHex())
    })
}

// testnet
tx.decodeTxHex = (txHex) => {
    return new Primise((resolve, reject) => {
        req.request('api.blockcypher.com', '/v1/btc/test3/txs/decode?token=' + config['token'], 'POST', {'tx': txHex}).then(res => {
            resolve(res)
        }).catch(err => {
            reject('decode error')
        })
    })
}

// testnet
tx.pushTxHex = (txHex) => {
    return new Primise((resolve, reject) => {
        req.request('api.blockcypher.com', '/v1/btc/test3/txs/push?token=' + config['token'], 'POST', {'tx': txHex}).then(res => {
            resolve(res['tx']['hash'])
        }).catch(err => {
            reject('push error')
        })
    })
}

// testnet
tx.queryTxHash = (txHash) => {
    return new Primise((resolve, reject) => {
        req.request('api.blockcypher.com', '/v1/btc/test3/txs/' + txHash, 'GET', '').then(res => {
            resolve(res)
        }).catch(err => {
            reject('query error')
        })
    })
}

tx.getFeesBytes = () => {
    return new Primise((resolve, reject) => {
        req.request('bitcoinfees.earn.com', '/api/v1/fees/recommended', 'GET', '').then(res => {
            resolve(res['fastestFee'])
        }).catch(err => {
            reject('query error')
        })
    })
}

module.exports = tx;