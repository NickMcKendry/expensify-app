
export default (expenses) => {
    const amounts = expenses.map((expense) => {
      return expense.amount
    });
    return amounts.reduce((a, b) => a + b, 0);
};
