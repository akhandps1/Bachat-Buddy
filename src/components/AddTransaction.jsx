import React from 'react';

function AddTransaction({
  title,
  setTitle,
  amount,
  setAmount,
  type,
  setType,
  category,
  setCategory,
  date,
  setDate,
  addTransaction,
  categories,
}) {
  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Add Transaction</h2>
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Transaction Title"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTransaction}
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Transaction
        </button>
      </div>
    </div>
  );
}

export default AddTransaction;