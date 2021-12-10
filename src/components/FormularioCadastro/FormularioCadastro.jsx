import React from 'react';
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'



function FormularioCadastro() {

    return (
        
           
            <form>
                <label>Nome</label>
                <input type="text" />
                <label>Sobrenome</label>
                <input type="text" />
                <label>CPF</label>
                <input type="text" />
                <label>Promocões</label>
                <input type="checkbox" />
                <label>Novidades</label>
                <input type="checkbox" />

               <Button variant="contained" color="secondary" >
                 Cadastrar
               </Button>
               
               
            </form>
)

    
}



export default FormularioCadastro
