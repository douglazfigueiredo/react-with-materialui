import { createTheme } from "@mui/material"
import { purple, cyan, red } from "@mui/material/colors"

export const LightTheme = createTheme({
  palette: {
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
      paper: '#FFFFFF',
      default: '#F7F6F3',
    }
  }
})