let tx = require('./tx.js');

// 1 to 1
tx.getUtxo(2, 'mtcy2AV45rBtWWYG9k6JLNY572Mfu3ZXpj').then(utxoRes => {
    tx.createTxHex(utxoRes, 'cSYJrNEiEwrMFodNs2P9ox6unVaQvCcGwCyTpWJAj4fyYVV9QYvA', '2NDuLwQaC2JcFEJ6g8Tf1FEiy3Bfbp9gpGj', 1e6, 1e4, 'mtcy2AV45rBtWWYG9k6JLNY572Mfu3ZXpj').then(txHexRes => {
        tx.pushTxHex(txHexRes).then(pushTxHashRes => {
            tx.queryTxHash(pushTxHashRes).then(txHashRes => {
                console.log(txHashRes)
            })
        })
    })
});


// push
// curl -d '{"tx":"0100000002442a758cbbefc6fa8e63341fcb8ec8774d1d32845e95dc38006c377d53b9e171000000006a473044022018a619060b6590048fab3eed6c34780c02d129c072a2f86c61212e338e92f9c5022032ee0ad5b93864f327e4ae6da6475d38217246b9629d677ef1e609f985b9947e0121028ff43140a086742fcbca1b171eafd8ea2e1c32c57c3315eb1d7d2c70b17f2344ffffffff1ff178205154ba1dbc0ba9a0199405b949b1a3bcf20164188b5bb31d511f3011220000006b4830450221009061808d5d091f3037cdcd375f9970765bee07ddbeb12334c39345ba82e0b38e02202c72c7fc6bc3368bb1eb23472fb5df75033eb8382f5f43f49f430160d3a0f4280121028ff43140a086742fcbca1b171eafd8ea2e1c32c57c3315eb1d7d2c70b17f2344ffffffff0200000000000000001976a9140e7ccae718f92172366c497f541875ddbfa62e7988acb83e3202000000001976a9148fbcbcadd2bfd624e9f576ff707de7c8c18f3baa88ac00000000"}' https://api.blockcypher.com/v1/btc/test3/txs/push?token=a5f81fca089345ee8563be3d2c1ccc24

// decode
// curl -d '{"tx":"0100000002442a758cbbefc6fa8e63341fcb8ec8774d1d32845e95dc38006c377d53b9e171000000006a473044022018a619060b6590048fab3eed6c34780c02d129c072a2f86c61212e338e92f9c5022032ee0ad5b93864f327e4ae6da6475d38217246b9629d677ef1e609f985b9947e0121028ff43140a086742fcbca1b171eafd8ea2e1c32c57c3315eb1d7d2c70b17f2344ffffffff1ff178205154ba1dbc0ba9a0199405b949b1a3bcf20164188b5bb31d511f3011220000006b4830450221009061808d5d091f3037cdcd375f9970765bee07ddbeb12334c39345ba82e0b38e02202c72c7fc6bc3368bb1eb23472fb5df75033eb8382f5f43f49f430160d3a0f4280121028ff43140a086742fcbca1b171eafd8ea2e1c32c57c3315eb1d7d2c70b17f2344ffffffff0200000000000000001976a9140e7ccae718f92172366c497f541875ddbfa62e7988acb83e3202000000001976a9148fbcbcadd2bfd624e9f576ff707de7c8c18f3baa88ac00000000"}' https://api.blockcypher.com/v1/btc/test3/txs/decode?token=a5f81fca089345ee8563be3d2c1ccc24
// curl -d '{"tx":"01000000011935b41d12936df99d322ac8972b74ecff7b79408bbccaf1b2eb8015228beac8000000006b483045022100921fc36b911094280f07d8504a80fbab9b823a25f102e2bc69b14bcd369dfc7902200d07067d47f040e724b556e5bc3061af132d5a47bd96e901429d53c41e0f8cca012102152e2bb5b273561ece7bbe8b1df51a4c44f5ab0bc940c105045e2cc77e618044ffffffff0240420f00000000001976a9145fb1af31edd2aa5a2bbaa24f6043d6ec31f7e63288ac20da3c00000000001976a914efec6de6c253e657a9d5506a78ee48d89762fb3188ac00000000"}' https://api.blockcypher.com/v1/bcy/test/txs/decode?token=a5f81fca089345ee8563be3d2c1ccc24

// utxo
// curl https://testnet.blockchain.info/unspent?active=mtcy2AV45rBtWWYG9k6JLNY572Mfu3ZXpj
// curl https://blockexplorer.com/testnet/api/addr/mytYYKhb2fLU4VKTDzSKLXAgzdP67J1gnc/utxo

// testnet address
// mytYYKhb2fLU4VKTDzSKLXAgzdP67J1gnc from_address
// mgqZFUqQTc74Ry5DN2tTUEQQWnMERRWSxL to_address

// address balance
// curl https://api.blockcypher.com/v1/btc/test3/addrs/mytYYKhb2fLU4VKTDzSKLXAgzdP67J1gnc
// curl -d '{"inputs":[{"addresses": ["mytYYKhb2fLU4VKTDzSKLXAgzdP67J1gnc"]}],"outputs":[{"addresses": ["mgqZFUqQTc74Ry5DN2tTUEQQWnMERRWSxL"], "value": 10000}]}' https://api.blockcypher.com/v1/btc/test3/txs/new
