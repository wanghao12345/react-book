import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom'

import { GlobalStyled } from "./style.js";
import { GlobalIconfontStyled } from "./statics/iconfont/iconfont.js";
import Header from './common/header/index'
import Home from './pages/home'
import Detail from './pages/detail'
// redux
import { Provider } from 'react-redux'
import store from './store'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <GlobalStyled />
                <GlobalIconfontStyled />
                <Header />
                <BrowserRouter>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/detail' exact component={Detail}></Route>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;
