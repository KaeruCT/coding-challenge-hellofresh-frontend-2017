import React from 'react';
import PropTypes from 'prop-types';
import AppContainer from '../containers/AppContainer.jsx';
import { Subscribe } from 'unstated';
import { Heart } from 'react-feather';
import { colors } from '../styles/variables';

class RecipeFavorite extends React.Component {
  static propTypes = {
    recipe: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  doFavorite = (app, e) => {
    const { recipe } = this.props;
    e.preventDefault();
    e.stopPropagation();
    app.toggleFavorite(recipe);
  };

  render() {
    const { recipe } = this.props;
    return (
      <Subscribe to={[AppContainer]}>
        {app => (
          <a href="#" onClick={e => this.doFavorite(app, e)}>
            <Heart
              color={colors.heart}
              fill={recipe.favorite ? colors.heart : colors.transparent}
            />
          </a>
        )}
      </Subscribe>
    );
  }
}

export default RecipeFavorite;
