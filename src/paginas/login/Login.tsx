import { Link } from 'react-router-dom';
import './Login.css';
import { Grid ,Typography, TextField , Box ,Button} from '@mui/material';


function Login() {
  return (
   
  <Grid
    container
    alignItems={'center'}
    justifyContent={'center'}
    style={{minHeight: '100vh', backgroundColor: "#fcbf49" }}
    marginRight={80}  
  >
    <Box className="card">
      <form className="form" >
        <Typography variant="h3" align="center" textTransform={'uppercase'} className="form-title" color='#fff'>
          Login
        </Typography>
        <Box className="form-input">
          <TextField variant="standard" label="Usuario" fullWidth />
        </Box>
        <Box className="form-input">
          <TextField variant="standard" label="Senha" type='password' fullWidth />
        </Box>
        <Button variant='contained' fullWidth className='button'>
          Logar
        </Button>
       <Box display={'flex'} justifyContent={'center'} marginTop={2}>
        <Typography variant = 'subtitle1' gutterBottom align='center'>
          Não tem uma conta ?
        </Typography>
        <Typography variant='subtitle2' gutterBottom align='center' style={{fontWeight: 'bold'}}>
          <Link to="/cadastro">Cadastre-se</Link>
        </Typography>
      </Box>
      </form>
    </Box>
    <Grid xs={6} className='container'>
    </Grid>
  </Grid>
);
}

export default Login