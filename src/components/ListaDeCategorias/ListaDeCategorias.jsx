import React, { Component } from 'react';
import "../ListaDeCategorias/estilo.css"
class ListaDeCategorias extends Component {
    render() { 
        return (
        <section>
                <section className="lista-categorias">
                    <ul className="lista-categorias_lista">
                        <li className="lista-categorias_item">Categoria</li>
                        <li className="lista-categorias_item">Categoria</li>
                        <li className="lista-categorias_item">Categoria</li>
                    </ul>
                    <input
                        type="text"
                        className="lista-categorias_input"
                        placeholder="Adicionar Categoria"
                      
                    />
                </section>
        </section>
        );
    }
}
 
export default ListaDeCategorias;