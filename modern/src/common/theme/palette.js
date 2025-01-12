import {
  amber, grey, green, indigo, red, common,
} from '@mui/material/colors';

const colors = {
  white: common.white,
  background: grey[900],
  primary: indigo[400],
  secondary: green[800],
  positive: green[500],
  medium: amber[700],
  negative: red[500],
  neutral: grey[500],
  geometry: '#3bb2d0',
};

export default {
  mode: 'dark',
  background: {
    default: colors.background,
  },
  primary: {
    main: colors.primary,
  },
  secondary: {
    main: colors.secondary,
    contrastText: colors.white,
  },
  colors,
};
