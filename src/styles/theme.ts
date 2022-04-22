import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    gray: PaletteColor;
  }
  interface PaletteOptions {
    gray: PaletteColorOptions;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF9B25',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: red.A400,
    },
    gray: {
      main: '#ededf0',
    },
  },
  typography: {
    fontFamily: 'SF Pro',
    fontSize: 16,
  },
});

export const commonStyles = {
  container: {
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
  },
};

export default theme;
