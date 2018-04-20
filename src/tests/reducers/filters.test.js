import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('Should set sort by to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('Should set sort by to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
  expect(state.sortBy).toBe('date');
});

test('Should set text filter', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    filter: 'test'
  }
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe('test');
});

test('Should set start date filter', () => {
  const action = {
    type: 'SET_START_DATE',
    date: moment(0)
  }
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(moment(0));
});

test('Should set end date filter', () => {
  const action = {
    type: 'SET_END_DATE',
    date: moment(0)
  }
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(moment(0));
});
