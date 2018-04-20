import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('Should setup object to remove an expense', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('Should setup object to edit expense', () => {
  const action = editExpense('123abc', { amount: 1000 });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    updates: { amount : 1000},
    id: '123abc'
  });
});

test('Should setup object to add expense with provided values', () => {
  const expenseData = {
    description: 'rent',
    amount: 109500,
    createdAt: 1000,
    note: 'last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('Should setup object for add expense with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  });
});
