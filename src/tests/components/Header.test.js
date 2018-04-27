import React from 'react';
import { Header } from '../../components/Header';
import { shallow } from 'enzyme';
import { startLogout } from '../../actions/auth';


test('Should render header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => { }}/>);
  expect(wrapper).toMatchSnapshot();
});

test('Should call start logout', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout}/>);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
