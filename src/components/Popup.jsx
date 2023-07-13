import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import common from '../styles/common';
import { colors, fontSizes, spacing } from '../styles/variables';
import RecipeFavorite from './RecipeFavorite.jsx';
import RecipeRating from './RecipeRating.jsx';

class Popup extends React.Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.node
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.addEventListener('keydown', this.checkEscapePress);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.checkEscapePress);
  }
  checkEscapePress = e => {
    const { onClose } = this.props;
    if (e.keyCode === 27) {
      onClose();
    }
  };
  doClose = e => {
    const { onClose } = this.props;
    if (e.target === this.bg) {
      e.preventDefault();
      onClose();
    }
  };
  render() {
    const { children, title, onClose } = this.props;
    return (
      <div
        ref={bg => (this.bg = bg)}
        className={css(styles.popupBg)}
        onClick={this.doClose}>
        <div className={css([common.card, styles.popup])}>
          {title}
          {children}
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  popupBg: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.backdrop,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    '@media (max-width: 600px), (max-height: 400px)': {
      alignItems: 'flex-start',
      overflowY: 'scroll'
    }
  },
  popup: {
    margin: spacing * 2,
    maxWidth: 600,
    '@media (max-width: 600px)': {
      margin: 0,
      width: '100%'
    }
  }
});

export default Popup;
