import React from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'


function DadosUsuario() {
    return(
        <form>
            <TextField
              id="email"
              label="E-mail"
              type={'email'}
              variant='outlined'
              fullWidth
              margin='normal'
            />
            <TextField
              id="password"
              label="Senha"
              type={'password'}
              variant='outlined'
                fullWidth
                margin='normal'
            />
            < Button variant="contained"
                type='submit'
                color="secondary"
                margin='normal'
                fullWidth
                 >
                Cadastrar
            </Button>
        </form>
    );
    
}



export default DadosUsuario;