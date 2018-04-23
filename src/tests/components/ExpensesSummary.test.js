import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should render single expense summary', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={150} />);
  expect(wrapper).toMatchSnapshot();
});

test('Should render multiple expenses summary', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={250} />);
  expect(wrapper).toMatchSnapshot();
});
