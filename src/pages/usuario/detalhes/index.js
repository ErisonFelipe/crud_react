import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default class Usuarios extends Component {
    state = {
        usuario: {}
    };

    componentDidMount(){
        const {id} = this.props.match.params;
        fetch(`http://localhost:3030/pets/usuarios/${id}`)
        .then(usuario =>
            usuario.json().then(usuario => this.setState({usuario}))
            )
    }
    render(){
        const {usuario} = this.state;

        return(
            
            <div className="usuario-info">
                <h1>{usuario.name}</h1> 
                 <h1>{usuario.email}</h1>
                <br/>
              <Link to={'/usuarios'}>Usuarios</Link><br/>
              <Link to={`/editarUsuario/${usuario.id}`}>Editar</Link><br/>
              <Link to={`/deletarUsuario/${usuario.id}`}>Deletar</Link>
              </div>
        )
    }
}