import React from 'react';
import { shallow } from 'enzyme';
import RecipePopup from './RecipePopup';
import Popup from './Popup';
import { X } from 'react-feather';
import RecipeDetail from './RecipeDetail';

describe('RecipePopup', () => {
  const recipe = { name: 'White rice' };
  const doClose = jest.fn();
  const recipePopup = shallow(
    <RecipePopup recipe={recipe} doClose={doClose} />
  );

  const popup = recipePopup.find(Popup);

  test('displays <Popup/>', () => {
    expect(popup.exists()).toBe(true);
  });

  test('displays <Popup/> with correct title', () => {
    const title = shallow(popup.props().title);

    expect(title.find('h1').text()).toContain(recipe.name);

    const xIcon = title.find(X);
    expect(xIcon.exists()).toBe(true);
    expect(xIcon.props().onClick).toBe(doClose);
  });

  test('displays <Popup/> with correct <RecipeDetail/>', () => {
    expect(popup.find(RecipeDetail).props().recipe).toBe(recipe);
  });
});
