import React from 'react';

function BudgetSettings({ budgets, updateBudget, categories }) {
  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-md">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Set Budgets</h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map(cat => (
          <div key={cat} className="flex items-center">
            <label className="mr-2 text-gray-700">{cat}:</label>
            <input
              type="number"
              value={budgets[cat] || ''}
              onChange={(e) => updateBudget(cat, e.target.value)}
              placeholder="Budget"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BudgetSettings;