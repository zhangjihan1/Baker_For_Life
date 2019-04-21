import { yellow, pink, red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const AppTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffa2c2"
    },
    secondary: {
      main: "#efcc24"
    },
    error: {
      main: red[600]
    }
  },
  typography: {
    useNextVariants: true
  },
  shape: {
    borderRadius: 4
  },
});

export default AppTheme;