import React from 'react'

import {
    TopicWrapper,
    TopicItem
} from '../style'

class Topic extends React.Component {
    render() {
        return (
            <TopicWrapper>
                <TopicItem>
                    <img className='topic-pic' src="" alt=""/>
                    社会热点
                </TopicItem>
            </TopicWrapper>
        )
    }
}

export default Topic
