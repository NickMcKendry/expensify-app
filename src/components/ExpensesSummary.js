import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';


export const ExpensesSummary = ({ expensesTotal, expenseCount }) => (
  <div>
    <h3>Showing {expenseCount === 1 ? `${expenseCount} expense` :`${expenseCount} expenses` } with a total of {numeral(expensesTotal / 100).format('$0,0.00')}</h3>
  </div>
)






const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
