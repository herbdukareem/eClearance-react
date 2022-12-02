import { 
    Container,
    Grid,
    Stack,
    Divider,
    Box,
    Typography,
    TextField,
    Button,
    } from "@mui/material";
import {Header} from "./Header";
import Guidelines from "./components/Guidelines";
import LogoutOutlined from "@mui/icons-material/LoginOutlined";
export const Home = () => {
    return (
        
            <Container maxWidth="lg">
                <Box class="login-block" >
                     <Header/> 
                    <Stack  p={2} my={2} >
                     
                        <Grid container  spacing={2} className="card"  data-aos="zoom-in" divider={<Divider orientation="horizontal" flexItem />}>
                            <Grid item xs={12} sm={8}>
                                <Guidelines/>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                  <Typography vairant='h4' sx={{fontWeight: 'bolder'}}>Check Eligibility: </Typography>
                                    <Box>
                                        <TextField label='Enter Matric Number' variant='standard' fullWidth sx={{ m: 1 }} />
                                    </Box>
                                    <Box className="text-right">
                                        <Button variant='contained'  size="small" color="success" sizeSmall={true} sx={{
                                           textTransform: 'capitalize'
                                          
                                        }}
                                        endIcon={<LogoutOutlined/>}
                                        >Check Eligibility</Button>
                                    </Box>
                                   
                                        <br/>
                                        Already have a profile ? <br/> Click on <b><i>"Clearance Status/Profile"</i> </b> button below to check your clearance status <br/><br/>
                                    <Box className="text-right">
                                         <Button href='./login' variant='contained' size="small"  sizeSmall={true} sx={{
                                           textTransform: 'capitalize'
                                        }} color='error' endIcon={<LogoutOutlined/>}>Clearance Status/Profile  </Button>
                                    
                                    </Box>
                            </Grid>
                        </Grid>
                    </Stack>
                </Box>
            </Container>
            
    
    );
};