# TestDevEnv
 A development environment for tests purposes. Testing ethereum smart contracts, wikipedia API, truffle and ganache.


# Ethereum

# WikiPedia

# Truffle

# Ganache

#Steps with Truffle and Ganache

1. Open the command line
2. Go into the folder where you want to create the project
3. Create the folder with the project name. On windows ```mkdir <project name>```
4. Initialize the truffle project. ```truffle init```
	this command will generate the basic folders and files for starting a truffle project
5. Edit the configuration: <project Name>/truffle-config.js
	we can configure compiler, network, provider, etc. 
6. Start Ganache and make sure to add the truffle project to the desired workspace.
7. Create your contracts in the folder <project name>/contracts
8. Execute the first tests on the smart contracts: ```truffle test```
	The tests simulate a temporary deployment and show the errors (compilation, connection, typing, etc...). If there are no (more) errors, we can continue with the next step.
9. Compiling the smart contracts: ```truffle compile```
	This will generate many JSON-Files into the folder <project Name>/build/contracts
10. Create migrations files for each smart contracts into <project Name>/migrations/.
	we have to define how truffle should be deploy every single contracts. **It´s important to write it and make sure to specify the parameters needed by the constructors.** We can also use that to set the custom parameters, we want to test.
11. Execute the migration to 
	- a private blockchain (for example a blockchain create with Ganache),
	- a testnet (Ropsten, etc.),
	- a live network.

	```
	truffle migrate <networkname>;
	```
	The configuartion that have done in step 5. almost play the most important role.



