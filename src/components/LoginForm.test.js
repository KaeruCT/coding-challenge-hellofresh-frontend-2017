import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
  const doLogin = jest.fn();
  const email = 'test@example.com';
  const password = 'SuperSecretStuff!';
  const form = shallow(
    <LoginForm doLogin={doLogin} email={email} password={password} />
  );

  test('has email input', () => {
    expect(form.find({ type: 'email' }).exists()).toBe(true);
  });

  test('has email specified', () => {
    expect(form.find({ type: 'email' }).props().value).toBe(email);
  });

  test('has password input', () => {
    expect(form.find({ type: 'password' }).exists()).toBe(true);
  });

  test('has password specified', () => {
    expect(form.find({ type: 'password' }).props().value).toBe(password);
  });

  test('calls `doLogin` when form is submitted', () => {
    form.simulate('submit', { preventDefault: () => {} });
    expect(doLogin).toBeCalledWith(email, password);
  });
});
