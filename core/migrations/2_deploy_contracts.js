const Factory = artifacts.require("UniswapV2Factory.sol");
const Token1 = artifacts.require("Token1.sol");
const Token2 = artifacts.require("Token2.sol");
const Token3 = artifacts.require("Token3.sol");
const Token4 = artifacts.require("Token4.sol");

module.exports = async function (deployer, network, addresses) {
  //addresses used to pay the fees in the UNI Factory contract
  await deployer.deploy(Factory, addresses[0]);
  //send a transaction for the deployment
  const factory = await Factory.deployed();
  //waits for the deployment transaction to be mined
  let token1Address;
  let token2Address;
  let token3Address;
  let token4Address;

  if(network === 'mainnet'){
  // deployment made to mainnet - tokens considered already deployed - not our case
    token1Address = '';
    token2Address = '';
    token3Address = '';
    token4Address = '';
  } else {
  // deployment on local blockchain - using ganache
    await deployer.deploy(Token1);
    await deployer.deploy(Token2);
    await deployer.deploy(Token3);
    await deployer.deploy(Token4);
    const token1 = await Token1.deployed();
    const token2 = await Token2.deployed();
    const token3 = await Token3.deployed();
    const token4 = await Token4.deployed();
    token1Address = token1.address;
    console.log("Token1 deployed to:", token1Address);
    token2Address = token2.address;
    console.log("Token2 deployed to:", token2Address);
    token3Address = token3.address;
    console.log("Token3 deployed to:", token3Address);
    token4Address = token4.address;
    console.log("Token4 deployed to:", token4Address);
  }
  await factory.createPair(token1Address, token2Address);
  await factory.createPair(token1Address, token3Address);
  await factory.createPair(token1Address, token4Address);
  //executes the creation of the pairs we created

  
};
