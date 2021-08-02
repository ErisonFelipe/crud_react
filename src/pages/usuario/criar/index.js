import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './index.css';

class CriarUsuario extends Component {
    constructor(props){
        super(props);

        this.state = {
            usuario: {
                name: "",
                email: "",
                password: ""
            },

            redirect: false
        }
    }
    render(){
        const {redirect} = this.state;
        if(redirect){
            return <Redirect to="/usuarios"/>
        }else {
            return (
                <form onSubmit = {this.handleSubmit}>
                    <fieldset>
                        <legend>Criar Usuario</legend>
                        <div className="usuario-insert">
                            <label htmlFor="nome">Nome</label>
                            <br/>
                            <input type="text" id="name" name="name" placeholder="digite seu nome..." minLength="3" maxLength="100" required value={this.state.usuario.name} onChange={this.handleInputChange}/>
                        </div>
                        <div className="usuario-insert">
                            <label htmlFor="email">Email</label>
                            <br/>
                            <input type="email" id="email" name="email" placeholder="digite seu email..." minLength="3" maxLength="100" required value={this.state.usuario.email} onChange={this.handleInputChange}/>
                        </div>
                        <div className="usuario-insert">
                            <label htmlFor="password">Senha</label>
                            <br/>
                            <input type="text" id="password" name="password" placeholder="digite sua senha..." minLength="6" maxLength="100" required value={this.state.usuario.password} onChange={this.handleInputChange}/>
                        </div>
                        <button type='submit'>Cadastrar</button>
                    </fieldset>
                </form>
            )
        }
        
        }
        handleInputChange = event => {
            const target = event.target;
            const name = target.name;
            const value = target.value;

            this.setState(prevState => ({
                usuario: {...prevState.usuario, [name]: value}
            }));
        }
        handleSubmit = event =>{
            fetch('http://localhost:3030/pets/usuarios', {
                method: 'post',
                body: JSON.stringify(this.state.usuario),
                headers:{
                    "Content-Type": "application/json"
                }
            }).then(data =>{
                if(data.ok){
                    this.setState({redirect: true})
                }
            })
            event.preventDefault();
    }
}

export default CriarUsuario;