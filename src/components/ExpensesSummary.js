import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';


export class ExpensesSummary extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      expensesTotal: this.props.expensesTotal,
      expensesNumber: this.props.expenses.length
    }
  }
  componentDidMount() {
    var formattedTotal = numeral(this.props.expensesTotal / 100).format('$0,0.00')

    this.setState(() => ({ expensesTotal: formattedTotal, expensesNumber: this.props.expenses.length }))
  }

  render() {
    return (
      <div>
        <p>Showing {this.state.expensesNumber === 1 ? `${this.state.expensesNumber} expense` :`${this.state.expensesNumber} expenses` } with a total of {this.state.expensesTotal}</p>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters),
    expensesTotal: getExpensesTotal(state.expenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);
