import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Poppins from "@fontsource/poppins";

class App  extends Component{

    

  render(){

    
    return (
      <Container component="article" maxWidth="lg">
        <Typography className='atata' variant="h5" color="initial" textAlign='center'>Preencha o seu formulário</Typography>
        <FormularioCadastro />
      </Container>
     
     
      );
    }
}

export default App;
