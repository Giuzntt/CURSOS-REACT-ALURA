import React, { useEffect, useState } from 'react'
import ListaCategorias from '../components/ListaCategorias'
import '../assets/css/blog.css'
import ListaPost from '../components/ListaPost'
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import { busca } from '../api/api'
import SubCategoria from '../paginas/SubCategorias'

const Categoria = () => {
    const {id} = useParams()
    const {url, path} = useRouteMatch()
    const [subcategorias, setSubCategorias] = useState([])

    useEffect(()=>{
        busca(`/categorias/${id}`, (categoria)=>{
            setSubCategorias(categoria.subcategorias)
        })
    }, [id])
    return(
        <>
        <div className="container">
            <h2 className="titulo-pagina">Pet Notícias</h2>
        </div>

        <ListaCategorias/>
        {
                subcategorias.map((subcategoria)=>(
                      <ul className="lista-categorias container flex">
                         <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}  key={subcategoria}>
                             <Link to={`${url}/${subcategoria}`}>
                                 {subcategoria}
                             </Link>
                        </li>
                      </ul>
                ))
  
        }
        <Switch>

        <Route exact path={`${path}/`}>
            <ListaPost url={`/posts?categoria=${id}`}/>
        </Route>
        <Route path={`${path}/:subcategoria`}>
            <SubCategoria/>
        </Route>
        </Switch>
        


        
        </>
    )
}

export default Categoria