import { fromJS } from 'immutable'

// fromJS将一个js对象转化成immutable对象
const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '社会热点'
    }, {
        id: 2,
        title: '手绘'
    }]
})

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
