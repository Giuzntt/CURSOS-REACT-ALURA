import React, { useState } from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'


function DadosUsuario({ aoEnviar}) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    return(
        <form onSubmit={(event) =>{
            event.preventDefault()
            aoEnviar({email, senha})
        }}>
            <TextField
            value={email}
            onChange={(event)=>{
                setEmail(event.target.value)
            }}
              id="email"
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
              id="password"
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
                Cadastrar
            </Button>
        </form>
    );
    
}



export default DadosUsuario;