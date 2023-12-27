import { Container, Grid, Card, CardContent, Typography, Button  } from '@mui/material'

function Features() {
  
    return (
        <Container sx={{
            //backgroundColor: '#1f1f2b', // Replace with the hexadecimal code of the color you like
            paddingY: '80px', // Add some vertical padding
            //borderRadius: '8px', // Optional: if you want rounded corners
            textAlign: 'center', // Centers the text horizontally
            marginTop: '30px',
            marginBottom: '30px',
            maxWidth: "md"
        }}>
            <Typography variant='h5' component='h1' sx={{textAlign: 'center', marginTop: '30px', marginBottom: '30px', fontWeight: 'bold', fontSize: '50px'}}> Features </Typography>
                <Grid container spacing={3} justifyContent="center" >
                    {/* First feature */}
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ 
                            border: '1px solid #ffffff33', 
                            backgroundColor: '#101418', 
                            borderRadius: '20px', color: 'white', 
                            boxShadow: '0px 0px 14px #bb99cc',
                            padding: '2rem', 
                            minWidth: '150px', 
                            minHeight: '120px',
                        }}
                            >
                            <CardContent>

                                <Typography variant='h6' component='h2' gutterBottom
                                sx= {{
                                    fontSize: '1rem',
                                    whiteSpace: 'nowrap', 
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    marginBottom: '25px'
                                }}
                                >
                                    Configurable Alerts
                                </Typography>

                                <Typography variant='body2'>
                                    Our Configurable Alerts feature is amazin hehehe
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>
                    {/* Second feature */}
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ 
                            border: '1px solid #ffffff33', 
                            backgroundColor: '#101418', 
                            borderRadius: '20px', color: 'white', 
                            boxShadow: '0px 0px 14px #bb99cc',
                            padding: '2rem', 
                            minWidth: '150px', 
                            minHeight: '120px',
                             }}>
                            <CardContent>

                                <Typography variant='h6' component='h2' gutterBottom
                                sx= {{
                                    fontSize: '1rem',
                                    whiteSpace: 'nowrap', 
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    marginBottom: '25px'
                                }}
                                >
                                    Configurable Alerts
                                </Typography>

                                <Typography variant='body2'>
                                    Our Configurable Alerts feature is amazin hehehe
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Second feature */}
                    <Grid item xs={12} sm={4}>
                        <Card sx={{ 
                            border: '1px solid #ffffff33', 
                            backgroundColor: '#101418', 
                            borderRadius: '20px', color: 'white', 
                            boxShadow: '0px 0px 14px #bb99cc',
                            padding: '2rem', 
                            minWidth: '150px', 
                            minHeight: '120px', 
                             }}>
                            <CardContent>

                                <Typography variant='h6' component='h2' gutterBottom
                                sx= {{
                                    fontSize: '1rem',
                                    whiteSpace: 'nowrap', 
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    marginBottom: '25px'
                                }}
                                >
                                    Configurable Alerts
                                </Typography>

                                <Typography variant='body2'>
                                    Our Configurable Alerts feature is amazin hehehe
                                </Typography>

                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            <Button variant='contained' sx={{
                        marginTop: '50px',
                        backgroundColor: '#bd5df1',
                        color: 'white',
                        borderRadius: '20px',
                        padding: '10px 30px',
                        width: '300px',
                        '&:hover': {
                            backgroundColor: '#bd5df1',
                        },
                        boxShadow: '0px 0px 14px #bb99cc',
                        }}
                        >
                        Read About Us on Medium
                    </Button>
        </ Container>
    )
}

export default Features;