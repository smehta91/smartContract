const assert  = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const {interface, bytecode} = require('../compile')

const web3 = new Web3(ganache.provider());
let accounts, inbox;
const initString = 'Hello Blockchain'
beforeEach(async () => {
	// get a list of all accounts
	accounts = await web3.eth.getAccounts();
	inbox = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({data: bytecode, arguments: [initString]})
		.send({ from: accounts[0], gas: '1000000' })
	//use one of the account to deploy the contract
})
describe('Inbox', () => {
	it('deploys a contract', () => {
		assert.ok(inbox.options.address);
	});

	it('has a default message', async () => {
		const message = await inbox.methods.message().call()
		assert.equal(message, initString)
	});

	it('can change the message', async () => {
		await inbox.methods.setMessage('init transaction').send({ from: accounts[0] })
		const message = await inbox.methods.message().call()
		assert.equal(message, 'init transaction')
	})
})