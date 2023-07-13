import React from 'react';

const mockApp = {
  rate: jest.fn()
};
jest.mock('unstated', () => {
  return {
    Subscribe: ({ children }) => children(mockApp),
    Container: jest.fn()
  };
});

import { mount } from 'enzyme';
import { colors } from '../styles/variables';
import RecipeRating from './RecipeRating';
import { Star } from 'react-feather';

describe('RecipeRating', () => {
  const total = 4;
  for (let i = 0; i < total; i++) {
    test(`displays ${i} filled star(s)`, () => {
      const recipe = {
        rating: i
      };
      const rating = mount(<RecipeRating recipe={recipe} />);
      const stars = rating.find(Star);

      expect(
        stars.find({ color: colors.star, fill: colors.star })
      ).toHaveLength(recipe.rating);

      expect(
        stars.find({ color: colors.star, fill: colors.transparent })
      ).toHaveLength(total - recipe.rating);
    });

    test(`calls \`app.rate\` with ${i} rating when a star is clicked`, () => {
      const recipe = {
        rating: 0
      };
      const rating = mount(<RecipeRating recipe={recipe} />);

      rating
        .find(Star)
        .at(i)
        .simulate('click', {
          preventDefault: () => {},
          stopPropagation: () => {}
        });
      expect(mockApp.rate).toBeCalledWith(recipe, i + 1);
    });
  }
});
