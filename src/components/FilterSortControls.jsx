import React from 'react';

function FilterSortControls({
  filterType,
  setFilterType,
  filterCategory,
  setFilterCategory,
  sortByAmount,
  setSortByAmount,
  categories,
}) {
  return (
    <div className="flex gap-4 mb-4">
      <select
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All">All Types</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="All">All Categories</option>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <button
        onClick={() => setSortByAmount(sortByAmount === 'asc' ? 'desc' : 'asc')}
        className="p-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
      >
        Sort by Amount {sortByAmount === 'asc' ? '↑' : '↓'}
      </button>
    </div>
  );
}

export default FilterSortControls;