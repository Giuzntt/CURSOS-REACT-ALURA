import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {  FormControlLabel, FormGroup, Switch } from '@material-ui/core';



function FormularioCadastro() {
    let nome ="";
    return (
    <form onSubmit={(event=>{
        event.preventDefault();
        console.log(nome);
    })}>
        <TextField
            value={nome}
            onChange={(event) =>{
                    nome = event.target.value
                    if (nome.length > 3) {
                        nome = nome.substr(0,3)
                    }

            }}
                id="outlined-basic"
                label="Nome" variant="outlined"
                fullWidth margin='normal'
            />
            <TextField id="outlined-basic" label="Sobrenome" variant="outlined" fullWidth margin='normal' />
            <TextField id="outlined-basic" label="CPF" variant="outlined" fullWidth margin='normal' />

         

            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked  color='primary'/>} label="Promocoes" />
                <FormControlLabel control={<Switch defaultChecked color='primary'/>} label="Novidades" />
            </FormGroup>
         


            

            < Button variant="contained"
                type='submit'
                color="primary"
                fullWidth >
                Cadastrar
                
            </Button>
                   


        </form>
    )


}



export default FormularioCadastro
