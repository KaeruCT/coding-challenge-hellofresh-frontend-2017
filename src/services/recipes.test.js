import * as recipes from './recipes';

const recipeId = 1;
const mockRecipes = require('../../recipes.json');
const mockLocalStorage = {
  favorites: { [recipeId]: true },
  ratings: { [recipeId]: 4 }
};

global.fetch = () =>
  new Promise(resolve => {
    resolve({
      json: () =>
        new Promise(resolve => {
          resolve(mockRecipes);
        })
    });
  });

global.localStorage = {
  setItem: jest.fn(),
  getItem: jest.fn(key => {
    return JSON.stringify(mockLocalStorage[key]);
  })
};

describe('recipes', () => {
  test('loads recipes', async () => {
    const loadedRecipes = await recipes.loadRecipes();
    expect(loadedRecipes).toEqual(mockRecipes);
  });

  test('loads favorites', () => {
    const favorites = recipes.loadFavorites();
    expect(favorites).toEqual(mockLocalStorage.favorites);
  });

  test('loads ratings', () => {
    const ratings = recipes.loadRatings();
    expect(ratings).toEqual(mockLocalStorage.ratings);
  });

  test('stores favorites', () => {
    recipes.storeFavorites(mockLocalStorage.favorites);
    expect(localStorage.setItem).toBeCalledWith(
      'favorites',
      JSON.stringify(mockLocalStorage.favorites)
    );
  });

  test('stores ratings', () => {
    recipes.storeRatings(mockLocalStorage.ratings);
    expect(localStorage.setItem).toBeCalledWith(
      'ratings',
      JSON.stringify(mockLocalStorage.ratings)
    );
  });

  test('applies ratings', () => {
    const recipeList = [{ id: recipeId, name: 'Chifrijo' }];
    const rated = recipes.applyRatings(recipeList);
    expect(rated[0].rating).toBe(mockLocalStorage.ratings[recipeId]);
  });

  test('applies favorites', () => {
    const recipeList = [{ id: recipeId, name: 'Chifrijo' }];
    const rated = recipes.applyFavorites(recipeList);
    expect(rated[0].favorite).toBe(mockLocalStorage.favorites[recipeId]);
  });
});
