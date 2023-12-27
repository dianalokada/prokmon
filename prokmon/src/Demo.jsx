import { Container, Typography, Grid, Stack, Card, CardMedia, CardContent } from '@mui/material'

function Demo() {
  
    return (
        <Container>
            <Typography variant='h5' component='h1' sx={{textAlign: 'center', marginTop: '30px', marginBottom: '30px', fontWeight: 'bold', fontSize: '50px'}}> See KMon in Action </Typography>
            <Grid container spacing={2} alignItems="center" justifyContent="center">

                {/* first grid */}
                <Grid item xs={6} sx={{ textAlign: 'center' }}> 

                    <Stack spacing={2}>

                    </Stack>

                </Grid>

                {/* second grid */}
                <Grid item xs={6} sx={{ textAlign: 'center' }}>
                    <Card>
                        <CardMedia component="video" controls>
                            <source src="path_to_your_video.mp4" type="video/mp4" />
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