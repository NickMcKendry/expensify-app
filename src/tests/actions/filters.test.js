import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters';
import moment from 'moment';

test('Should setup object for SET_START_DATE', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  })
});

test('Should setup object for SET_END_DATE', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  });
});

test('Should setup object for SET_TEXT_FILTER with provided value', () => {
  const action = setTextFilter('Bill');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    filter: 'Bill'
  });
});

test('Should setup object for SET_TEXT_FILTER with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    filter: ''
  });
});

test('Should setup object for SORT_BY_DATE', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('Should setup object for SORT_BY_AMOUNT', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});
