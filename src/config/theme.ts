import { createTheme } from "@mui/material/styles";
import { lightGreen } from "@mui/material/colors";
// import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: lightGreen[600],
    },
    info: {
      main: lightGreen[200],
    },
    // secondary: {
    //   main: '#19857b',
    // },
    // error: {
    //   main: red.A400,
    // },
  },
});

export default theme;
