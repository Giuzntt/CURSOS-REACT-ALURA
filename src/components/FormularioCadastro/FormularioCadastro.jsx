import React from 'react';
import { Fragment } from 'react';
import DadosEntrega from './DadosEntregas';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';



function FormularioCadastro({aoEnviar, validarCPF}) {
    
    return (
        <Fragment>
        <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
        <DadosUsuario/>   
        <DadosEntrega/>
        </Fragment>
    )


}



export default FormularioCadastro
