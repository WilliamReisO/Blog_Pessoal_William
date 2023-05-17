import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './navbar.css'
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <AppBar position="static" className='navbar' style={{backgroundColor :'orange'}}>
                <Toolbar variant="dense">
                    <Grid container spacing={2} justifyContent={'space-between'}>
                        <Box style={{ cursor: "pointer" }} >
                            
                            <Typography variant="h4" color="inherit">
                                <Link to="/login" >
                                  <Button variant='outlined' className='outlinedButton'> Blog Pessoal </Button>
                                </Link>
                            </Typography>
                        </Box>


                        <Box display="flex" justifyContent='space-arounde' >
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    <Link to="/home" >
                                        <Button variant='outlined' className='outlinedButton'> Home </Button>
                                    </Link>
                                </Typography>
                            </Box>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    <Link to="/Postagens">
                                        <Button variant='outlined' className='outlinedButton'> Postagens </Button>
                                    </Link>
                                </Typography>
                            </Box>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    <Link to="/Temas">
                                        <Button variant='outlined' className='outlinedButton'> Temas </Button>
                                    </Link>
                                </Typography>
                            </Box>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit" marginRight={1}>
                                    <Link to="/Cadastrar">
                                    <Button variant='outlined' className='outlinedButton'>Cadastrar Tema</Button>
                                    </Link>
                                </Typography>
                            </Box>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    <Link to="/login">
                                    <Button variant='outlined' className='outlinedButton'> logout </Button>
                                    </Link>
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Navbar;