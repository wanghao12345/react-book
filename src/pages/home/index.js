import React from 'react'
import List from './components/List'
import Recommend from './components/Recommend'
import Banner from './components/Banner'
import Topic from './components/Topic'
import Writer from './components/Writer'

import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'
class Home extends React.Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="//upload.jianshu.io/admin_banners/web_images/4679/5570c9de5caff87a2ae4509d2b61d936fa974816.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner"/>
                    <Banner />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home
