import React from 'react';
import TransactionItem from './TransactionItem';

function TransactionList({
  displayedTransactions,
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
    <ul className="space-y-4">
      {displayedTransactions.map(transaction => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
          editingTransaction={editingTransaction}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          editAmount={editAmount}
          setEditAmount={setEditAmount}
          editType={editType}
          setEditType={setEditType}
          editCategory={editCategory}
          setEditCategory={setEditCategory}
          editDate={editDate}
          setEditDate={setEditDate}
          categories={categories}
          startEditing={startEditing}
          updateTransaction={updateTransaction}
          deleteTransaction={deleteTransaction}
          budgets={budgets}
        />
      ))}
    </ul>
  );
}

export default TransactionList;