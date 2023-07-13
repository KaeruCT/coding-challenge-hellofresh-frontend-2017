import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import common from '../styles/common';
import { colors, fontSizes, spacing } from '../styles/variables';
import Popup from './Popup.jsx';
import { X } from 'react-feather';
import RecipeDetail from './RecipeDetail.jsx';
import RecipeFavorite from './RecipeFavorite.jsx';
import RecipeRating from './RecipeRating.jsx';

export default function RecipePopup({ recipe, doClose }) {
  return (
    <Popup
      title={
        <div className={css(styles.popupTitle)}>
          <h1 className={css(styles.popupTitleText)}>{recipe.name}</h1>
          <X
            className={css(styles.popupX)}
            color={colors.text}
            onClick={doClose}
          />
        </div>
      }
      onClose={doClose}>
      <RecipeDetail recipe={recipe} />
    </Popup>
  );
}

RecipePopup.propTypes = {
  recipe: PropTypes.object.isRequired,
  doClose: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  popupTitle: {
    padding: spacing * 2,
    paddingBottom: 0,
    display: 'flex'
  },
  popupTitleText: {
    flex: 1,
    color: colors.text,
    fontSize: fontSizes.large,
    margin: 0
  },
  popupX: {
    ':hover': {
      cursor: 'pointer'
    }
  }
});
