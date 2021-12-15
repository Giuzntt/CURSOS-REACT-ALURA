import { Stepper } from '@material-ui/core';
import { Step, StepLabel, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import DadosEntrega from './DadosEntregas';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';



function FormularioCadastro({aoEnviar}) {
    const [etapaAtual, setEtapaAtual] = useState(0)
    const [dadosColetados, setDados] = useState({})
    useEffect(()=>{
        if(etapaAtual === formulario.length-1){
            aoEnviar(dadosColetados)
        }
    })
    const formulario = [
        <DadosUsuario  aoEnviar={coletarDados}   />, 
        <DadosPessoais aoEnviar={coletarDados}   />, 
        <DadosEntrega  aoEnviar={coletarDados}   /> ,
        <Typography variant='h5'>Obrigado por se cadastrar!</Typography>
]

    function  coletarDados(dados) {

        setDados({...dadosColetados, ...dados})
        proximo()
    }
    function proximo() {
        setEtapaAtual(etapaAtual+1)
        
    }

   



    return <>
               <Stepper activeStep={etapaAtual}>
                    <Step><StepLabel>Login</StepLabel></Step>
                    <Step><StepLabel>Pessoal</StepLabel></Step>
                    <Step><StepLabel>Entrega</StepLabel></Step>
                    <Step><StepLabel>Finalização</StepLabel></Step>
                 </Stepper>
            {formulario[etapaAtual]}
        </>;
    
    
    
}
    

   

export default FormularioCadastro
