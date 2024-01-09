import './App.css';
import React, { useState, useEffect }  from 'react';
import Balance from './Balance';
import PercentageChange from './PercentageChange';

const App = () => {
  const address = '0xDCBc586cAb42a1D193CaCD165a81E5fbd9B428d7'; // Replace with the Ethereum account address
  const [initialBalance, setInitialBalance, currentBalance] = useState(null);

  // Fetch initial balance
  const fetchInitialBalance = async () => {
    try {
      // Replace the following line with your logic to fetch the initial balance
      const response = await fetch('https://mainnet.infura.io/v3/0b163a2dff5343cabf550bacec14850c'); // Replace with your API endpoint or Ethereum node URL
      const data = await response.json();
      const initialBalanceValue = data.balance; // Adjust the property based on your API response
      setInitialBalance(initialBalanceValue);
    } catch (error) {
      console.error('Error fetching initial balance:', error.message);
    }
  };

  // Fetch initial balance on component mount
  useEffect(() => {
    fetchInitialBalance();
  }, []);

  return (
    <div>
      <h1>Ethereum Token Balance App</h1>
      <Balance address={address} />
      <PercentageChange initialBalance={initialBalance} currentBalance={currentBalance} />
    </div>
  );
};

export default App;


