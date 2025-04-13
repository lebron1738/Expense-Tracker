export default function ExpenseRow({ expense, onDelete }) {
  return (
    <tr>
      <td>{expense.name}</td>
      <td>{expense.description}</td>
      <td>{expense.category}</td>
      <td>Ksh.{expense.amount}</td>
      <td>{expense.date}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(expense.id)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
}
