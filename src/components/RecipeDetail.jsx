import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import common from '../styles/common';
import { borderRadius, colors, fontSizes, spacing } from '../styles/variables';
import RecipeFavorite from './RecipeFavorite.jsx';
import RecipeRating from './RecipeRating.jsx';

const MACROS = [
  { key: 'calories', label: 'Calories' },
  { key: 'carbos', label: 'Carbohydrates' },
  { key: 'fats', label: 'Fat' },
  { key: 'fibers', label: 'Fiber' },
  { key: 'proteins', label: 'Proteins' }
];

class RecipeDetail extends React.Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  macros() {
    const { recipe } = this.props;
    return MACROS.map(m => {
      if (!recipe[m.key]) {
        return null;
      }
      return (
        <div key={m.key} className={css(common.labelText)}>
          {m.label}: {recipe[m.key]}
        </div>
      );
    });
  }

  render() {
    const { recipe } = this.props;

    return (
      <div>
        <div className={css(styles.recipeDetail)}>
          <div className={css(styles.headline)}>{recipe.headline}</div>

          <div className={css(styles.mainContent)}>
            <div className={css(styles.imageContainer)}>
              <img
                className={css(styles.image)}
                src={recipe.image}
                alt="image"
              />
              {this.macros()}
            </div>
            <div className={css(styles.ingredients)}>
              <h1 className={css(styles.title)}>Ingredients</h1>
              <ul>
                {recipe.ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={css(styles.description)}>{recipe.description}</div>
        </div>

        <div className={css(styles.recipeFooter)}>
          <div className={css(styles.favorite)}>
            <RecipeFavorite recipe={recipe} />
          </div>
          <div className={css(styles.recipeRating)}>
            <RecipeRating recipe={recipe} />
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  recipeDetail: {
    padding: spacing * 2,
    paddingTop: 0
  },
  title: {
    flex: 1,
    fontSize: fontSizes.large,
    color: colors.text,
    margin: 0
  },
  headline: {
    fontSize: fontSizes.small,
    color: colors.labelText
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing,
    marginBottom: spacing,
    '@media (max-width: 600px)': {
      display: 'block'
    }
  },
  imageContainer: {
    flex: 1
  },
  image: {
    maxWidth: '100%'
  },
  ingredients: {
    flex: 1,
    paddingLeft: spacing,
    '@media (max-width: 600px)': {
      marginTop: spacing,
      paddingLeft: 0
    }
  },
  description: {
    textAlign: 'justify',
    marginBottom: spacing * 2
  },
  recipeFooter: {
    backgroundColor: colors.backgroundDark,
    padding: spacing * 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: fontSizes.small,
    color: colors.labelText,
    marginTop: spacing * 2,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius
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

export default RecipeDetail;
