import * as constants from './constants'

import { fromJS } from 'immutable'

// fromJS将一个js对象转化成immutable对象
const defaultState = fromJS({
    focused: false
})

export default (state = defaultState, action) => {

    if (action.type === constants.SEARCH_FOCUS) {
        // 没有使用immutable
        // return {
        //     focused: true
        // }

        // 使用了immutable
        // immutable对象的set方法，会结合之前的immutable对象的值
        // 和设置的值，返回一个全新的对象
        return state.set('focused', true)
    }

    if (action.type === constants.SEARCH_BLUR) {
        // 没有使用immutable
        // return {
        //     focused: false
        // }

        // 使用了immutable
        return state.set('focused', false)
    }

    return state
}
