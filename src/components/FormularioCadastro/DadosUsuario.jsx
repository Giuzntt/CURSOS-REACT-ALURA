import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import ValidacoesCadastro from '../../contexts/ValidacaoCadastro';
import useErros from '../../hooks/useErros';


function DadosUsuario({ aoEnviar}) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos]= useErros(validacoes)


    function possoEnviar() {

        for(let campo in erros){
            if (!erros[campo].valido) {
                return false
            }
        }
        return true
    }

    return(
        <form onSubmit={(event) =>{
            event.preventDefault()
            aoEnviar({email, senha})

            if(possoEnviar( )){

            }

        }}>
            <TextField
            value={email}
            onChange={(event)=>{
                setEmail(event.target.value)
            }}
              id="email"
              name='nome'
              label="E-mail"
              type={'email'}
              variant='outlined'
              fullWidth
              margin='normal'
              required
            />
            <TextField
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
              id="password"
              name='senha'
              label="Senha"
              type={'password'}
              variant='outlined'
                fullWidth
                margin='normal'
                required
            />
            < Button variant="contained"
                type='submit'
                color="primary"
                margin='normal'
                fullWidth
                 >
                Próximo
            </Button>
        </form>
    );
    
}



export default DadosUsuario;