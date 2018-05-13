const HDWAlletProvider = require('truffle-hdwallet-provider');
const Web3  = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWAlletProvider(
'will local problem govern armor risk icon pioneer hospital clock beef dust',
'https://rinkeby.infura.io/ncPX8dwwzFDA8pywepNB'
	)

const web3 =  new Web3(provider);

const deploy = async() => {
	const accounts = await web3.eth.getAccounts();
	console.log('Attempting to deploy from account', accounts[0])

	const result = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: '0x' + bytecode, arguments: ['Hi there']})
		.send({
			gas: '1000000',
			from: accounts[0],
			gasPrice: web3.utils.toWei('2', 'gwei')
		});

	console.log('contract deployed to ', result.options.address);

};

deploy();