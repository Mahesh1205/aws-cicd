import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import App from './containers/app';
//import ProductDetailPage from './components/products/product-detail'
import CartContainer from './containers/cartContainer'
import ProductDetailPage from './containers/product-detail-container'
import LoginPage from './components/login/login'
import RegisterPage from './components/register/register'
import "./scss/style.scss";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

/**
 * Render App
 */
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/cart" component={CartContainer} />
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/register" component ={RegisterPage} />
                    <Route exact path="/product/:id" component={ProductDetailPage} />
            </Switch>

        </Router>
    </Provider>,
    document.getElementById('root')
);