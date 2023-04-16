// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

contract Addition{
    int addend;
    int augend;
    int sum;
    function set(int a, int b) public{
        addend=a;
        augend=b;

        sum=addend+augend;
        
    }
    function add() view public returns (int){
        return sum;
    }
}