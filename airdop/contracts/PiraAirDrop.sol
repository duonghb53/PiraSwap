// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

contract PiraAirDrop is Ownable {
    // Pira NFT Contract
    address public nft_contract;

    // Treasury Address
    address public treasury;

    // Pira Token Address
    address public pira_token;

    constructor(address _nft_contract, address _pira_token) {
        nft_contract = _nft_contract;
        pira_token = _pira_token;
    }

    // TODO
    function air_drop_by_mint_nft() public {}

    // TODO
    function air_drop_by_swap() public {}

    // TODO
    function air_drop_by_add_lp() public {}

    // TODO
    function air_drop_by_invite_friend() public {}
}
