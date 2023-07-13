import { StyleSheet } from 'aphrodite';
import {
  borderRadius,
  boxShadow,
  colors,
  fontSizes,
  inputBorder,
  spacing
} from './variables';

export default StyleSheet.create({
  app: {
    backgroundColor: colors.background,
    margin: 0,
    padding: 0
  },
  page: {
    color: colors.text,
    fontFamily: '"Helvetica Neue", Helvetica, Ubuntu, sans-serif',
    fontSize: '18px',
    maxWidth: 1200,
    margin: '0 auto',
    marginTop: spacing,
    '@media (max-width: 800px)': {
      maxWidth: 600
    }
  },
  title: {
    fontSize: fontSizes.large,
    fontWeight: 'bold',
    padding: spacing,
    margin: 0,
    marginBottom: spacing
  },
  error: {
    backgroundColor: colors.backgroundError,
    color: colors.primaryText,
    fontSize: fontSizes.regular,
    fontWeight: 'bold',
    padding: spacing * 2
  },
  card: {
    backgroundColor: colors.backgroundLight,
    borderRadius: borderRadius,
    boxShadow: boxShadow
  },
  button: {
    backgroundColor: colors.primary,
    border: 0,
    borderRadius: borderRadius,
    color: colors.primaryText,
    fontWeight: 'bold',
    fontSize: fontSizes.regular,
    padding: spacing,
    transition: 'background-color .2s ease-out',
    ':hover': {
      background: colors.primaryDarker,
      cursor: 'pointer'
    },
    ':active': {
      background: colors.primaryDarker,
      outline: 'none'
    }
  },
  labelText: {
    color: colors.labelText,
    fontSize: fontSizes.small
  },
  input: {
    padding: spacing,
    color: colors.inputText,
    border: inputBorder,
    borderColor: colors.inputBorder,
    fontSize: fontSizes.regular
  }
});
