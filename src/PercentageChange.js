import React, { useState, useEffect } from 'react';

const PercentageChange = ({ initialBalance, currentBalance }) => {
  const [percentageChange, setPercentageChange] = useState(null);

  useEffect(() => {
    if (initialBalance !== null && currentBalance !== null) {
      const change = ((currentBalance - initialBalance) / initialBalance) * 100;
      setPercentageChange(change);
    }
  }, [initialBalance, currentBalance]);

  return (
    <div>
      <h2>Percentage Change in the Last 12 Hours:</h2>
      {percentageChange !== null ? (
        <>
          <p>{percentageChange.toFixed(2)}%</p>
          {percentageChange < -10 && (
            <p style={{ color: 'red' }}>Balance reduced by more than 10%!</p>
          )}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PercentageChange;
