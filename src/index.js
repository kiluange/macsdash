import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './home';
import Sobre from './sobre';
import Minicards from './minicards';
import Domicilios from './domicilios';
import Familias from './familias';
import Individuos from './individuos';
import Visitas from './visitas';
import Header from './header';

ReactDOM.render(
    <Header/>, document.getElementById('header'));

ReactDOM.render(
    <Minicards/>, document.getElementById('minicards'));

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/domicilios" component={Domicilios} />
            <Route path="/familias" component={Familias} />
            <Route path="/individuos" component={Individuos} />
            <Route path="/visitas" component={Visitas} />
            <Route path="/sobre" component={Sobre} />
            <Route path='/*' component={null} />
        </Switch>
    </ BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
