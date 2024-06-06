// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract PiraNFT is ERC721Enumerable, Ownable {
    /**
     * @dev _baseTokenURI for computing {tokenURI}. If set, the resulting URI for each
     * token will be the concatenation of the `baseURI` and the `tokenId`.
     */
    string _baseTokenURI; // https://ipfs.io/ipfs/QmRPpQfZe9vkDYxQEPi2USFZwnqEvA5zgoMNapVixypfFF

    address public feeTo;

    //  _price is the price of one Pira NFT
    uint256 public _price = 0.0015 ether;

    // _paused is used to pause the contract in case of an emergency
    bool public _paused;

    // total number of tokenIds minted
    uint256 public tokenIds;

    // mapping total nft minted by address
    mapping(address => uint256) public tokenMintByAddress;

    modifier onlyWhenNotPaused() {
        require(!_paused, "Contract currently paused");
        _;
    }

    constructor(string memory baseURI, address _feeTo) ERC721("PiraNFT", "PiraNFT") {
        _baseTokenURI = baseURI;
        feeTo = _feeTo;
    }

    /**
     * @dev mint allows an user to mint 1 NFT per transaction.
     */
    function mint() public payable onlyWhenNotPaused {
        require(msg.value == _price, "Ether sent is not correct");
        require(feeTo != address(0), "Fee to is address 0");
        payable(feeTo).transfer(msg.value);
        tokenIds += 1;
        _safeMint(msg.sender, tokenIds);
        tokenMintByAddress[msg.sender] = tokenMintByAddress[msg.sender] + 1;
    }

    /**
     * @dev setPaused makes the contract paused or unpaused
     */
    function setPaused(bool val) public onlyOwner {
        _paused = val;
    }

    function setFeeTo(address _feeTo) public onlyOwner {
        feeTo = _feeTo;
    }

    function setTokenURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }

    function setPrice(uint256 price) public onlyOwner {
        _price = price;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        // _tokenId parameter required to override the base function
        // even though it's not used (same uri for all NFTs)
        _requireMinted(tokenId);

        return _baseTokenURI;
    }
}
