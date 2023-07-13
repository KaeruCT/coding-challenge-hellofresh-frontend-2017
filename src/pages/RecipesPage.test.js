import React from 'react';

const mockApp = {
  state: {
    recipes: [],
    error: false,
    initialized: false
  }
};
jest.mock('unstated', () => {
  return {
    Subscribe: ({ children }) => children(mockApp),
    Container: jest.fn()
  };
});

import { mount } from 'enzyme';
import RecipesPage from './RecipesPage';
import RecipeList from '../components/RecipeList';
import LoadingIndicator from '../components/LoadingIndicator';

describe('RecipesPage', () => {
  const errMessage = 'Could not load recipes!';

  test('displays a <LoadingIndicator/> if not initialized', () => {
    const recipesPage = mount(<RecipesPage />);
    expect(recipesPage.find(LoadingIndicator).exists()).toBe(true);
  });

  test('displays no <LoadingIndicator/> if initialized', () => {
    mockApp.state.initialized = true;
    const recipesPage = mount(<RecipesPage />);
    expect(recipesPage.find(LoadingIndicator).exists()).toBe(false);
  });

  test('displays a <RecipeList/> with recipes after they load', () => {
    mockApp.state.initialized = true;
    mockApp.state.recipes = [{ id: 1, name: 'White Rice' }];

    const recipesPage = mount(<RecipesPage />);
    expect(recipesPage.find(RecipeList).props().recipes).toBe(
      mockApp.state.recipes
    );
  });

  test('display no <RecipeList/> if recipes could not be loaded', () => {
    mockApp.state.initialized = true;
    mockApp.state.error = { message: errMessage };

    const recipesPage = mount(<RecipesPage />);
    expect(recipesPage.find(RecipeList).exists()).toBe(false);
  });

  test('displays an error message if recipes could not be loaded', () => {
    mockApp.state.initialized = true;
    mockApp.state.error = { message: errMessage };

    const recipesPage = mount(<RecipesPage />);
    expect(recipesPage.find({ children: errMessage }).exists()).toBe(true);
  });
});
