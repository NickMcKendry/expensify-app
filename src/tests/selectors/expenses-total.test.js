import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
  const result = expensesTotal([]);
  expect(result).toBe(0);
});

test('Should correctly add a single expense', () => {
  const expense = [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
  }];
  const result = expensesTotal(expense);
  expect(result).toBe(expense[0].amount);
});

test('Should correctly add up multiple expenses', () => {
  const result = expensesTotal(expenses);
  expect(result).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});
