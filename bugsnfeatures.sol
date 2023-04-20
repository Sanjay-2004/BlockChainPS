// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

contract Selected{
    string[] public bugs;
    string[] public features;
    string[] public finals;



    function set(string[] memory bb, string[] memory ff) public{
        delete finals;
        bugs = bb;
        features = ff;
        uint j;
        j=0;
        for(uint i=0;i<bb.length;i++){
            finals.push(bb[i]);
        }
        for(uint i=0;i<ff.length;i++){
            finals.push(ff[i]);
        }
    }

    function finallist()  public view returns(string[] memory){
        return (finals);
    }
}