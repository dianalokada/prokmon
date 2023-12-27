import {Stack, Button, IconButton, Typography, Container, Box} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logoImage from './assets/kmon.png';
import { Link } from 'react-scroll'

function Header() {
  
  // this is header
  return (
    
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', width: '100%', padding: '30px' }}>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

          <Stack spacing={1} direction='row' alignItems='center'>
            <Typography variant='h6'>KMon</Typography>
            <img src={logoImage} alt="Logo" width="40px" height="40px" />
          </Stack>

          <Stack direction='row' alignItems='center' spacing={1}>
            <Link to="about-section" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant='text' disableRipple disableElevation sx={{ '&:hover': { backgroundColor: 'transparent' }}}>Home</Button>
            </Link>
            <Link to="features-section" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant='text' disableRipple disableElevation sx={{ '&:hover': { backgroundColor: 'transparent' }}}>Features</Button>
            </Link>
            <Link to="demo-section" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant='text' disableRipple disableElevation sx={{ '&:hover': { backgroundColor: 'transparent' }}}>Demo</Button>
            </Link>
            <Link to="team-section" spy={true} smooth={true} offset={-70} duration={500}>
              <Button variant='text' disableRipple disableElevation sx={{ '&:hover': { backgroundColor: 'transparent' }}}>Team</Button>
            </Link>
            <IconButton /*component="a" href="" target="_blank" rel="noopener noreferrer"*/ disableRipple disableElevation><GitHubIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
            <IconButton /*component="a" href="" target="_blank" rel="noopener noreferrer"*/ disableRipple disableElevation ><LinkedInIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
          </Stack>
          
        </Box>
      </Container>
  )
}

export default Header;
