import React from 'react'

// swiper资源
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import {
    BannerWrapper
} from '../style'

class Banner extends React.Component {

    componentDidMount() {
        new Swiper('.swiper-container', {
            autoPlay: true,
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }

    render() {
        return (
            <BannerWrapper>
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">1</div>
                        <div className="swiper-slide">2</div>
                        <div className="swiper-slide">3</div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </BannerWrapper>
        )
    }


}

export default Banner

