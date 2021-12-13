import React from 'react';
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material';


function DadosEntrega() {
    return (
        <form>
            <TextField
              id="cep"
              label="CEP"
              type={'number'}
              variant='outlined'
              margin='normal'
            />
            <TextField
              id="Endereco"
              label="Endereco"
              type={'text'}  
              margin='normal'
              variant='outlined'
               fullWidth
            />
            <TextField
              id="numero"
              label="Número"
              type={'number'}  
              margin='normal'
              variant='outlined'
                
            />
          <TextField
                id="cidade"
                label="Cidade"
                type={'text'}
                margin='normal'
                variant='outlined'
                
            />
            <TextField
                id="estado"
                label="Estado"
                type={'text'}
                margin='normal'
                variant='outlined'
                
            />
            < Button variant="contained"
                type='submit'
                color="primary"
                fullWidth >
                Finalizar Cadastro

            </Button>
        </form>
    )
}

export default DadosEntrega;