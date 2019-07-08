import React from 'react';
import { GlobalStyled } from "./style";
import { GlobalIconfontStyled } from "./statics/iconfont/iconfont.js";
import Header from './common/header/index'

class App extends React.Component {
    render() {
        return (
            <div>
                <GlobalStyled />
                <GlobalIconfontStyled />
                <Header />


            </div>
        )
    }
}

export default App;
