import { useState, useEffect, useRef } from 'react';
import AddTransaction from './components/AddTransaction';
import BudgetSettings from './components/BudgetSettings';
import Summary from './components/Summary';
import ExpenseChart from './components/ExpenseChart';
import FilterSortControls from './components/FilterSortControls';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('Expense');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editAmount, setEditAmount] = useState('');
  const [editType, setEditType] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [editDate, setEditDate] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');
  const [sortByAmount, setSortByAmount] = useState(null);
  const [budgets, setBudgets] = useState({
    Food: 0,
    Transport: 0,
    Entertainment: 0,
    Bills: 0,
    Others: 0,
  });
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const categories = ['Food', 'Transport', 'Entertainment', 'Bills', 'Others'];

  // Load data from local storage
  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const savedBudgets = JSON.parse(localStorage.getItem('budgets')) || {
      Food: 0,
      Transport: 0,
      Entertainment: 0,
      Bills: 0,
      Others: 0,
    };
    setTransactions(savedTransactions);
    setBudgets(savedBudgets);
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(data => console.log('Fetched transactions from API:', data));
  }, []);

  // Save data to local storage
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('budgets', JSON.stringify(budgets));
  }, [transactions, budgets]);

  // Create a transaction
  const addTransaction = () => {
    if (!title.trim() || !amount || !date) return;
    const transaction = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      type,
      category,
      date,
    };
    setTransactions([...transactions, transaction]);
    setTitle('');
    setAmount('');
    setType('Expense');
    setCategory('Food');
    setDate('');
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transaction),
    })
      .then(response => response.json())
      .then(data => console.log('API POST response:', data));
  };

  // Delete a transaction
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE',
    })
      .then(response => console.log('API DELETE response:', response));
  };

  // Start editing a transaction
  const startEditing = (transaction) => {
    setEditingTransaction(transaction.id);
    setEditTitle(transaction.title);
    setEditAmount(transaction.amount);
    setEditType(transaction.type);
    setEditCategory(transaction.category);
    setEditDate(transaction.date);
  };

  // Update a transaction
  const updateTransaction = (id) => {
    if (!editTitle.trim() || !editAmount || !editDate) return;
    setTransactions(transactions.map(t =>
      t.id === id ? {
        ...t,
        title: editTitle,
        amount: parseFloat(editAmount),
        type: editType,
        category: editCategory,
        date: editDate,
      } : t
    ));
    setEditingTransaction(null);
    setEditTitle('');
    setEditAmount('');
    setEditType('');
    setEditCategory('');
    setEditDate('');
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id,
        title: editTitle,
        amount: parseFloat(editAmount),
        type: editType,
        category: editCategory,
        date: editDate,
      }),
    })
      .then(response => response.json())
      .then(data => console.log('API PUT response:', data));
  };

  // Update budget
  const updateBudget = (category, limit) => {
    setBudgets({ ...budgets, [category]: parseFloat(limit) || 0 });
  };

  // Calculate summary
  const totalIncome = transactions
    .filter(t => t.type === 'Income')
    .reduce((sum, t) => sum + parseFloat(t.amount || 0), 0);
  const totalExpenses = transactions
    .filter(t => t.type === 'Expense')
    .reduce((sum, t) => sum + parseFloat(t.amount || 0), 0);
  const balance = totalIncome - totalExpenses;

  // Filter and sort transactions
  const filteredTransactions = transactions.filter(t => {
    const matchesType = filterType === 'All' || t.type === filterType;
    const matchesCategory = filterCategory === 'All' || t.category === filterCategory;
    return matchesType && matchesCategory;
  });
  const displayedTransactions = sortByAmount
    ? [...filteredTransactions].sort((a, b) =>
        sortByAmount === 'asc' ? a.amount - b.amount : b.amount - a.amount)
    : filteredTransactions;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Personal Finance Manager
      </h1>
      <AddTransaction
        title={title}
        setTitle={setTitle}
        amount={amount}
        setAmount={setAmount}
        type={type}
        setType={setType}
        category={category}
        setCategory={setCategory}
        date={date}
        setDate={setDate}
        addTransaction={addTransaction}
        categories={categories}
      />
      <BudgetSettings
        budgets={budgets}
        updateBudget={updateBudget}
        categories={categories}
      />
      <Summary
        totalIncome={totalIncome}
        totalExpenses={totalExpenses}
        balance={balance}
      />
      <ExpenseChart
        transactions={transactions}
        categories={categories}
        chartRef={chartRef}
        chartInstanceRef={chartInstanceRef}
      />
      <FilterSortControls
        filterType={filterType}
        setFilterType={setFilterType}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
        sortByAmount={sortByAmount}
        setSortByAmount={setSortByAmount}
        categories={categories}
      />
      <TransactionList
        displayedTransactions={displayedTransactions}
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
    </div>
  );
}

export default App;