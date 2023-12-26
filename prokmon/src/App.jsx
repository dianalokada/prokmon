import './App.css'
import Header from './Header.jsx'
import About from './About.jsx'
import Features from './Features.jsx'
import Demo from './Demo.jsx'
import Team from './Team.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const theme = createTheme({
    palette: {
      // Define primary and secondary colors
      primary: {
        main: '#ffffff', // White color for primary text/buttons
      },
      secondary: {
        main: '#ffffff', // White color for secondary text/buttons (if needed)
      },
      // Other color definitions...
    },
    components: {
      // Override styles for specific components
      MuiTypography: {
        styleOverrides: {
          root: {
            color: '#ffffff', // Ensures all Typography uses white color
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: '#ffffff', // Ensures all Buttons have white text
            textTransform: 'none', //removes the default text capitalization
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            color: '#ffffff', // Ensures all IconButtons are white
          },
        },
      },
      // Other component overrides...
    },
    // ...other theme properties
  });
  

  return (
    <ThemeProvider theme={theme}>
        <Header />
        <About />
        <Features />
        <Demo />
        <Team />
    </ThemeProvider>
  )
}

export default App
