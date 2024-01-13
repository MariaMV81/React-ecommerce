import {Typography} from '@mui/material'
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AndroidIcon from "@mui/icons-material/Android";
import Grid from "@mui/material/Grid";


export default function Footer(){
    return(
        <>
        <footer className="container-footer">
            <div className="container-left">
                <ul>
                    <li><a href="#">Sobre mi</a></li>
                    <li><a href="#">Sobre mi</a></li>
                    <li><a href="#">Sobre mi</a></li>
                    <li><a href="#">Sobre mi</a></li>
                </ul>
                    <ul>
                        <li><a href="#">Sobre mi</a></li>
                        <li><a href="#">Sobre mi</a></li>
                        <li><a href="#">Sobre mi</a></li>
                        <li><a href="#">Sobre mi</a></li>
                    </ul>
            </div>
            <div className="container-right">
                <div className="container-top">
                    <h3>Suscribete a mi New Letter</h3>
                    <p>Solo envio emails bonitos =)</p>
                    <label>Email</label>
                    <input placeholder="email"/>
                    <button >Enviar</button>
                </div>
                    <div className="container-botom">
                        <h3>Sigueme en mis redes:</h3>
                       <ul>
                            <li>linkedin</li>
                            <li>facebook</li>
                            <li>instagram</li>
                        </ul> 
                    </div>
            </div>

        </footer>

            <Typography
                variant="h1"
                component="h2"
            >
                Soy un h1
            </Typography>
            <Typography variant="h2">Soy un h2</Typography>
            <Typography variant="h3">Soy un h3</Typography>
            <Typography variant="h4">Soy un h4</Typography>

            <Container>
                <Button
                    variant="contained"
                    color="info"
                    startIcon={<AirplanemodeActiveIcon />}
                >
                    Botón personalizado
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<AndroidIcon />}
                >
                    Botón 2
                </Button>
            </Container>

            <Container>
                <Grid
                    container
                    spacing={8}
                >
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                    >
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                            aspernatur perferendis ipsum veniam, nostrum eos quaerat sequi sed,
                            quisquam minima provident, ad magnam saepe impedit voluptatem
                            ratione quas molestias! Nisi.
                        </p>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                    >
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                            aspernatur perferendis ipsum veniam, nostrum eos quaerat sequi sed,
                            quisquam minima provident, ad magnam saepe impedit voluptatem
                            ratione quas molestias! Nisi.
                        </p>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={4}
                    >
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                            aspernatur perferendis ipsum veniam, nostrum eos quaerat sequi sed,
                            quisquam minima provident, ad magnam saepe impedit voluptatem
                            ratione quas molestias! Nisi.
                        </p>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={4}
                    >
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
                            aspernatur perferendis ipsum veniam, nostrum eos quaerat sequi sed,
                            quisquam minima provident, ad magnam saepe impedit voluptatem
                            ratione quas molestias! Nisi.
                        </p>
                    </Grid>
                </Grid>
            </Container>
            <Typography
                variant="h1"
                component="h2"
                mb={2}
                color="primary"
                align="center"
                boxShadow={3}
                pb={2}
            >
                Soy un h1
            </Typography>


        </>
    )
}