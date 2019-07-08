import React from 'react';
import { GlobalStyled } from "./style.js";
import { GlobalIconfontStyled } from "./statics/iconfont/iconfont.js";
import Header from './common/header/index'

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
            </Provider>
        )
    }
}

export default App;
