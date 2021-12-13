import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

class App  extends Component{

    

  render(){

    
    return (
      <Container component="article" maxWidth="lg">
        <Typography className='atata' variant="h5" color="initial" textAlign='center'>Preencha o seu formulário</Typography>
        <FormularioCadastro validarCPF={validarCPF} aoEnviar={aoEnviarForm} />
      </Container>
     
     
      );
    }
}
function aoEnviarForm(dados) {
  console.log(dados);
}
function validarCPF(cpf) {
  if(cpf.length !== 11){
    return { valido: false, texto: 'CPF deve ter 11 digitos' }
  } else{
    return { valido: true, texto: '' }
  }
}

export default App;
