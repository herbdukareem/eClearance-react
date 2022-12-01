import { Container, Grid} from "@mui/material";
import {Header} from "./Header";
export const Home = () => {
    return (
        <div class="login-block" >
            <Container maxWidth="lg">
                <Header/>  
                    <Grid container  spacing={2} className="card"  data-aos="zoom-in">
                        <Grid item xs={6}>
                              <div>
                                    <h4>Welcome to 2021/2022 eClearance </h4>
                                    <h6 class="guideline" >Instruction:</h6>
                                    <ol>
                                        <li>Applicant should check Eligibility before proceeding to payment</li>
                                        <li> Clearance requirement includes scan copies of your credentials: - O'level sittings, Primary Cerificate, Indigene or Birth Certificate.</li>
                                        <li>Payment are accepted only through your Debt Card (Verve, Master, VISA Card) or Online Bank payment.</li>
                                    </ol>
                                        
                                        For More Information, Please Contact: 08130051228
                                </div>
                        </Grid>
                        <Grid item xs={6}>
                            
                        </Grid>
                    </Grid>
            </Container>
            
    </div>
    );
};