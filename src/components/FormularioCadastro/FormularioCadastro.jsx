import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { FormControlLabel, FormGroup, Switch } from '@material-ui/core';



function FormularioCadastro({aoEnviar, validarCPF}) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:''}})
    return (
        <form onSubmit={(event => {
            event.preventDefault();
            aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        })}>
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value)
                }}
                id="nome"
                label="Nome" variant="outlined"
                fullWidth margin='normal'
            />
            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value)
                }}

                id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin='normal' />

            <TextField
                value={cpf}
                error={!erros.cpf.valido}
                helperText= {erros.cpf.texto}

                onBlur={(event)=>{
                    const ehValido = validarCPF(cpf)
                    setErros({cpf: ehValido})
                }}


                onChange={(event) => {
                    setCpf(event.target.value)
                }}
                id="cpf"
                label="CPF" variant="outlined" fullWidth margin='normal'/>



            <FormGroup>
                <FormControlLabel control={
                    <Switch onChange={(event) => {
                        setPromocoes(event.target.checked)
                    }}
                    checked={promocoes}
                         color='primary' />} label="Promocoes" />
                <FormControlLabel control={<Switch 
                onChange={(event) => {
                        setNovidades(event.target.checked) 
                }}
                
                 checked={novidades}  color='primary' />} label="Novidades" />
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
