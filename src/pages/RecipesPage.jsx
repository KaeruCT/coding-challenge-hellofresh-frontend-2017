import React from 'react';
import AppContainer from '../containers/AppContainer.jsx';
import RecipeList from '../components/RecipeList.jsx';
import LoadingIndicator from '../components/LoadingIndicator.jsx';
import { Subscribe } from 'unstated';
import { css } from 'aphrodite';
import common from '../styles/common';
import { loadRecipes } from '../services/recipes';

class RecipesPage extends React.Component {
  render() {
    return (
      <div className={css(common.page)}>
        <h1 className={css(common.title)}>Awesome Recipes</h1>
        <Subscribe to={[AppContainer]}>
          {app => {
            const { recipes, error, initialized } = app.state;

            if (!initialized) {
              return <LoadingIndicator />;
            }

            if (error) {
              return (
                <div className={css([common.card, common.error])}>
                  <p>Could not load recipes! Try again? :(</p>
                  <pre>{error.message}</pre>
                </div>
              );
            }

            return <RecipeList recipes={recipes} />;
          }}
        </Subscribe>
      </div>
    );
  }
}

export default RecipesPage;
