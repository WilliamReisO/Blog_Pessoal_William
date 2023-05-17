import React from 'react'
import {Box,Grid,Typography} from '@mui/material'
import { Button } from '@material-ui/core'
import './Home.css'
function Home() {
  return (
    <>
        <Grid container className='gridconf'>
            <Grid alignItems="center" item xs={6}>
                <Box paddingX={20} >
                    <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>
                      Seja bem vindo(a)!
                    </Typography>
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>
                      expresse aqui os seus pensamentos e opiniões!
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Box marginRight={1}>
                    </Box>
                    <Button className='button'>
                      Ver Postagens
                    </Button>
                </Box>
            </Grid>
            <Grid item xs={6} className='contained'>
                
            </Grid>
            <Grid xs={12} style={{ backgroundColor: "white" }}>
            </Grid>
        </Grid>
    </>
);
}

export default Home;

