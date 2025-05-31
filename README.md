# blokkat-arabic-blockchain-developer-bootcamp-graduation-project
An NFT marketplace (Blokkat blockchain bootcamp graduation project)

# About this project
Marketplace to buy Bored Nasser fency NFTs through Scroll Sepolia Testnet, with a limit of NFTs you can buy (managed by the owner of the smart contract).

The smart contract written in Solidity Programming language and deployed using Foundry.

# Design patterns

  -Inheritance and Interfaces
  -
  Imported required openzeppelin libraries ( ERC721, ERC721URIStorage, Ownable ).
  
  -Access Control Design Patterns
  -
  Restricting access to certain function ( setMaxSupply ) so only the owner of the smart contract can change the max supply cap.
  

# Security best practices

  -Using Specific Compiler Pragma
  -
  Used 0.8.26 Solidity compiler version without floating pragma.
  
  -Proper Use of Require
  -
  Used require statement in the function ( mintNFT ) to make sure no one can mint more than "maxSupply" NFTs.
