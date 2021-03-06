import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE

const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

// SET_TEXT_FILTER

const setTextFilter = (filter) => ({
  type: 'SET_TEXT_FILTER',
  filter
});

// SORT_BY_DATE

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE

const setStartDate = (date) => ({
  type: 'SET_START_DATE',
  date
})

// SET_END_DATE

const setEndDate = (date) => ({
  type: 'SET_END_DATE',
  date
})

// Expense Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE' :
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE' :
      return state.filter(({ id }) => id !== action.id );
    case 'EDIT_EXPENSE' :
      return state.map((expense) => {
        if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        };
      });
    default :
      return state;
  };
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER' :
      return {
        ...state,
        text: action.filter
      };
    case 'SORT_BY_DATE' :
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT' :
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SET_START_DATE' :
      return {
        ...state,
        startDate: action.date
      };
    case 'SET_END_DATE' :
      return {
        ...state,
        endDate: action.date
      };
    default :
      return state;
  };
};

// Get visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;

    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if(sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  })
}

// store

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: '500', createdAt: -1000 }));
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: '200', createdAt: 1000 }));

//
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
//
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 10000 }));
//
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
//
store.dispatch(sortByAmount());
//
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
//
// store.dispatch(setEndDate(245));
// store.dispatch(setEndDate());

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

const user = {
  name: 'Nick',
  age: 20
};

console.log({
  ...user,
  location: 'Arvada',
  age: 21
});
