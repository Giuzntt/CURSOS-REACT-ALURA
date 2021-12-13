import React from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'


function DadosUsuario() {
    return(
        <form>
            <TextField
              id="email"
              label="email"
              type={'email'}
              variant='outlined'
              fullWidth
              margin='normal'
            />
            <TextField
              id="password"
              label="senha"
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