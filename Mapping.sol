// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

contract Mapping{
    mapping (uint => people) public record;
    uint public rec=0;
    struct people{
        uint id;
        string firstname;
        string seconndname;
    }
    // Adding owner and checking it
    address owner;
    modifier checkown(){
        require(msg.sender==owner);
        _;
    }
    constructor(){
        owner=msg.sender;
    }

    function addRecord(string memory fn, string memory sn) public checkown{
        incre();
        record[rec] = people(rec, fn, sn);
    }

    function incre() internal{
        rec+=1;
    }

}