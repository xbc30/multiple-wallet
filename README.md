# multiple-wallet

>整理了多链钱包开发中所使用的工具网站，希望对开发者有所帮助

## [bips](https://github.com/bitcoin/bips)
* bip32 bip39 bip44 bip49 bip84 bip141


## btc

* 助记词(国际化助记词) 私钥(WIF) 标准公钥 压缩公钥 公钥hash
* 校验和Base58编码
* 多重签名地址即隔离见证地址(3开头)

> 1. 更好的安全性。
> 2. 可以增大区块容量。
> 3. 检查交易更快速。  
> 4. 交易手续费会比普通地址类型 (以 1 开头的地址) 更便宜

## usdt

* Omni Layer

## zcash

> taddr(btc rpc) zaddr(zcash rpc)
  taddr - 透明资金的地址（就像比特币地址，存储在UTXO中的值）  
  zaddr - 私人资金的地址（存储在称为笔记的对象中的值）

## imtoken

* [闪兑](https://developer.kyber.network/docs/Start)
* [exchange](https://changelly.com/developers)
* [tokenlon](https://docs.token.im/tokenlon-sdk/en/) (0x.js) WETH
* [Dapp api](https://docs.token.im/dapp-sdk/en/)

## tool

* [chain.so](https://chain.so)
* [walletgenerator.net](https://walletgenerator.net)
* [bitcore-reference](https://txTest.org/en/developer-reference)
* [bitcore-guide](https://txTest.org/en/developer-guide)
* [bip32](http://bip32.org/)
* [bip39](https://iancoleman.io/bip39/)
* [hdwallet](http://webhdwallet.github.io/)

## verify

* 计算bytes
* 回执脚本 redeemScript
* for signature error(segwit zec)
* eos(transfer vote create)
* 闪兑

## test

```sh
curl https://api.blockcypher.com/v1/btc/main/txs/a3093da72c266370ba198a26e9ba0d5ec8800d9f4811fa61094f758b578b3eae
curl https://api.blockcypher.com/v1/btc/main/addrs/176SrQoGGGVAHAXeeSKnJk8Fd9ApS542WA
```

## token fee

* btc

> fee = (in*148+34*out+10)* X satoshis / byte

## token blockchain explorer

* [Bitcoin](https://blockchain.info/)
* [Bitcoin Testnet1](https://live.blockcypher.com/btc-testnet/)
* [Bitcoin Testnet2](https://www.blocktrail.com/tBTC)
* [Usdt](https://omniexplorer.info/)
* [Usdt Testnet](https://www.blocktrail.com/tBTC)
* [Bitcoin Cash](https://www.blocktrail.com/BCC)
* [Bitcoin Cash Testnet](https://www.blocktrail.com/tBCC)
* [Ethereum](https://etherscan.io/)
* [Ethereum Ropsten](https://ropsten.etherscan.io)
* [Ethereum Classic](https://gastracker.io/)
* [Ethereum Classic Morden](http://mordenexplorer.ethernode.io/home)
* [Eos](https://eosmonitor.io/)
* [Eos Testnet](https://jungle.bloks.io/)
* [Litecoin](https://live.blockcypher.com/ltc/)
* [Litecoin Testnet](http://explorer.litecointools.com/)
* [Zcash](https://explorer.zcha.in/)
* [Zcash Testnet](https://explorer.testnet.z.cash)

## token testnet faucet

* [btc](https://coinfaucet.eu/en/btc-testnet/)
* [bch](https://www.wormhole.cash/test/)
* [eth ropsten](https://faucet.ropsten.be/)
* [etc](https://testnet.epool.io/)
* [eos](http://jungle.cryptolions.io/#faucet)
* [ltc](http://testnet.litecointools.com/)
* [zec](https://faucet.testnet.z.cash/)

## token third-party dev api

* [btc](https://www.blockcypher.com/dev/bitcoin/)
* [bch]()
* [eth](https://infura.io/docs/api)
* [eos]()
* [usdt](https://api.omniexplorer.info/)
* [zec](https://zcash.readthedocs.io/en/latest/index.html)

## token web wallet

* [btc]()
* [eth](https://myetherwallet.com/)
* [etc](https://ethereumproject.github.io/etherwallet/)

## mnemonic derive path

> m / purpose' / coin_type' / account' / change / address_index
* btc: "m/44'/0'/0'/0/0"
* btcSegwit: "m/49'/0'/0'/0/0"
* btcTestnet: "m/44'/1'/0'/0/0"
* btcTestnetSegwit: "m/49'/1'/0'/0/0"
* bch: "m/44'/145'/0'/0/0"
* eth: "m/44'/60'/0'/0/0"
* etc: "m/44'/61'/0'/0/0"
* ltc: "m/44'/2'/0'/0/0"
* zec: "m/44'/133'/0'/0/0"

## Usage

**Shell**

```
$ node ./tools/utils/addressTest.js
```

**Result:**

```log
// output
------------mnemonic------------
actress ahead crater inmate sorry lady castle jewel heart flip relax prefer  
---------------trx--------------
trx private: 6bc04a2ba64e6c1716bae7aaafc0c639d8e871f414d9e986d63576f565eb70fd
---------------btc--------------
btc private: 01e0d3e0530af62bc63ae21c7e5fe2b454f7c532c60b38e87a87bb0aa97cee7d
btc private(WIF): 5Hq7ZLsuKDRv4dWvM8DkzUBK1a3uNhfXaHsFLCzSwnXpnbsQvbt
btc private(cWIF): KwHMwkjfuPryD2B4TpsKAexWVWspAnV3wwSnFmvZWoy3uwfTm4q1
btc address: 1JswKydSQzusq7nPkwZXAv2wcaRiMxGkce
-----------btc-segwit---------
btc segwit private: 131bf8a484ac6e19095097d2b566a3e801f2b60e67f3ca38af594696cba2382f
btc segwit private(cWIF): KwrreVrL2ej2BQGXJg1D9cpN6r5jFJn7ivqRMnjYrMKsHU5qwEKW
btc segwit address: 3FJ1SSJD1HrEurq2dC4gBP8tiETwjYWykD
btc testnet private: dbd08c95fdf9e96600dc9c44b6739ab0add8afd2bafd2b95edc2a4ae4749e5fc
btc testnet segwit private(cWIF): cUwzXKCENzSjsVBNqhjTKEeKFKQSkH857KxChZBcnhiUzubedRyp
btc testnet segwit address: 2MvPM4Eu3swVYQCRJBQncaydhybHbHtQDmn
--------------bch-------------
bch private: 90f205e4368d0262e3812d2440c349ef0fe2c19f57091965c464cc5aa7c75ee9
bch private(WIF): 5Jv81xNScVXNW7CdpMn2JANjvSSBCJnojKMXhwjDyLNG9FQhgid
bch private(cWIF): L25TyDPe3eu3uUNMW2hiikNxSsG7zuXBFn1cXiZNFeUqpz4qYpsS
bch address: 1JLNCAqST8Vxk2HRixhLjAzUYq7FvY6a8N
--------------ltc-------------
ltc private: b5fa42c3eaac3f0199271d6dec9d91e08da40dcc37d8e35a1c28a8a8d4c09b7c
ltc private(WIF): 6vWART1jXWc6GsSCzRkWbckcjuNcB5HHCjXzxBDEjYyKVQeAHPF
ltc private(cWIF): T99iaupEhfftH3cFvUF3dnoWkNANFTtrWnjpnY51cp7acFhx1Ndy
ltc address: LhHQv5Zw7yjE5Ferhhv2c2DCBCzAAnRd62
--------------zec-------------
zec private: 68c1ee5b095a0658511109203773a5193636ce7f5945e22abceab178fb37faac
zec private(WIF): 5JcRUMFJaTAVHggcACJMykQ2kYHWqK9rcCT44rKQcX2C9gWWAno
zec private(cWIF): KzjM1iN8aeUsre9pBasdbUYejB5tgF85xMXzXzgFDmWGDGERA2oE
zec address: t1LMrLwDH3P3wqYfu8GGsCdcZZ9ftRDefuS
--------------eth-------------
eth private: 0x219b9ca121b15069d8f19c55ca1631ae0c2672f19dd9f9a83f560b533e6c2b7e
eth address: 0x01ec777718eb95500427cdcbe860af13c40823f0
--------------etc-------------
etc private: 0x5383ec5be77c755810972a0b1b920fb2382487c4c433ffc16004a410f53fbd46
etc address: 0x52e0716b44817f161b6cb14e76ce1ec9e220d862
------------testnet-------------
testnet private: e93a2d664e9f0ec69bff9a4ff2abc2e0f37253211aa48895199f3ca753190133
testnet private(WIF): 93Mde6cFJYgnGTG76nK1B1RZPyv9juikH754L6BrQ8bTSWq2rL4
testnet private(cWIF): cVQ4ijka8SraoCufvWzTmAsPzSDbaPhG25nuhFtu36X5hZqr64gZ
btc testnet address: myvisn3WdDnyrczRqgbYdgNvBh1CFVwP3r
bch testnet address: myvisn3WdDnyrczRqgbYdgNvBh1CFVwP3r
ltc testnet address: myvisn3WdDnyrczRqgbYdgNvBh1CFVwP3r
zec testnet address: tmU87uts5BBeppPm9jGk2oEwGBLgPcFaLmn
```