import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {
  HeadWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style'
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
            <CSSTransition in={this.props.focused} timeout={300} classNames="slide">
              <NavSearch className={this.props.focused ? 'focused' : ''} placeholder='搜索'
                         onFocus={this.props.handleInputFocus}
                         onBlur={this.props.handleInputBlur}/>
            </CSSTransition>
            <i className={this.props.focused ? 'iconfont icon-fangdajing focused zoom' : 'iconfont icon-fangdajing zoom'}/>
            {this.getSearchList(this.props.focused, this.props.mouseIn)}
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

  getSearchList = (show, mouseIn) => {
    const pageList = [];
    const newList = this.props.list.toJS();
    for (let i = ((this.props.page - 1) * 10); i < this.props.page * 10 &&
    i < newList.length; i++) {
      pageList.push(
        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      )
    }
    if (show || mouseIn) {
      return (
        <SearchInfo onMouseEnter={this.props.handleMouseEnter}
                    onMouseLeave={this.props.handleMouseLeave}>
          <SearchInfoTitle>热门搜索
            <SearchInfoSwitch onClick={this.props.handleChangePage}>
              <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont icon-spin"/>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }
    else {
      return null;
    }
  };


}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage() {
      dispatch(actionCreators.pageChange());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);