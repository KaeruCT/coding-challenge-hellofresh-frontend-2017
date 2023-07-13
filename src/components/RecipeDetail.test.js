import React from 'react';
import { shallow } from 'enzyme';
import RecipeDetail from './RecipeDetail';
import RecipeFavorite from './RecipeFavorite';
import RecipeRating from './RecipeRating';

describe('RecipeDetail', () => {
  const recipe = {
    headline: 'Just plain',
    image: 'image.jpg',
    ingredients: ['100g white rice', '1 pinch of salt', 'water'],
    description: 'Eat with lots of sauce',
    calories: '200 kcal',
    carbos: '60g',
    fats: '5g',
    fibers: '40g',
    proteins: '10g'
  };
  const detail = shallow(<RecipeDetail recipe={recipe} />);

  test('displays headline', () => {
    expect(detail.find({ children: recipe.headline })).toBeDefined();
  });

  test('displays description', () => {
    expect(detail.find({ children: recipe.description })).toBeDefined();
  });

  test('displays image', () => {
    expect(detail.find({ src: recipe.image })).toBeDefined();
  });

  test('renders <RecipeFavorite/> with the recipe', () => {
    expect(detail.find(RecipeFavorite).props().recipe).toBe(recipe);
  });

  test('renders <RecipeRating/> with the recipe', () => {
    expect(detail.find(RecipeRating).props().recipe).toBe(recipe);
  });

  test('displays ingredients in a list', () => {
    expect(detail.find('li')).toHaveLength(recipe.ingredients.length);
    recipe.ingredients.forEach(ingredient => {
      expect(detail.find('ul').text()).toContain(ingredient);
    });
  });
});
