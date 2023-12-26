import { Container, Typography, Grid, Stack } from '@mui/material'

function Demo() {
  
    return (
        <Container>
            <Typography variant='h5' component='h1' sx={{textAlign: 'center', marginTop: '30px', marginBottom: '30px', fontWeight: 'bold', fontSize: '50px'}}> See KMon in Action! </Typography>
            <Grid container spacing={2} alignItems="center" justifyContent="center">

                <Grid item xs={6} sx={{ textAlign: 'center' }}> 

                    <Stack spacing={2}>

                    </Stack>

                </Grid>

                <Grid item xs={6} sx={{ textAlign: 'center' }}>
                    
                </Grid>

            </Grid>
        </ Container>
    )
}

export default Demo;