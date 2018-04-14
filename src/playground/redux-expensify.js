import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE

const addExpense = () => {
  type: 'ADD_EXPENSE',
  expense: {
    id: 
  }
}

// REMOVE_EXPENSE
// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expense Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    default :
      return state;
  };
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default :
      return state;
  };
};

// store

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

console.log(store.getState());

const demoState = {
  expenses: [{
    id: '123123',
    description: 'Car Payment',
    note: 'January',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'car',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
};
