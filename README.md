# Personal Finance Manager (Bachat Buddy) 💰

## Overview 📝

A web application to track income and expenses, categorize transactions, set budgets, and visualize spending patterns. Built with React, Tailwind CSS, and Chart.js, it uses local storage for data persistence and JSONPlaceholder for simulated backend CRUD operations. 🚀

## Features ✨

- **Create** ➕: Add transactions with title, amount, type (Income/Expense), category, and date.
- **Read** 📖: View transaction list and summary (total income, expenses, balance).
- **Update** ✏️: Edit transaction details.
- **Delete** 🗑️: Remove transactions.
- **Filter** 🔍: Filter transactions by type (All, Income, Expense) or category (e.g., Food, Transport).
- **Sort** 📈: Sort transactions by amount (ascending/descending).
- **Visualization** 📊: Pie chart displaying expenses by category using Chart.js.
- **Local Storage** 💾: Persists transactions and budgets locally.
- **API** 🌐: Simulates CRUD operations with JSONPlaceholder.

## Folder Structure 📂

```
personal-finance-manager/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── AddTransaction.jsx
│   │   ├── BudgetSettings.jsx
│   │   ├── Summary.jsx
│   │   ├── ExpenseChart.jsx
│   │   ├── FilterSortControls.jsx
│   │   ├── TransactionList.jsx
│   │   └── TransactionItem.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── assets/
└── package.json
```

## Setup Instructions 🛠️

1. **Create a Vite project with React**:
    
    ```bash
    npm create vite@latest personal-finance-manager -- --template react
    ```
    
2. **Navigate to the project directory**:
    
    ```bash
    cd personal-finance-manager
    ```
    
3. **Install dependencies**:
    
    ```bash
    npm install
    ```
    
4. **Install Tailwind CSS and Chart.js**:
    
    ```bash
    npm install tailwindcss postcss autoprefixer chart.js
    ```
    
5. **Initialize Tailwind CSS**:
    
    ```bash
    npx tailwindcss init -p
    ```
    
6. **Update `tailwind.config.js`**:
    
    ```javascript
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```
    
7. **Update `src/index.css`**:
    
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
    
8. **Start the development server**:
    
    ```bash
    npm run dev
    ```
    

## Usage 📋

- **Add a Transaction** ➕: Enter transaction details (title, amount, type, category, date) and click "Add Transaction".
- **Set Budgets** 💸: Input budget limits for categories (Food, Transport, Entertainment, Bills, Others).
- **View Summary** 📈: Check total income, expenses, and balance.
- **Visualize Expenses** 📊: View a pie chart of expenses by category.
- **Filter and Sort** 🔍📉: Use dropdowns to filter by type or category and sort by amount.
- **Edit/Delete Transactions** ✏️🗑️: Click "Edit" to modify or "Delete" to remove transactions.

## Technologies 🧑‍💻

- **React** ⚛️: Frontend framework for building the UI.
- **Tailwind CSS** 🎨: Utility-first CSS for styling.
- **Chart.js** 📊: For rendering the expenses pie chart.
- **Vite** ⚡: Build tool for fast development.
- **Local Storage** 💾: Persists transactions and budgets.
- **JSONPlaceholder** 🌐: Simulates backend API for CRUD operations.

## Notes 📌

- Transactions and budgets are stored in the browser's local storage.
- The app uses JSONPlaceholder for mock API calls, which log responses to the console.
- Ensure a stable internet connection for API simulations.
