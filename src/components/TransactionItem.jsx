import React from 'react';

function TransactionItem({
  transaction,
  editingTransaction,
  editTitle,
  setEditTitle,
  editAmount,
  setEditAmount,
  editType,
  setEditType,
  editCategory,
  setEditCategory,
  editDate,
  setEditDate,
  categories,
  startEditing,
  updateTransaction,
  deleteTransaction,
  budgets,
}) {
  return (
    <li className="p-4 bg-gray-50 rounded-md border border-gray-200">
      {editingTransaction === transaction.id ? (
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            placeholder="Transaction Title"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            value={editAmount}
            onChange={(e) => setEditAmount(e.target.value)}
            placeholder="Amount"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={editType}
            onChange={(e) => setEditType(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <select
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <input
            type="date"
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => updateTransaction(transaction.id)}
            className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center">
            <div className="text-lg">
              <span className="font-semibold">{transaction.title}</span>
              <span className="ml-2 text-sm text-gray-600">
                ({transaction.category})
              </span>
            </div>
            <div>
              <button
                onClick={() => startEditing(transaction)}
                className="mr-2 text-blue-500 hover:text-blue-700"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTransaction(transaction.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
          <p className="text-gray-600">
            <strong>Amount:</strong> ${transaction.amount.toFixed(2)} ({transaction.type})
          </p>
          <p className="text-gray-600">
            <strong>Date:</strong> {transaction.date}
          </p>
          {transaction.type === 'Expense' && budgets[transaction.category] > 0 && (
            <p className={`text-gray-600 ${transaction.amount > budgets[transaction.category] ? 'text-red-600' : ''}`}>
              <strong>Budget:</strong> ${transaction.amount.toFixed(2)} / ${budgets[transaction.category].toFixed(2)}
            </p>
          )}
        </div>
      )}
    </li>
  );
}

export default TransactionItem;