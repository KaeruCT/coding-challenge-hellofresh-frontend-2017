const mockRecipes = [
  { id: 1, name: 'Casado' },
  { id: 2, name: 'Gallopinto' }
];

jest.mock('../services/recipes', () => {
  return {
    loadRecipes: jest.fn(() => new Promise(resolve => resolve(mockRecipes))),
    loadFavorites: jest.fn().mockReturnValue({}),
    loadRatings: jest.fn().mockReturnValue({}),
    storeFavorites: jest.fn(),
    storeRatings: jest.fn(),
    applyFavorites: jest.fn(val => val),
    applyRatings: jest.fn(val => val)
  };
});

import AppContainer from './AppContainer';
import * as recipes from '../services/recipes';

describe('AppContainer', () => {
  test('initializes correctly', done => {
    const container = new AppContainer();

    expect(container.state.recipes).toEqual([]);
    expect(container.state.initialized).toBe(false);
    expect(container.state.error).toBe(null);

    // test values after recipes.loadRecipes() resolves
    setImmediate(() => {
      expect(container.state.recipes).toEqual(mockRecipes);
      expect(container.state.initialized).toBe(true);
      expect(container.state.error).toBe(null);

      expect(recipes.loadRecipes).toBeCalled();
      done();
    });
  });

  const firstRecipe = mockRecipes[0];

  test('toggles favorites correctly', done => {
    const container = new AppContainer();

    // test values after recipes.loadRecipes() resolves
    setImmediate(() => {
      container.toggleFavorite(firstRecipe);
      expect(recipes.storeFavorites).toBeCalledWith({ [firstRecipe.id]: true });
      expect(recipes.applyFavorites).toBeCalled();
      done();
    });
  });

  test('sets ratings correctly', done => {
    const container = new AppContainer();

    // test values after recipes.loadRecipes() resolves
    setImmediate(() => {
      const rating = 4;
      container.rate(firstRecipe, rating);
      expect(recipes.storeRatings).toBeCalledWith({ [firstRecipe.id]: rating });
      expect(recipes.applyRatings).toBeCalled();
      done();
    });
  });
});
