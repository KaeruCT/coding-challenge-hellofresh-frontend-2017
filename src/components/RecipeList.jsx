import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import common from '../styles/common';
import { borderRadius, colors, fontSizes, spacing } from '../styles/variables';
import RecipeFavorite from './RecipeFavorite.jsx';
import RecipeRating from './RecipeRating.jsx';
import RecipePopup from './RecipePopup.jsx';

class RecipeList extends React.Component {
  static propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedRecipe: null
    };
  }

  selectRecipe = selectedRecipe => {
    this.setState({ selectedRecipe });
  };

  render() {
    const { recipes } = this.props;
    const { selectedRecipe } = this.state;

    let recipePopup = null;
    if (selectedRecipe) {
      recipePopup = (
        <RecipePopup
          recipe={selectedRecipe}
          doClose={() => this.setState({ selectedRecipe: null })}
        />
      );
    }

    return (
      <div className={css(styles.recipeList)}>
        {recipePopup}

        {recipes.map(recipe => (
          <div key={recipe.id} className={css(styles.recipe)}>
            <div
              onClick={() => this.selectRecipe(recipe)}
              className={css([common.card, styles.recipeContent])}>
              <img
                className={css(styles.thumb)}
                src={recipe.thumb}
                alt="thumbnail"
              />

              <div className={css(styles.recipeInfo)}>
                <div className={css(styles.recipeHeader)}>
                  <h1 className={css(styles.title)}>{recipe.name}</h1>
                  <div className={css(styles.favorite)}>
                    <RecipeFavorite recipe={recipe} />
                  </div>
                </div>

                <div className={css(styles.headline)}>{recipe.headline}</div>

                <div className={css(styles.recipeFooter)}>
                  <div className={css(styles.recipeFooterInfo)}>
                    {recipe.calories}
                  </div>
                  <div className={css(styles.recipeRating)}>
                    <RecipeRating recipe={recipe} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  recipeList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  recipe: {
    alignItems: 'flex-start',
    flex: 1,
    flexBasis: '33.33333%',
    display: 'flex'
  },
  recipeContent: {
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform .2s ease-out',
    margin: spacing,
    width: '100%',
    ':hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)'
    }
  },
  recipeInfo: {
    flex: 1,
    padding: spacing
  },
  thumb: {
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    maxWidth: '100%'
  },
  recipeHeader: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: spacing
  },
  title: {
    flex: 1,
    fontSize: fontSizes.regular,
    color: colors.text,
    margin: 0
  },
  favorite: {
    flex: 0
  },
  headline: {
    fontSize: fontSizes.small,
    color: colors.labelText
  },
  recipeFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: fontSizes.small,
    color: colors.labelText,
    marginTop: spacing * 2
  },
  recipeFooterInfo: {
    flex: 1,
    alignSelf: 'center'
  },
  recipeRating: {
    flex: 1,
    textAlign: 'right',
    whiteSpace: 'nowrap'
  }
});

export default RecipeList;
