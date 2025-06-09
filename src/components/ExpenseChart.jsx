import { useEffect } from 'react';
import { Chart } from 'chart.js/auto';

function ExpenseChart({ transactions, categories, chartRef, chartInstanceRef }) {
  useEffect(() => {
    if (chartRef.current) {
      const expenseData = categories.map(cat => {
        return transactions
          .filter(t => t.type === 'Expense' && t.category === cat)
          .reduce((sum, t) => sum + parseFloat(t.amount || 0), 0);
      });

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(chartRef.current, {
        type: 'pie',
        data: {
          labels: categories,
          datasets: [{
            data: expenseData,
            backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'],
            borderColor: '#FFF',
            borderWidth: 1,
          }],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'top', labels: { color: '#333' } },
            title: { display: true, text: 'Expenses by Category', color: '#333' },
          },
        },
      });
    }
  }, [transactions, categories, chartRef]);

  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-md">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default ExpenseChart;