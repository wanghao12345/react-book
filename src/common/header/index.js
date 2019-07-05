import React from 'react'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button
} from "./style";

class Header extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <NavSearch />
                </Nav>
                <Addition>
                    <Button>注册</Button>
                    <Button>写文章</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header
