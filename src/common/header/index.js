import React from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { actionCreators }  from './store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper
} from "./style";

/*class Header extends React.Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            />
                        </CSSTransition>
                        <span className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</span>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <span className="iconfont">&#xe616;</span>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}*/

// 由于该组件没有使用状态，即可以使用函数表示（优点：速度快）
const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>
                    <span className="iconfont">&#xe636;</span>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames='slide'
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        />
                    </CSSTransition>
                    <span className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</span>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writting'>
                    <span className="iconfont">&#xe616;</span>
                    写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}


/**
 * 将仓库的state映射到props(获取state)
 * @param state
 */
const mapStateToProps = (state) => {
    return {
        // 没有使用immutable
        // focused: state.header.focused
        // 使用了immutable
        focused: state.header.get('focused')
    }
}

/**
 *  将dispatch映射到props(改变state)
 * @param dispatch
 */
const mapDispatchToProps = (dispatch) => {
    return {
        // 聚焦
        handleInputFocus () {
            // const action = {
            //     type: 'search_focus'
            // }
            // dispatch(action)

            // 使用actionCreators
            dispatch(actionCreators.searchFocus())
        },
        // 离焦
        handleInputBlur () {
            // const action = {
            //     type: 'search_blur'
            // }
            // dispatch(action)

            // 使用actionCreators
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
