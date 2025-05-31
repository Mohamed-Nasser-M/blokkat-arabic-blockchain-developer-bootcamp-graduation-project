// SPDX-License-Identifier: MIT

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

pragma solidity 0.8.26;
contract BoredNasser is ERC721URIStorage, Ownable{

    uint256 private _tokenIDCounter;
    uint256 public maxSupply = 100 ;
    mapping(address => uint256) private ledger;

    constructor() ERC721("BoredNasser", "BNS") Ownable(msg.sender){

    }

    function mintNFT(string memory jsonURI) public returns(uint256) {
        require(ledger[msg.sender] < maxSupply, "Exceeded number of Mints");
        uint256 newTockenId = _tokenIDCounter;
        ledger[msg.sender]++;
        _mint(msg.sender, newTockenId);
        _setTokenURI(newTockenId, jsonURI);
        _tokenIDCounter++;

        return newTockenId;
    }

    function getMaxSupply()public view returns (uint256){
        return maxSupply;
    }

    function setMaxSupply()public onlyOwner returns (uint256){
        maxSupply = maxSupply+50;

        return maxSupply;
    }
}