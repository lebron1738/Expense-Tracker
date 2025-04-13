import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

export default function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      name: "Rent",
      description: "April Rent",
      category: "Bills",
      amount: 15000,
      date: "2025-04-15",
    },
    {
      id: 2,
      name: "Electricity",
      description: "Postpaid",
      category: "Bills",
      amount: 1000,
      date: "2025-05-07",
    },
    {
      id: 3,
      name: "Internet",
      description: "Personal ",
      category: "Bills",
      amount: 3000,
      date: "2025-04-03",
    },
    {
      id: 4,
      name: "Transport",
      description: "travel to up country ",
      category: "Fare",
      amount: 1800,
      date: "2025-04-03",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const handleAddExpense = (formData) => {
    const newExpense = {
      id: expenses.length + 1,
      ...formData,
    };
    setExpenses([...expenses, newExpense]);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const filteredExpenses = expenses.filter((expense) => {
    return (
      expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue < bValue) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    }
    return 0;
  });

  return (
    <div className="container mt-4 mb-5">
      <h1 className="mb-3">Expense Tracker</h1>
      <p className="text-muted mb-4">
        A simple application to track daily expenses. Add any expenses and
        filter as you require.
      </p>

      <div className="row">
        <div className="col-md-4 mb-4">
          <ExpenseForm onAddExpense={handleAddExpense} />
        </div>

        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <input
                  type="text"
                  className="form-control w-50"
                  placeholder="Search expenses..."
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>

              <ExpenseTable
                expenses={sortedExpenses}
                onDelete={handleDelete}
                onSort={handleSort}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
