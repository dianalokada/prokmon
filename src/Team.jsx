import { Container, Typography,  Grid, Card, Box, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LucyImage from './assets/Lucy.png'; 
import HudsonImage from './assets/Hudson.png';
import ElliotImage from './assets/Elliot.png';
import DarrylImage from './assets/Darryl.png';
import DianaImage from './assets/Diana.png';

function Team() {
  
    return (
        <Container id="team-section" >
            <Typography variant='h5' component='h1' sx={{textAlign: 'center', marginTop: '60px', marginBottom: '10px', fontWeight: 'bold', fontSize: '50px'}}> Meet the Team </Typography>
            
            <Container sx={{
                //backgroundColor: '#1f1f2b', // Replace with the hexadecimal code of the color you like
                paddingY: '80px', // Add some vertical padding
                //borderRadius: '8px', // Optional: if you want rounded corners
                textAlign: 'center', // Centers the text horizontally
                marginTop: '10px',
                marginBottom: '30px',
                maxWidth: "md"
            }}>
                <Grid container spacing={3} justifyContent="center" >

                    {/* First person */}
                    <Grid item xs={12} sm={3} >
                        <Card sx={{ 
                            border: '1px solid #ffffff33', 
                            backgroundColor: '#101418', 
                            borderRadius: '20px', 
                            color: 'white', 
                            boxShadow: '0px 0px 14px #bb99cc',
                            padding: '1.1rem', 
                            width: '150px', 
                            height: '230px',
                            overflow: 'hidden',
                            transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    animation: 'pulse 2.5s infinite ease-in-out',
                                },
                                '@keyframes pulse': {
                                  '0%': {
                                    transform: 'scale(1)',
                                  },
                                  '50%': {
                                    transform: 'scale(1.05)',
                                  },
                                  '100%': {
                                    transform: 'scale()',
                                  },
                                },
                            }}
                        >
                            <img 
                                src={LucyImage} 
                                alt="pic" 
                                style = {{
                                    width: '80%', 
                                    height: 'auto',
                                    borderRadius: '100px'
                                }} 
                            />
                            <Box sx = {{
                                paddingY: '20px', 
                                paddingX: '16px', 
                                textAlign: 'center', 
                                }}
                                >
                                <Typography variant='h6' component='h2' gutterBottom 
                                sx= {{
                                    fontSize: '1rem',
                                    whiteSpace: 'nowrap', 
                                    textAlign: 'center',
                                }}
                                >
                                    Lucy Wu
                                </Typography>
                                
                                <Box sx = {{display: 'flex', justifyContent: 'center'}}>
                                    <IconButton component="a" href="https://github.com/lwu15" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><GitHubIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
                                    <IconButton component="a" href="https://www.linkedin.com/in/lwu15/" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><LinkedInIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
                                </Box>
                                </Box>
                        </Card>
                    </Grid>
                    {/* end of first person */}

                    {/* Second person */}
                    <Grid item xs={12} sm={3}>
                        <Card sx={{ 
                            border: '1px solid #ffffff33', 
                            backgroundColor: '#101418', 
                            borderRadius: '20px', 
                            color: 'white', 
                            boxShadow: '0px 0px 14px #bb99cc',
                            padding: '1.1rem', 
                            width: '150px', 
                            height: '230px',
                            overflow: 'hidden',
                            transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    animation: 'pulse 2.5s infinite ease-in-out',
                                },
                                '@keyframes pulse': {
                                  '0%': {
                                    transform: 'scale(1)',
                                  },
                                  '50%': {
                                    transform: 'scale(1.05)',
                                  },
                                  '100%': {
                                    transform: 'scale()',
                                  },
                                },
                            }}
                        >
                            <img 
                                src={HudsonImage} 
                                alt="pic" 
                                style = {{
                                    width: '80%', 
                                    height: 'auto',
                                    borderRadius: '100px'
                                }} 
                            />
                            <Box sx = {{
                                paddingY: '20px', 
                                paddingX: '16px', 
                                textAlign: 'center', 
                                }}
                                >
                                <Typography variant='h6' component='h2' gutterBottom sx= {{
                                    fontSize: '1rem',
                                    whiteSpace: 'nowrap', // Prevents the text from wrapping
                                    textAlign: 'center',
                                }}
                                >
                                    Hudson McLane
                                </Typography>
                                
                                <Box sx = {{display: 'flex', justifyContent: 'center'}}>
                                    <IconButton component="a" href="https://github.com/redferret1" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><GitHubIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
                                    {/* <IconButton component="a" href="" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><LinkedInIcon sx={{ width: '30px', height: '30px' }} /></IconButton> */}
                                </Box>
                                </Box>
                        </Card>
                    </Grid>
                    {/* end of second person */}

                    {/* start of third person */}
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ 
                            border: '1px solid #ffffff33', 
                            backgroundColor: '#101418', 
                            borderRadius: '20px', 
                            color: 'white', 
                            boxShadow: '0px 0px 14px #bb99cc',
                            padding: '1.1rem', 
                            width: '150px', 
                            height: '230px',
                            overflow: 'hidden',
                            transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    animation: 'pulse 2.5s infinite ease-in-out',
                                },
                                '@keyframes pulse': {
                                  '0%': {
                                    transform: 'scale(1)',
                                  },
                                  '50%': {
                                    transform: 'scale(1.05)',
                                  },
                                  '100%': {
                                    transform: 'scale()',
                                  },
                                },
                            }}
                        >
                            <img 
                                src={ElliotImage} 
                                alt="pic" 
                                style = {{
                                    width: '80%', 
                                    height: 'auto',
                                    borderRadius: '100px'
                                }} 
                            />
                            <Box sx = {{
                                paddingY: '20px',
                                paddingX: '16px', 
                                textAlign: 'center', 
                                }}
                                >
                                <Typography variant='h6' component='h2' gutterBottom sx= {{
                                    fontSize: '1rem',
                                    whiteSpace: 'nowrap', 
                                    textAlign: 'center',
                                }}
                                >
                                    Elliot Cho
                                </Typography>
                                
                                <Box sx = {{display: 'flex', justifyContent: 'center'}}>
                                    <IconButton component="a" href="https://github.com/echochs1" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><GitHubIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
                                    <IconButton component="a" href="https://www.linkedin.com/in/elliot-hs-cho/" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><LinkedInIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
                                </Box>
                                </Box>
                        </Card>
                    </Grid>
                    {/* end of third person */}

                    {/* start of fourth person */}
                    <Grid item container xs={12} justifyContent="center" spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <Card sx={{ 
                            border: '1px solid #ffffff33', 
                            backgroundColor: '#101418', 
                            borderRadius: '20px', 
                            color: 'white', 
                            boxShadow: '0px 0px 14px #bb99cc',
                            padding: '1.1rem', 
                            width: '150px', 
                            height: '230px',
                            overflow: 'hidden',
                            transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    animation: 'pulse 2.5s infinite ease-in-out',
                                },
                                '@keyframes pulse': {
                                  '0%': {
                                    transform: 'scale(1)',
                                  },
                                  '50%': {
                                    transform: 'scale(1.05)',
                                  },
                                  '100%': {
                                    transform: 'scale()',
                                  },
                                },
                            }}
                        >
                            <img 
                                src={DarrylImage} 
                                alt="pic" 
                                style = {{
                                    width: '80%', 
                                    height: 'auto',
                                    borderRadius: '100px'
                                }} 
                            />
                            <Box sx = {{
                                paddingY: '20px', 
                                paddingX: '16px', 
                                textAlign: 'center', 
                                }}
                                >
                                <Typography variant='h6' component='h2' gutterBottom sx= {{
                                    fontSize: '1rem',
                                    whiteSpace: 'nowrap', 
                                    textAlign: 'center',
                                }}
                                
                                >
                                    Darryl Joo
                                </Typography>
                                
                                <Box sx = {{display: 'flex', justifyContent: 'center'}}>
                                    <IconButton component="a" href="https://github.com/hjdjoo" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><GitHubIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
                                    {/* <IconButton component="a" href="https://github.com/hjdjoo" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><LinkedInIcon sx={{ width: '30px', height: '30px' }} /></IconButton> */}
                                </Box>
                                </Box>
                        </Card>
                    </Grid>
                    {/* end of fourth person */}

                    {/* start of fifth person */}
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ 
                            border: '1px solid #ffffff33', 
                            backgroundColor: '#101418', 
                            borderRadius: '20px', 
                            color: 'white', 
                            boxShadow: '0px 0px 14px #bb99cc',
                            padding: '1.1rem', 
                            width: '150px', 
                            height: '230px',
                            overflow: 'hidden',
                            transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    animation: 'pulse 2.5s infinite ease-in-out',
                                },
                                '@keyframes pulse': {
                                  '0%': {
                                    transform: 'scale(1)',
                                  },
                                  '50%': {
                                    transform: 'scale(1.05)',
                                  },
                                  '100%': {
                                    transform: 'scale()',
                                  },
                                },
                            }}
                        >
                            <img 
                                src={DianaImage} 
                                alt="pic" 
                                style = {{
                                    width: '80%', 
                                    height: 'auto',
                                    borderRadius: '100px'
                                }} 
                            />
                            <Box sx = {{
                                paddingY: '20px', 
                                paddingX: '16px', 
                                textAlign: 'center', 
                                }}
                                >
                                <Typography variant='h6' component='h2' gutterBottom sx= {{
                                    fontSize: '1rem',
                                    whiteSpace: 'nowrap', 
                                    textAlign: 'center',
                                }}
                                >
                                    Diana Alokhina
                                </Typography>
                                
                                <Box sx = {{display: 'flex', justifyContent: 'center'}}>
                                    <IconButton component="a" href="https://github.com/dianalokada" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><GitHubIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
                                    <IconButton component="a" href="https://www.linkedin.com/in/diana-alokhina/" target="_blank" rel="noopener noreferrer" disableRipple disableElevation sx={{ padding: '0px', margin: '0 3px' }} ><LinkedInIcon sx={{ width: '30px', height: '30px' }} /></IconButton>
                                </Box>
                                </Box>
                        </Card>
                    </Grid>
                    {/* end of fifth person */}
                    </Grid>
                </Grid>
            </Container>
        </ Container>
    )
}

export default Team;