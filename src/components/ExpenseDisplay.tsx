import { useState, useEffect } from 'react';
import { Select } from "./Select";
import { categories } from "../constants";
import { getExpenses, deleteExpense } from "../storage/expenses";

function ExpenseDisplay() {
  const [expenses, setExpenses] = useState(getExpenses());

  useEffect(() => {
    // Update expenses state when the component mounts or when a new expense is added
    setExpenses(getExpenses());
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="mt-3">
      <h3>Display of your expenses</h3>
      <Select categories={categories} isFilter={true} />
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>Description</td>
            <td>Cost</td>
            <td>Category</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map((expense) => {
              const { id, description, amount, category } = expense;
              return (
                <tr key={id}>
                  <td>{description}</td>
                  <td>{amount}</td>
                  <td>{category}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => deleteExpense(id)}>Delete</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>No data to display</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export { ExpenseDisplay };
