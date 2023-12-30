import { Container, Typography, Grid, Stack, Card, CardMedia, CardContent, Button } from '@mui/material'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

function Demo() {
  
    return (
        <Container id="demo-section">
            <Typography variant='h5' component='h1' sx={{textAlign: 'center', marginTop: '0px', marginBottom: '40px', fontWeight: 'bold', fontSize: '50px'}}> See KMon in Action </Typography>
            <Grid container spacing={2} alignItems="center" justifyContent="center">

                {/* first grid */}
                <Grid item xs={6} sx={{ textAlign: 'center' }}> 

                    <Stack spacing={2} alignItems="center" >
                    <Button variant='contained' sx={{
                        //marginTop: '30px',
                        backgroundColor: '#bd5df1',
                        color: 'white',
                        borderRadius: '20px',
                        padding: '10px 30px',
                        width: '180px',
                        boxShadow: '0px 0px 14px #bb99cc',
                        transition: 'transform 0.3s ease-in-out',
                            '&:hover': {
                                backgroundColor: '#bd5df1',
                        },
                        }}
                        >
                        Demo 
                        < TrendingFlatIcon sx={{marginLeft: '8px'}}/>
                    </Button>
                    <Typography>Click to watch Live Demo </Typography>
                    </Stack>

                </Grid>

                {/* second grid */}
                <Grid item xs={6} sx={{ textAlign: 'center', paddingRight: '50px'}}>
                    <Card sx={{ marginRight: '20px' }}>
                        <CardMedia component="video" controls>
                            <source src="path_to_your_video.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </CardMedia>
                        <CardContent>
                            {/* Additional content like title or description */}
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </ Container>
    )
}

export default Demo;