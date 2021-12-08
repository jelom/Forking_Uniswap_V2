const BonusToken = artifacts.require("BonusToken.sol");
const LiquidityMigrator = artifacts.require("LiquidityMigrator.sol");

module.exports = async function (deployer) {
  await deployer.deploy(BonusToken);
  const bonusToken = await BonusToken.deployed();

  const routerAddres = '';
  const pairAddress = '';
  const routerForkAddress = '';
  const pairForAddress = '';

  await deployer.deploy(
    LiquidityMigrator,
    routerAddres,
    pairAddress,
    routerForkAddress,
    pairForAddress,
    bonusToken.address
  );
  const liquidityMigrator = await LiquidityMigrator.deployed();
  await bonusToken.setLiquidator(liquidityMigrator.address);
};
