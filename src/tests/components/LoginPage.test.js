import React from 'react';
import { LoginPage } from '../../components/LoginPage';
import { shallow } from 'enzyme';
import { startLogin } from '../../actions/auth';

test('Should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  expect(wrapper).toMatchSnapshot();
});

test('Should call start login', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});
