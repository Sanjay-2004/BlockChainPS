// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;
contract KMIT{
    address payable management;
    address payable student;
    uint no_of_classes=0;
    uint no_of_students=0;
    uint no_of_prof=0;
    struct Class{
        uint students;
        uint no_of_subs;
        string section;
        address payable managent;
        address payable each_student;
    }
    mapping(uint=>Class) public Class_by_section;
    

}