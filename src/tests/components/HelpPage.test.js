import React from 'react';
import HelpPage from '../../components/HelpPage';
import { shallow } from 'enzyme';

test('Should render HelpPage correctly', () => {
  const wrapper = shallow(<HelpPage />);
  expect(wrapper).toMatchSnapshot();
});
