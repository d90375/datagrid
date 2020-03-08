import * as CSS from 'csstype';

export interface ThemeColors {
  primary: CSS.ColorProperty;
  link: CSS.ColorProperty;
  success: CSS.ColorProperty;
  warning: CSS.ColorProperty;
  error: CSS.ColorProperty;
  heading: CSS.ColorProperty;
  text: CSS.ColorProperty;
  text2: CSS.ColorProperty;
  disabled: CSS.ColorProperty;
  border: CSS.ColorProperty;
  heading2: CSS.ColorProperty;
  white: CSS.ColorProperty;
  black: CSS.ColorProperty;
  active: CSS.ColorProperty;
  gray: CSS.ColorProperty;
  gray2: CSS.ColorProperty;
}

export const colors: ThemeColors = {
  primary: '#423EA2',
  warning: '#faad14',
  error: '#EE7490',
  heading: '#464A94',
  heading2: '#7A54B3',
  text: '#8B8BBC',
  text2: '#7D7DB7',
  disabled: '#A4A5D6',
  active: '#30D9B9',
  success: '#43DEC1',
  border: '#423EA2',
  black: '#000e1a',
  white: '#fff',
  gray: '#F7F6F9',
  gray2: '#333333',
  link: '#7D7DB7',
};
