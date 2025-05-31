// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

import "forge-std/Test.sol";

import {BoredNasser} from "../src/BoredNasser.sol";

contract BoredNasserTest is Test {
    BoredNasser public BN;

    address user = makeAddr("user");
    address public owner = address(this);

    function setUp() public {
        BN = new BoredNasser();
        vm.deal(user, 10 ether);
    }

    function testMintNFT() public {
        vm.startPrank(user);

        uint256 tokenId = BN.mintNFT("https://white-eligible-antlion-716.mypinata.cloud/ipfs/bafkreig4nkfwiy7mx5oxw25fmbyqv5onollbbfa7hr2jbhxruamhpqo54e");
        assertEq(tokenId, 0);

        tokenId = BN.mintNFT("https://white-eligible-antlion-716.mypinata.cloud/ipfs/bafkreig4nkfwiy7mx5oxw25fmbyqv5onollbbfa7hr2jbhxruamhpqo54e");
        assertEq(tokenId, 1);

        vm.stopPrank();
    }

    function testMaxSupplyIncreaseByUser() public {
        vm.startPrank(user);

        vm.expectRevert();
        BN.setMaxSupply();

        vm.stopPrank();
    }

    function testOnlyOwnerCanIncreaseSupply() public {
        vm.startPrank(owner);

        uint256 oldSupply = BN.getMaxSupply();
        uint256 newSupply = BN.setMaxSupply();
        assertEq(newSupply, oldSupply+50);
        
        vm.stopPrank();
    }

    function test_RevertExceedingMaxSupply() public {
        vm.startPrank(user);
        
        uint256 limit = BN.getMaxSupply();
        for (uint i = 0; i < limit; i++) {
            BN.mintNFT("https://white-eligible-antlion-716.mypinata.cloud/ipfs/bafkreig4nkfwiy7mx5oxw25fmbyqv5onollbbfa7hr2jbhxruamhpqo54e");
        }

        vm.expectRevert("Exceeded number of Mints");
        BN.mintNFT("https://white-eligible-antlion-716.mypinata.cloud/ipfs/bafkreig4nkfwiy7mx5oxw25fmbyqv5onollbbfa7hr2jbhxruamhpqo54e");

        vm.stopPrank();
    }

    function testMintFromMultipleUsers() public {
        address user2 = makeAddr("user2");
        vm.deal(user2, 5 ether);

        vm.prank(user);
        BN.mintNFT("ipfs://u1");

        vm.prank(user2);
        BN.mintNFT("ipfs://u2");

        assertEq(BN.balanceOf(user), 1);
        assertEq(BN.balanceOf(user2), 1);
    }
}