import { FormProvider, useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { expenseSchema } from "../utils/schema";
import { getExpenses, saveExpenses, Expense } from "../storage/expenses";
import { Input } from "./Input";
import { Select } from "./Select";
import { categories } from "../constants";


type FormData = z.infer<typeof expenseSchema>;

function ExpenseForm() {
  const methods = useForm<FormData>({
    resolver: zodResolver(expenseSchema),
  });
  const { reset, handleSubmit, formState: { isValid } } = methods;

  const handleFormData = (data: FieldValues) => {
    const expenses: Expense[] = getExpenses();
    const newExpense = {
      id: expenses.length + 1 | 0,
      ...data,
    };
    expenses.push(newExpense);
    saveExpenses(expenses);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleFormData)}>
        <Input name="description" type="text" />
        <Input name="cost" type="number" isNumber={true} />
        <Select categories={categories} />
        <div className="mt-3">
          <button type="submit" className="btn btn-primary btn-lg" disabled={!isValid}>
            Submit
          </button>
        </div>
      </form>
    </FormProvider>
  );
}

export { ExpenseForm };
