import React from 'react';
import * as Icon from 'react-feather';
import { StyleSheet, css } from 'aphrodite';
import { colors } from '../styles/variables';

export default () => (
  <div className={css(styles.loadingContainer)}>
    <Icon.RefreshCw
      color={colors.primaryDarker}
      className={css(styles.loading)}
    />
  </div>
);

const spin = {
  from: {
    transform: 'rotate(0)'
  },
  to: {
    transform: 'rotate(359deg)'
  }
};

const styles = StyleSheet.create({
  loadingContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
  loading: {
    width: 100,
    height: 100,
    animationName: [spin],
    animationDuration: '0.8s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear'
  }
});
