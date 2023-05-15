import React from'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import'./navbar.css'
function Navbar(){
    return (
        <>

                <AppBar position="static" className='navbar' color='transparent'>
                    <Toolbar variant="dense">
                        
                        <Box style={{ cursor: "pointer" }} >
                            <Typography variant="h5" color="inherit">
                                BlogPessoal
                            </Typography>
                        </Box>
    
                        <Box display="flex" justifyContent="start">
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    home
                                </Typography>
                            </Box>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    postagens
                                </Typography>
                            </Box>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    temas
                                </Typography>
                            </Box>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    cadastrar tema
                                </Typography>
                            </Box>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                        </Box>
    
                        
                    </Toolbar>
                </AppBar>
            </>
      )
}
export default Navbar;