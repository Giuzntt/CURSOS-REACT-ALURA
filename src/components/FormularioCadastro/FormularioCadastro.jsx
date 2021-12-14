import React, { useState } from 'react';
import { useEffect } from 'react';
import { Fragment } from 'react';
import DadosEntrega from './DadosEntregas';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';



function FormularioCadastro({aoEnviar, validarCPF}) {
    const [etapaAtual, setEtapaAtual] = useState(0)
    const [dadosColetados, setDados] = useState({})
    useEffect(()=>{
      console.log(dadosColetados);  
    })
    const formulario = [
    <DadosUsuario aoEnviar={coletarDados} />, 
        <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />, 
        <DadosEntrega aoEnviar={coletarDados} /> 
]

    function  coletarDados(dados) {

        setDados({...dadosColetados, ...dados})
        proximo()
    }
    function proximo() {
        setEtapaAtual(etapaAtual+1)
        
    }

   



    return (
        <Fragment>
            {
                formulario[etapaAtual]
            }
        </Fragment>
    )
    
    
}
    

   

export default FormularioCadastro
