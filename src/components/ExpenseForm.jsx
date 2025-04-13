import { useState } from "react";
export default function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense({
      ...formData,
      amount: parseFloat(formData.amount),
    });
    setFormData({
      name: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title mb-3">Add Expense</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter expense name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter expense category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Enter amount"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="date"
              className="form-control"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
