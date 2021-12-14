import React, { useState } from 'react';
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material';


function DadosEntrega({aoEnviar}) {
  const [cep, setCep] = useState("")
  const [endereco, setEndereco] = useState("")
  const [numero, setNumero] = useState("")
  const [estado, setEstado] = useState("")
  const [cidade, setCidade] = useState("")
  return (
    <form onSubmit={
      (event) => {
        event.preventDefault()
        aoEnviar({ cep, endereco, numero, estado, cidade })
      }
    }>
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value)
        }}
        id="cep"
        label="CEP"
        type={'number'}
        variant='outlined'
        margin='normal'
      />
      <TextField
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value)
        }}
        id="Endereco"
        label="Endereco"
        type={'text'}
        margin='normal'
        variant='outlined'
        fullWidth
      />
      <TextField
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value)
        }}
        id="numero"
        label="Número"
        type={'number'}
        margin='normal'
        variant='outlined'

      />
      <TextField
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value)
        }}
        id="cidade"
        label="Cidade"
        type={'text'}
        margin='normal'
        variant='outlined'

      />

      <TextField
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value)
        }}
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