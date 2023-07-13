import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './LoginPage';
import LoginForm from '../components/LoginForm';

describe('LoginPage', () => {
  const loginPage = shallow(<LoginPage />);

  const loginForm = loginPage.find(LoginForm);

  test('displays a nice welcome message', () => {
    expect(loginPage.find('h1').text()).toBe('Welcome!');
  });

  test('displays a <LoginForm/>', () => {
    expect(loginForm.exists()).toBe(true);
  });

  test('displays <Popup/> with correct email and password filled in', () => {
    expect(loginForm.props().email).toBeDefined();
    expect(loginForm.props().password).toBeDefined();
  });
});
