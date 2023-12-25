import {Stack, Button, IconButton, Typography, Container, Box} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logoImage from './assets/kmon.png';

function Header() {
  
  return (
    
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: '100%', padding: '30px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

          <Stack spacing={1} direction='row' alignItems='center'>
            <img src={logoImage} alt="Logo" width="40px" height="40px" />
            <Typography variant='h6'>KMon</Typography>
          </Stack>

          <Stack direction='row' alignItems='center' spacing={1}>
            <Button variant='text' disableRipple disableElevation sx={{ '&:hover': { backgroundColor: 'transparent' }}}>Home</Button>
            <Button variant='text' disableRipple disableElevation sx={{ '&:hover': { backgroundColor: 'transparent' }}}>Features</Button>
            <Button variant='text' disableRipple disableElevation sx={{ '&:hover': { backgroundColor: 'transparent' }}}>Demo</Button>
            <Button variant='text' disableRipple disableElevation sx={{ '&:hover': { backgroundColor: 'transparent' }}}>Team</Button>
            <IconButton disableRipple disableElevation><GitHubIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
            <IconButton disableRipple disableElevation ><LinkedInIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
          </Stack>
          
        </Box>
      </Container>
  )
}

export default Header;
