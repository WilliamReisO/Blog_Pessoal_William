import React from 'react'
import {Box,Grid,Typography} from '@mui/material'
import { Button } from '@material-ui/core'
import './Home.css'
function Home() {
    return (
        <>
        <Grid container gap={5} alignItems={'center'} justifyContent={'center'} style={{backgroundColor: 'orange'}}>
      <Grid item xs={5}>
        <Box p={8} color={'white'} display={'flex'} flexDirection={'column'} alignItems={'center'} gap={2}>
          <Typography align='center' fontWeight={900} variant='h3'>Bem Vindo  Usando React</Typography>
          <Typography align='center' variant='body1'>Espero arrumar um trabalho Logo </Typography>
          <Button variant='outlined' className='outlinedButton'>Ver Postagens</Button>
        </Box>
      </Grid>
      <Grid item xs={5}>
        <img src="BlogFrontEnd\img\Innovation.gif" alt="" width={'100%'} />
      </Grid>
    </Grid>
</>
    )
}

export default Home;

