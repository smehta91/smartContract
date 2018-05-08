# Notes 

* `web3.eth.Contract`  is a constructor function that is either used for interacting with existing contract or create new contract
* `compile` returns an ABI and bytecode
* ABI is returned in JSON format
* `deploy` function on contract object tells web3 to deploy the copy of contract on the network. It takes in an object such as. 
	```{data: bytecode, arguments: [arg1, arg2]}```
* `deploy` function doesnot actually deploy contract. It creates an object to deploy after using `send` function
