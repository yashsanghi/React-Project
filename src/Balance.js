import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
const { ethers } = require("ethers");

const Balance = ({ contractAddress, accountAddress }) => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        // const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/0b163a2dff5343cabf550bacec14850c');
        const provider = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/0b163a2dff5343cabf550bacec14850c'));
        const tokenContract = "0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7"
        // Load your contract ABI and connect to the contract
        const contractABI = [
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "_owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "name": "balance",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
        ];
        const contract = new provider.eth.Contract(contractABI, tokenContract)
        const tokenBalance = await contract.getTokenBalance(accountAddress);

        setBalance(tokenBalance);
      } catch (error) {
        console.error('Error fetching balance:', error.message);
      }
    };

    fetchBalance();
  }, [contractAddress, accountAddress]);

  return (
    <div>
      <h2>Native Token Balance:</h2>
      {balance !== null ? <p>{balance} TOKEN_NAME</p> : <p>Loading...</p>}
    </div>
  );
};

export default Balance;
