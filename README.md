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

# Important links & addresses

* Main smart contract address on Scroll Sepolia testnet:
  0x0bbE23735F406E98F11A7Be7d3ff4a1B2ed3AE6a

  
* Smart contract link on Scroll Sepolia testnet:
  https://sepolia.scrollscan.com/address/0x0bbE23735F406E98F11A7Be7d3ff4a1B2ed3AE6a

# How to run tests
After installing Foundry,
In Backend foundry-project run: forge test

* configuring the project:
  run: cast wallet import YOUR_KEY_NAME --interactive
  
  then enter a password

* and in .env file:
PASSWORD: YOUR PRIVATE KEY PASSWORD


To deploy: forge create BoredNasser --account YOUR_KEY_NAME --rpc-url $RPC_URL --password $PASSWORD --broadcast

or simply run: make deploy

# how to run the program

In the Frontend bored-nasser-nft-marketplace Directory run: npm run dev
then, http://localhost:3000/
