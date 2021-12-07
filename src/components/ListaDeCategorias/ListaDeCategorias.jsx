import React, { Component } from 'react';
import "../ListaDeCategorias/estilo.css"
class ListaDeCategorias extends Component {
    render() { 
        return (
        <section>
            <ul>
                <li>Categorias</li>
                <li>Categorias</li>
                <li>Categorias</li>
            </ul>
            <input type="text" placeholder="Adicione a categoria"/>
        </section>
        );
    }
}
 
export default ListaDeCategorias;