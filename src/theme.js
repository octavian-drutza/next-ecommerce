import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  
  palette: {
    primary: {
      main: '#016bb7',
    },
    secondary: {
      main: '#da1d20',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  overrides: {
    MuiLink: {
      root: {
        color: 'black',
      }
    },
    MuiButtonBase: {
        root: {
            backgroundColor: "#e6f91c",
        },
    },
    MuiAppBar: {
        colorPrimary: {
            backgroundColor: "#e6f91c",
        }
    },
  }
});

export default theme;