import React from 'react';

function Summary({ totalIncome, totalExpenses, balance }) {
  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Summary</h2>
      <p className="text-gray-700">Total Income: ${totalIncome.toFixed(2)}</p>
      <p className="text-gray-700">Total Expenses: ${totalExpenses.toFixed(2)}</p>
      <p className={`text-gray-700 font-semibold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
        Balance: ${balance.toFixed(2)}
      </p>
    </div>
  );
}

export default Summary;