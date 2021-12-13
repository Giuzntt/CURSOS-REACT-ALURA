import React from 'react';
import { Fragment } from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';



function FormularioCadastro({aoEnviar, validarCPF}) {
    
    return (
        <Fragment>
        <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
        <DadosUsuario/>   
        </Fragment>
    )


}



export default FormularioCadastro
