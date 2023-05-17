import React from 'react';
import { Grid , Box , Typography} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './footer.css'

function Footer(){
        return (
            <>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid alignItems="center" item xs={12}>
                        <Box className='box1'>
                            <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                                <Typography variant="h4" gutterBottom className='texto'>
                                    Entre em contato comigo
                                </Typography>
                            </Box>
                            <Box display="flex" alignItems="center" justifyContent="center">
                                <a href="https://www.facebook.com/generationbrasil" target="_blank">
                                    <FacebookIcon className='redes'/>
                                </a>
                                <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                    <InstagramIcon className='redes'/>
                                </a>
                                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                    <LinkedInIcon className='redes'/>
                                </a>
                            </Box>
                        </Box>
                        <Box className='box2'>
                            <Box paddingTop={1}>
                                <Typography variant="subtitle2" gutterBottom className='texto' >© 2023 Copyright:</Typography>
                            </Box>
                            <Box>
                                <a target="_blank" href="https://brasil.generation.org">
                                    <Typography variant="subtitle2" gutterBottom className='texto'>brasil.generation.org</Typography>
                                </a>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </>
        )
}
export default Footer;