
pragma solidity ^0.4.15;

contract Adoption {
	address[16] public adopters;
	
	// Adopting a pet
	function adopt(uint petId) public returns (uint) {
	  require(petId >= 0 && petId <= 15);
      require(adopters[petId] == 0);
      
	  adopters[petId] = msg.sender;

	  return petId;
	}
	
	// Retrieving the adopters
	function getAdopters() public returns (address[16]) {
	  return adopters;
	}
}
