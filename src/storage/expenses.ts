export type Expense = {
  id: number;
  description: string;
  amount: number;
  category: string;
};

export function getExpenses(): Expense[] {
  const expenses = window.localStorage.getItem("expenses");

  // Check if expenses is null or undefined
  if (expenses === null || expenses === undefined) {
    return [];
  }

  // Parse and return the expenses
  try {
    const parsedExpenses = JSON.parse(expenses) as Expense[];
    return parsedExpenses;
  } catch (error) {
    console.error("Error parsing JSON from localStorage:", error);
    return [];
  }
}

export function saveExpenses(expenses: Expense[]): Expense[] {
  window.localStorage.setItem("expenses", JSON.stringify(expenses));
  return expenses; // Return the updated expenses
}

// Update the deleteExpense function to return the updated expenses
export function deleteExpense(id: number): Expense[] {
  let expenses: Expense[] = getExpenses();
  expenses = expenses.filter((expense) => expense.id !== id);
  saveExpenses(expenses);
  return expenses; // Return the updated expenses
}
