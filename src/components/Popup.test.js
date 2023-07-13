import React from 'react';
import { mount } from 'enzyme';
import Popup from './Popup';

describe('Popup', () => {
  const onClose = jest.fn();
  const title = <h1>popup title</h1>;
  const content = <div>test</div>;

  const popup = mount(
    <Popup onClose={onClose} title={title}>
      {content}
    </Popup>
  );

  test('displays title', () => {
    expect(popup.contains(title)).toBe(true);
  });

  test('displays content', () => {
    expect(popup.contains(content)).toBe(true);
  });

  test('calls `onClose` when backdrop is clicked', () => {
    popup.simulate('click', {
      preventDefault: () => {},
      target: popup.childAt(0).getDOMNode()
    });
    expect(onClose).toBeCalled();
  });
});
