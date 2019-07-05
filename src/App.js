import React from 'react';
import { GlobalStyled } from "./style";
import Header from './common/header/index.js'

class App extends React.Component {
    render() {
        return (
            <div>
                <GlobalStyled />
                <Header />


            </div>
        )
    }
}

export default App;
