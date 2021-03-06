import { createTheme } from "@mui/material"
import { purple, cyan } from "@mui/material/colors"

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: purple[700],
      dark: purple[800],
      light: purple[500],
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#FFFFFF',
    },
    background: {
      paper: '#303134',
      default: '#202124',
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    allVariants: {
      color: "white",
    }
  }
})