// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

contract Basics{
    string myval;


    function get() public view returns(string memory){
        return myval;
    }
    function setit(string memory value) public{
        myval=value;
    }
    constructor () {
        myval = "Hello sir";
    }
}