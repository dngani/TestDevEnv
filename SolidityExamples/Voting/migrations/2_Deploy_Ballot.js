const Ballot = artifacts.require("Ballot");

module.exports = function(deployer) {
	var proposals =  [
			"0x43616e646964617431", "0x43616e646964617432", "0x43616e646964617433"
				];
  deployer.deploy(Ballot, proposals);
};
