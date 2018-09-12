##UTXO  
* 未被耗费的事务输出
* btc 交易标准

##mnemonic export path(助记词导出路径)
* 0 -> BTC
* 2 -> LTC
* 60 -> ETH
* 133 -> ZEC

## private
* seed hdkey
* bip32 bip39 bip44 bip49 bip84 bip141
* m / purpose' / coin_type' / account' / change / address_index

##btc
* 助记词(多语言助记词) 私钥(WIF) 标准公钥 压缩公钥 公钥hash
* 校验和Base58编码
* 多重签名地址即隔离见证地址(3开头)
> 1. 更好的安全性。
> 2. 可以增大区块容量。
> 3. 检查交易更快速。  
> 4. 交易手续费会比普通地址类型 (以 1 开头的地址) 更便宜
* 普通地址(1开头)
* [api](https://www.blockcypher.com/dev/bitcoin/)
* 暂未找到btc网页钱包(可导入私钥)
* ex: 
> privateKey: 5HsNUNg8MxNowjhDsVm7WPqLP436Y2hp2mKKs926m6HRmQALGr5
> address: 1J8swJEZKyijESaqMk6YcoYjXmgREQGViB

##eth
* 助记词 私钥 公钥
* [api](https://infura.io/docs/api)
* [网页钱包](myetherwallet.com)

##usdt
* Omni Layer
* [api](https://api.omniexplorer.info/)

##zcash
* taddr(btc rpc) zaddr(zcash rpc)   
  taddr - 透明资金的地址（就像比特币地址，存储在UTXO中的值）  
  zaddr - 私人资金的地址（存储在称为笔记的对象中的值）
* api(btc api)
* [dev doc](https://zcash.readthedocs.io/en/latest/index.html)
* ex:
> privateKey: 5J7jtvdYjPG8LWtuKP2Ntgap71kxFjG6sYkBDWtdyfLjdFXwjrz
> address: t1VvDzHgnnz6ZARL1GsB3fNpC4npeqEpcNK
  
##litecoin
* ex: 
> privateKey: 6uHjHDbcEFzWEvVpw3W8yyJuSTjrGScVs2aZFhywyK94BADaeJh
> address: LNzE6FhtdQSTt64K13v5zVHEycKs3chwDc

##imtoken
* [闪兑](https://developer.kyber.network/docs/Start)
* [tokenlon](https://docs.token.im/tokenlon-sdk/en/) (0x.js) WETH
* [Dapp api](https://docs.token.im/dapp-sdk/en/)

##tool
* [chain.so](https://chain.so)
* [walletgenerator.net](https://walletgenerator.net)
* [bitcore](https://bitcoin.org/en/developer-reference)
* [mnemonic-bip39](https://iancoleman.io/bip39/)

##verify
* segwit address