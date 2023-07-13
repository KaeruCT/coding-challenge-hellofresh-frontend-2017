import React from 'react';
import PropTypes from 'prop-types';
import AppContainer from '../containers/AppContainer.jsx';
import { Subscribe } from 'unstated';
import { StyleSheet, css } from 'aphrodite';
import { Star } from 'react-feather';
import { colors, spacing } from '../styles/variables';

class RecipeRating extends React.Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  doRating = (app, rating, e) => {
    const { recipe } = this.props;
    e.preventDefault();
    e.stopPropagation();
    app.rate(recipe, rating);
  };

  stars(app, recipe) {
    const max = 4;
    const rating = Math.round(recipe.rating || 0);
    const stars = [];

    for (let i = 0; i < max; i++) {
      stars.push(
        <a href="#" key={i} onClick={e => this.doRating(app, i + 1, e)}>
          <Star
            color={colors.star}
            fill={i < rating ? colors.star : colors.transparent}
          />
        </a>
      );
    }
    return stars;
  }

  render() {
    const { recipe } = this.props;
    return (
      <Subscribe to={[AppContainer]}>
        {app => (
          <div className={css(styles.rating)}>
            <div className={css(styles.stars)}>{this.stars(app, recipe)}</div>

            <span className={css(styles.ratingVal)}>
              ({recipe.rating || 0})
            </span>
          </div>
        )}
      </Subscribe>
    );
  }
}

const styles = StyleSheet.create({
  rating: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  stars: {
    flex: 1
  },
  ratingVal: {
    flex: 0,
    alignSelf: 'center',
    marginLeft: spacing
  }
});

export default RecipeRating;
