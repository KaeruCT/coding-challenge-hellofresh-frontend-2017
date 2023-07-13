import React from 'react';
jest.mock('unstated', () => {
  return {
    Subscribe: ({ children }) => children(),
    Container: jest.fn()
  };
});

import { mount } from 'enzyme';
import RecipeList from './RecipeList';
import RecipeFavorite from './RecipeFavorite';
import RecipeRating from './RecipeRating';
import RecipePopup from './RecipePopup';

describe('RecipeList', () => {
  const recipes = require('../../recipes.json');
  const list = mount(<RecipeList recipes={recipes} />);

  recipes.forEach(recipe => {
    test('displays info for each recipe', () => {
      expect(list.find({ children: recipe.name }).exists()).toBe(true);
      expect(list.find({ children: recipe.headline }).exists()).toBe(true);
      expect(list.find({ children: recipe.calories }).exists()).toBe(true);
    });

    test('displays <RecipeFavorite/> for each recipe', () => {
      expect(
        list
          .find(RecipeFavorite)
          .find({ recipe: recipe })
          .exists()
      ).toBe(true);
    });

    test('displays <RecipeRating/> for each recipe', () => {
      expect(
        list
          .find(RecipeRating)
          .find({ recipe: recipe })
          .exists()
      ).toBe(true);
    });
  });

  test('displays <RecipePopup/> for the active recipe', () => {
    const firstRecipeThumb = list.find({ src: recipes[0].thumb });
    firstRecipeThumb.simulate('click');

    expect(
      list
        .find(RecipePopup)
        .find({ recipe: recipes[0] })
        .exists()
    ).toBe(true);
  });
});
