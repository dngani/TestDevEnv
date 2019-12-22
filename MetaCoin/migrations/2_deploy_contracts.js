const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("MetaCoin");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);

  var datas = new Object();

  datas.pageid = 1;
  datas.revid = 15;
  datas.url ="";
  datas.title = "";
  datas.description = "";
  datas.lastmodified = "";

  deployer.deploy(MetaCoin,{value:1000000000});
};
