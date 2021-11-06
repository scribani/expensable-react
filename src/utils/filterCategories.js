export function filterByTransactionType(categories) {
  const expenses = categories.filter(
    (category) => category.transaction_type === "expense"
  );
  const income = categories.filter(
    (category) => category.transaction_type === "income"
  );

  sessionStorage.setItem("expenses", JSON.stringify(expenses));
  sessionStorage.setItem("income", JSON.stringify(income));
  return { expenses, income };
}
