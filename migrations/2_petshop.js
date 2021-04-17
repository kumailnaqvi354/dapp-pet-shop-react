var petshop = artifacts.require("./petshop.sol");

module.exports = function(deployer) {
  deployer.deploy(petshop);
};
