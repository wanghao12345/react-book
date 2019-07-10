import { createStore, compose, applyMiddleware } from 'redux'
// dispatch一个action之后，到达reducer之前，进行一些额外的操作，就需要用到middleware.
import thunk from 'redux-thunk'
import reducer from './reducer'

// redux调试工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
))

export default store