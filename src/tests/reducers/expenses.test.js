import expensesReducer from '../../reducers/expenses';

import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([]);
});

test('should remove expense with valid id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    expenses[0],
    expenses[2]
  ]);
});

test('should not remove expense with invalid id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 5
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    expenses[0],
    expenses[1],
    expenses[2]
  ]);
});

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'Car Bill',
      note: '',
      amount: 170,
      createdAt: 0
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    ...expenses,
    action.expense
  ]);
});

test('should edit an expense with id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      note: 'a note'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe('a note');
});

test('should not edit an expense with invalid id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 5,
    updates: {
      note: 'a note'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
