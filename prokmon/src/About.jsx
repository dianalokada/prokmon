import { Container, Typography, Grid, Stack, Button } from '@mui/material'
import logoImage from './assets/kmon.png';

function About() {
  
    return (
        <Container>
            <Typography variant='h5' component='h1' sx={{textAlign: 'center', marginTop: '30px', marginBottom: '30px', fontWeight: 'bold', fontSize: '50px'}}> Introducing KMon</Typography>
            
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={6} sx={{ textAlign: 'center' }}>  
                    <Stack spacing={2}>  
                        
                        <Typography variant='body1'>KMon is an open source Kafka cluster monitoring tool with customization for metrics visualizations and configurable alerts that is fully compatible with KRaft.
                        </Typography>

                    </Stack>

                    <Button variant='contained' sx={{
                        marginTop: '30px',
                        backgroundColor: '#8e44ad',
                        color: 'white',
                        borderRadius: '20px',
                        padding: '10px 30px',
                        width: '180px',
                        '&:hover': {
                            backgroundColor: '#9b59b6',
                        },
                        boxShadow: '0px 0px 10px #bb99cc',
                        }}
                        >
                        Explore
                    </Button>
                </Grid>

                <Grid item xs={6} sx={{ textAlign: 'center' }}>
                    <img src={logoImage} 
                    alt="Logo" width="250px" height="250px" 
                    />
                </Grid>

            </Grid>
        </ Container>
    )
}

export default About;