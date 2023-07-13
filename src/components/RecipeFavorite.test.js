import React from 'react';
const mockApp = {
  toggleFavorite: jest.fn()
};
jest.mock('unstated', () => {
  return {
    Subscribe: ({ children }) => children(mockApp),
    Container: jest.fn()
  };
});

import { mount } from 'enzyme';
import { colors } from '../styles/variables';
import RecipeFavorite from './RecipeFavorite';
import { Heart } from 'react-feather';

describe('RecipeFavorite', () => {
  test('displays empty heart when not favorited', () => {
    const recipe = {
      favorite: false
    };
    const fav = mount(<RecipeFavorite recipe={recipe} />);

    expect(fav.find(Heart).props().fill).toBe(colors.transparent);
  });

  test('displays filled heart when favorited', () => {
    const recipe = {
      favorite: true
    };
    const fav = mount(<RecipeFavorite recipe={recipe} />);

    expect(fav.find(Heart).props().fill).toBe(colors.heart);
  });

  test('calls `app.toggleFavorite` when heart is clicked', () => {
    const recipe = {
      favorite: false
    };
    const fav = mount(<RecipeFavorite recipe={recipe} />);

    fav.find('a').simulate('click', {
      preventDefault: () => {},
      stopPropagation: () => {}
    });
    expect(mockApp.toggleFavorite).toBeCalledWith(recipe);
  });
});
