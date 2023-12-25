import './App.css'
import {Stack, Button, IconButton, Typography, Container} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logoImage from './assets/kmon.png';
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
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: '100%', padding: '30px' }}>
        <Stack spacing={1} direction='row' alignItems='center'>
          <img src={logoImage} alt="Logo" width="40px" height="40px" />
          <Typography variant='h6'>KMon</Typography>
          <Button variant='text' disableRipple disableElevation sx={{ '&:hover': { backgroundColor: 'transparent' }}}>Home</Button>
          <Button variant='text' disableRipple disableElevation sx={{ '&:hover': { backgroundColor: 'transparent' }}}>Features</Button>
          <Button variant='text' disableRipple disableElevation sx={{ '&:hover': { backgroundColor: 'transparent' }}}>Demo</Button>
          <Button variant='text' disableRipple disableElevation sx={{ '&:hover': { backgroundColor: 'transparent' }}}>Team</Button>
          <IconButton disableRipple disableElevation><GitHubIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
          <IconButton disableRipple disableElevation ><LinkedInIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
        </Stack>
      </Container>
    </ThemeProvider>
  )
}

export default App
