import React from 'react';
import { shallow } from 'enzyme';
import LoadingIndicator from './LoadingIndicator';
import { RefreshCw } from 'react-feather';

describe('LoadingIndicator', () => {
  test('is shown', () => {
    const indicator = shallow(<LoadingIndicator />);
    expect(indicator.find(RefreshCw).exists()).toBe(true);
  });
});
