"use client";

import {useReadContract, useWriteContract } from "wagmi";

export default function Home() {
    const imageCount = 6;
  
  const wagmiContractConfig = {
      address: "0x0bbE23735F406E98F11A7Be7d3ff4a1B2ed3AE6a",
      abi:[{"type":"constructor","inputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"approve","inputs":[{"name":"to","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"balanceOf","inputs":[{"name":"owner","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"getApproved","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"getMaxSupply","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"isApprovedForAll","inputs":[{"name":"owner","type":"address","internalType":"address"},{"name":"operator","type":"address","internalType":"address"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"maxSupply","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"view"},{"type":"function","name":"mintNFT","inputs":[{"name":"jsonURI","type":"string","internalType":"string"}],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"name","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"owner","inputs":[],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"ownerOf","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"address","internalType":"address"}],"stateMutability":"view"},{"type":"function","name":"renounceOwnership","inputs":[],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"safeTransferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"safeTransferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"data","type":"bytes","internalType":"bytes"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setApprovalForAll","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"approved","type":"bool","internalType":"bool"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"setMaxSupply","inputs":[],"outputs":[{"name":"","type":"uint256","internalType":"uint256"}],"stateMutability":"nonpayable"},{"type":"function","name":"supportsInterface","inputs":[{"name":"interfaceId","type":"bytes4","internalType":"bytes4"}],"outputs":[{"name":"","type":"bool","internalType":"bool"}],"stateMutability":"view"},{"type":"function","name":"symbol","inputs":[],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"tokenURI","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[{"name":"","type":"string","internalType":"string"}],"stateMutability":"view"},{"type":"function","name":"transferFrom","inputs":[{"name":"from","type":"address","internalType":"address"},{"name":"to","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"function","name":"transferOwnership","inputs":[{"name":"newOwner","type":"address","internalType":"address"}],"outputs":[],"stateMutability":"nonpayable"},{"type":"event","name":"Approval","inputs":[{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"approved","type":"address","indexed":true,"internalType":"address"},{"name":"tokenId","type":"uint256","indexed":true,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"ApprovalForAll","inputs":[{"name":"owner","type":"address","indexed":true,"internalType":"address"},{"name":"operator","type":"address","indexed":true,"internalType":"address"},{"name":"approved","type":"bool","indexed":false,"internalType":"bool"}],"anonymous":false},{"type":"event","name":"BatchMetadataUpdate","inputs":[{"name":"_fromTokenId","type":"uint256","indexed":false,"internalType":"uint256"},{"name":"_toTokenId","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"MetadataUpdate","inputs":[{"name":"_tokenId","type":"uint256","indexed":false,"internalType":"uint256"}],"anonymous":false},{"type":"event","name":"OwnershipTransferred","inputs":[{"name":"previousOwner","type":"address","indexed":true,"internalType":"address"},{"name":"newOwner","type":"address","indexed":true,"internalType":"address"}],"anonymous":false},{"type":"event","name":"Transfer","inputs":[{"name":"from","type":"address","indexed":true,"internalType":"address"},{"name":"to","type":"address","indexed":true,"internalType":"address"},{"name":"tokenId","type":"uint256","indexed":true,"internalType":"uint256"}],"anonymous":false},{"type":"error","name":"ERC721IncorrectOwner","inputs":[{"name":"sender","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"},{"name":"owner","type":"address","internalType":"address"}]},{"type":"error","name":"ERC721InsufficientApproval","inputs":[{"name":"operator","type":"address","internalType":"address"},{"name":"tokenId","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"ERC721InvalidApprover","inputs":[{"name":"approver","type":"address","internalType":"address"}]},{"type":"error","name":"ERC721InvalidOperator","inputs":[{"name":"operator","type":"address","internalType":"address"}]},{"type":"error","name":"ERC721InvalidOwner","inputs":[{"name":"owner","type":"address","internalType":"address"}]},{"type":"error","name":"ERC721InvalidReceiver","inputs":[{"name":"receiver","type":"address","internalType":"address"}]},{"type":"error","name":"ERC721InvalidSender","inputs":[{"name":"sender","type":"address","internalType":"address"}]},{"type":"error","name":"ERC721NonexistentToken","inputs":[{"name":"tokenId","type":"uint256","internalType":"uint256"}]},{"type":"error","name":"OwnableInvalidOwner","inputs":[{"name":"owner","type":"address","internalType":"address"}]},{"type":"error","name":"OwnableUnauthorizedAccount","inputs":[{"name":"account","type":"address","internalType":"address"}]}] }

  const { data: counter, isError, refetch} = useReadContract({
	...wagmiContractConfig,
	functionName: "getMaxSupply",
  });

  const handlegetMaxSupply = async() => {
	try {
    await refetch();
    console.log(`counter: ${counter.toString()}`);
	} catch(error) {
		console.error(`Error fetching counter: ${error}`)
	}
  }

  const { writeContract } = useWriteContract();

  	const setMaxSupply = async() => {
    	writeContract({
      	...wagmiContractConfig,
      	functionName: "setMaxSupply"
    	});
  	}

  const mint = async() => {
    writeContract({
      ...wagmiContractConfig,
      functionName: "mintNFT",
      args:["https://white-eligible-antlion-716.mypinata.cloud/ipfs/bafkreig4nkfwiy7mx5oxw25fmbyqv5onollbbfa7hr2jbhxruamhpqo54e"]
    });
  }

  const mint2 = async() => {
    writeContract({
      ...wagmiContractConfig,
      functionName: "mintNFT",
      args:["https://white-eligible-antlion-716.mypinata.cloud/ipfs/bafkreidfnam3cwpzderwdbgokkduwj3hort7dvnqhxkxmpcydlwvwlduai"]
    });
  }

  const mint3 = async() => {
    writeContract({
      ...wagmiContractConfig,
      functionName: "mintNFT",
      args:["https://white-eligible-antlion-716.mypinata.cloud/ipfs/bafkreihwekwbfm5hr6ehhyqkf7qlmik4n3yzerbjimcgiuvkikxbz5paca"]
    });
  }

  const mint4 = async() => {
    writeContract({
      ...wagmiContractConfig,
      functionName: "mintNFT",
      args:["https://white-eligible-antlion-716.mypinata.cloud/ipfs/bafkreibfu6uqxfcoztzxxlopza5h2bqg25g3rmpfmpz6idy2oydsqkx6lq"]
    });
  }

  const mint5 = async() => {
    writeContract({
      ...wagmiContractConfig,
      functionName: "mintNFT",
      args:["https://white-eligible-antlion-716.mypinata.cloud/ipfs/bafkreibv7mmp6xprot7cwmi6k3irzrcrkkxaho3h362tbo24eyf6gaqt4a"]
    });
  }

  const mint6 = async() => {
    writeContract({
      ...wagmiContractConfig,
      functionName: "mintNFT",
      args:["https://white-eligible-antlion-716.mypinata.cloud/ipfs/bafkreifbdla3op26y3mm2f7onpnoh66d6a3qmyv7qa3gmmdpkzfvn3p744"]
    });
  }

  

return (
  <>
    <main className="min-h-screen bg-gray-100 p-10">
      <w3m-button />
      <w3m-network-button />
      <h1 className="text-3xl font-bold mb-8 text-center">Bored Nasser NFTs</h1>
	  
    <button
        className="p-4 m-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        onClick={handlegetMaxSupply }
    >
		Get Counter: {counter !== undefined ? counter.toString() : "Loading..."}
    </button>
	<button
        className="p-4 m-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        onClick={setMaxSupply }
    >
		Update Max NFT Supply
    </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: imageCount }).map((_, index) => {
        const mintFunctions = [mint, mint2, mint3, mint4, mint5, mint6];
        const handleMint = mintFunctions[index];

        return (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-lg flex flex-col items-center"
          >
            <img
              src={`/BoredNasser${index === 0 ? '' : index + 1}.png`}
              alt={`Bored Nasser ${index + 1}`}
                className="w-56 h-auto mb-4 rounded-xl"
              />
              <button
                onClick={handleMint}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Mint NFT
              </button>
            </div>
          );
        })}
      </div>
    </main>
  </>
);
}
