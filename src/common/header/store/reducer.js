import * as constants from './constants'

import { fromJS } from 'immutable'

// fromJS将一个js对象转化成immutable对象
const defaultState = fromJS({
    focused: false,
    list: []
})

export default (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        return state.set('focused', true)
    }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false)
    }
    if (action.type === constants.CHANGE_LIST) {
        return state.set('list', action.data)
    }
    return state
}
