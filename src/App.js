import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import {validarCPF, validarSenha} from './models/cadastro'
import ValidacoesCadastro from './contexts/ValidacaoCadastro';
class App  extends Component{

    

  render(){

    
    return (
      <Container component="article" maxWidth="lg">
      <Typography className='atata' variant="h5" color="initial" textAlign='center'>Preencha o seu formulário</Typography>
      <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarSenha }}>
          <FormularioCadastro  Enviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
      

      </Container>
     
     
      );
    }
}
function aoEnviarForm(dados) {
  console.log(dados);
}


export default App;
