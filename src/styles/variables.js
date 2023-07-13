const palette = {
  black: '#333',
  blueishGray: '#F0F3F7',
  darkGreen: '#0B5D1E',
  darkGrey: '#555',
  green: '#39A839',
  grey: '#EAEAEA',
  red: '#B4302B',
  shadow: 'rgba(0, 0, 0, 0.3)',
  translucidBlack: 'rgba(0, 0, 0, 0.7)',
  transparent: 'transparent',
  white: '#FFF',
  yellow: '#E8B650'
};

export const colors = {
  primary: palette.green,
  primaryDarker: palette.darkGreen,
  primaryText: palette.white,
  background: palette.blueishGray,
  backgroundLight: palette.white,
  backgroundDark: palette.grey,
  text: palette.black,
  labelText: palette.darkGrey,
  inputBorder: palette.grey,
  inputText: palette.black,
  backgroundError: palette.red,
  boxShadow: palette.shadow,
  backdrop: palette.translucidBlack,
  heart: palette.red,
  star: palette.yellow,
  transparent: palette.transparent
};

export const fontSizes = {
  large: '2em',
  regular: '1em',
  small: '.8em'
};

export const borderRadius = 5;

export const inputBorder = '2px solid';

export const spacing = 10;

export const boxShadow = `0 2px 6px 0 ${colors.boxShadow}`;
