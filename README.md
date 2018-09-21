# multiple-wallet
>整理了多链钱包开发中所使用的工具网站，希望对开发者有所帮助
## [bips](https://github.com/bitcoin/bips)
* bip32 bip39 bip44 bip49 bip84 bip141

## btc
* 助记词(多语言助记词) 私钥(WIF) 标准公钥 压缩公钥 公钥hash
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
* bip84 2-to-3 segwit
* 回执脚本 redeemScript

## node_gyp
> npm config set python G:/python27/python.exe  
> npm config set msvs_version 2015 --global

## test
curl https://api.blockcypher.com/v1/btc/main/txs/a3093da72c266370ba198a26e9ba0d5ec8800d9f4811fa61094f758b578b3eae
curl https://api.blockcypher.com/v1/btc/main/addrs/176SrQoGGGVAHAXeeSKnJk8Fd9ApS542WA

## token fee
* fee = (in*148+34*out+10)* X satoshis / byte

## token blockchain explorer
* [Bitcoin](https://blockchain.info/)
* [Bitcoin Testnet1](https://live.blockcypher.com/btc-testnet/)
* [Bitcoin Testnet2](https://www.blocktrail.com/tBTC)
* [Bitcoin Cash](https://explorer.bitcoin.com/bch)
* [Ethereum](https://etherscan.io/)
* [Ethereum Classic](https://gastracker.io/)
* [Eos](https://eosmonitor.io/)
* [Litecoin](https://live.blockcypher.com/ltc/)
* [Zcash](https://explorer.zcha.in/)

## token testnet faucet
* [btc](https://coinfaucet.eu/en/btc-testnet/)
* [bch](https://www.wormhole.cash/test/)
* [eth ropsten](https://faucet.ropsten.be/)
* [etc](https://testnet.epool.io/)
* [eos](https://tools.cryptokylin.io/#/tools/create)
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
* [eos]()

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
