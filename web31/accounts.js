
var Web3 = require('web3');

var web = new Web3('http://localhost:8545');

web.eth.getAccounts(function (err, accounts) {
	if (err)
		console.error(err);
	else
		console.dir(accounts);
});
