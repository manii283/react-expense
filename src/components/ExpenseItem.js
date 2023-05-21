import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 7, 23);
  const expenseTitle = "car";
  const expenseAmount = 34.34;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
