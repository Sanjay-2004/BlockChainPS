let arrayb, arrayf;
const selected = ()=>{
    arrayb = [];
            $("input:checkbox[name=bugs]:checked").each(function() {
                arrayb.push($(this).val());
            });
            let yis=document.getElementById("inputGroup-sizing-default-bugs").value;
            if(yis.length!=0){
                arrayb.push(document.getElementById("inputGroup-sizing-default-bugs").value)
            }
    arrayf = [];
            $("input:checkbox[name=features]:checked").each(function() {
                arrayf.push($(this).val());
            });
            let yis1=document.getElementById("inputGroup-sizing-default-features").value;
            if(yis1.length!=0){
                arrayf.push(document.getElementById("inputGroup-sizing-default-features").value)
            }

    let bb = `<ul class="list-group">`
    for(let i=0;i<arrayb.length;i++){
        bb+=`<li class="list-group-item">${arrayb[i]} </li>`
    }
    bb+=`</ul>`
    document.getElementById("bugs-selected").innerHTML = bb;

    let ff=`<ul class="list-group">`
    for(let i=0;i<arrayf.length;i++){
        ff+=`<li class="list-group-item">${arrayf[i]} </li>`
    }
    ff+=`</ul>`
    document.getElementById("features-selected").innerHTML = ff;
}
let finals = `<ul class="list-group">`;
let account;

const connectMeta = async() =>{
    if(window.ethereum!=="undefined"){
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0];
        const ABI = [
            {
                "inputs": [
                    {
                        "internalType": "string[]",
                        "name": "bb",
                        "type": "string[]"
                    },
                    {
                        "internalType": "string[]",
                        "name": "ff",
                        "type": "string[]"
                    }
                ],
                "name": "set",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "bugs",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "features",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "finallist",
                "outputs": [
                    {
                        "internalType": "string[]",
                        "name": "",
                        "type": "string[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "finals",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ];
                const Address = "0x5E30C91686171b838D613b151E2C7549d8320133";
                window.web3 = await new Web3(window.ethereum);
                window.contract = await new window.web3.eth.Contract(ABI, Address);

                await window.contract.methods.set(arrayb,arrayf).send({from: account});

                const data = await window.contract.methods.finallist().call();
                let finals=`<ul class="list-group">`
                for(let i=0;i<data.length;i++){
            finals+=`<li class="list-group-item">${data[i]} </li>`
    }
    finals+=`</ul>`
            document.getElementById("finallist").innerHTML = finals;



    }
}

