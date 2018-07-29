import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {HeadWrapper, Logo, Nav, NavItem, NavSearch,
        Addition, Button, SearchWrapper} from './style'
import * as actionCreators from "./store/actionCreators";

class Header extends Component {


  render() {
    return (
      <HeadWrapper>
        <Logo href='/'/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载APP</NavItem>
          <NavItem className='right'>登陆</NavItem>
          <NavItem className='right'>
            <i className="iconfont icon-Aa"/>
          </NavItem>
          <SearchWrapper>
            <CSSTransition in={this.props.focused} timeout={200} classNames="slide">
              <NavSearch className={this.props.focused ? 'focused' : ''} placeholder='搜索'
                         onFocus={this.props.handleInputFocus}
                         onBlur={this.props.handleInputBlur}/>
            </CSSTransition>
            <i className={this.props.focused ? 'iconfont icon-fangdajing focused' : 'iconfont icon-fangdajing'}/>
          </SearchWrapper>
          <Addition>
            <Button className='write'>
              <i className="iconfont icon-icon-checkin"/>
              写文章
            </Button>
            <Button className='reg'>注册</Button>
          </Addition>
        </Nav>
      </HeadWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus: function () {
      const action = {
        type: actionCreators.searchFocus()
      };
      dispatch(action);
    },
    handleInputBlur() {
      const action = {
        type: actionCreators.searchBlur()
      };
      dispatch(action);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);