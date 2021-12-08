pragma solidity = 0.5.16;

import '@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
//importing ERC20 contracts from openzeppelin

contract Token4 is ERC20Detailed, ERC20{
  constructor() ERC20Detailed('Token4', 'TK4', 18) public {}
}
