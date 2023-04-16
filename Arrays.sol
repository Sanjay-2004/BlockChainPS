// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

contract Arrays{
    struct persons{
        string firstName;
        string lastName;
    }
    persons[] public someone;
    uint256 public count;

    function name(string memory fn, string memory ln) public{
        someone.push(persons(fn,ln));
        count++;
    }
    function showwho() public view returns(string memory, string memory){
        return (firstName, lastName);
    }
}