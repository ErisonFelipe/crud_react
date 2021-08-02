import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainUsuario from './pages/usuario/main';
import DetalhesUsuarios from './pages/usuario/detalhes';
import CriarUsuario from './pages/usuario/criar';
import EditarUsuario from './pages/usuario/editar';
import DeletarUsuario from './pages/usuario/deletar';

const Routes = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/usuarios" component={MainUsuario} />
            <Route path='/usuarios/:id' component={DetalhesUsuarios} />
            <Route path='/criarUsuarios' component={CriarUsuario} />
            <Route path='/editarUsuarios/:id' component={EditarUsuario} />
            <Route path='/deletarUsuarios/:id' component={DeletarUsuario} />
        </Switch>
    </BrowserRouter>
}

export default Routes;