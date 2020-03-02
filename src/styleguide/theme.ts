import { Theme } from 'styled-system';
import { colors } from './colors';
import { space } from './space';

export const breakpoints: string[] = ['319px', '424px', '767px', '1023px'];

// breakpoints.sm = breakpoints[0]
// breakpoints.md = breakpoints[1]
// breakpoints.lg = breakpoints[2]
// breakpoints.xl = breakpoints[3]

// export default {
//   breakpoints,
// }

export const defaultTheme: Theme = {
  space: {
    ...space,
  },
  breakpoints,
  colors: {
    ...colors,
  },
};
