const Router = artifacts.require("UniswapV2Router02.sol");
const WETH = artifacts.require("WETH.sol");

module.exports = async function (deployer, network) {
  let weth;
  const FACTORY_ADDRESS = '0xc3d96818aAe01e22B7Ba35f3495A04d50757b74c';
  // ganache generated address of the factory

  if(network === 'mainnet'){
    // using the mainnet WETH contract address
    weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
  } else {
    // using our own WETH contract address
    await deployer.deploy(WETH);
    // send transaction to deploy our WETH address
    weth = await WETH.deployed();
    // wait for the transaction to be mined
  }
  await deployer.deploy(Router, FACTORY_ADDRESS, weth.address);
  // deploying the router - first argument is the factory address, then the WETH contract address
};
