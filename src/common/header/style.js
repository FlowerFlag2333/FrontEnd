import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeadWrapper = styled.div`
  height:58px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a`
  height:58px;
  position:absolute;
  top:0;
  left:0;
  display: block;
  width:100px;
  background:url(${logoPic});
  background-size: contain;
`;
export const Nav = styled.div`
 width: 960px;
 margin: 0 auto;
 height: 100%;
 padding-right:70px;
 box-sizing: border-box;
`;
export const NavItem = styled.div`
  line-height: 58px;
  padding:0 15px;
  font-size:17px;
  color: #333333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696
  }
  &.active{
    color:#ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  position:relative;
  float:left;
  .zoom{
    position: absolute;
    right: 5px;
    bottom: 5px;
    width:30px;
    line-height:30px;
    border-radius: 15px;
    text-align: center;
    &.focused{
      background: #777;
      color:#fff;
    }
  }  
`;
export const SearchInfo = styled.div`
  position:absolute;
  left:0;
  top:58px;
  width: 240px;
  padding:0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  .icon-spin{
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition:all 200ms ease-in;
    transform:rotate(0deg);
    transform-origin: center center;
  }
`;
export const SearchInfoItem =styled.a`
  display: block;
  float: left;
  line-height: 20px;
  margin-bottom: 15px;
  margin-right: 10px;
  font-size: 12px;
  padding: 0 5px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 5px;
`;
export const SearchInfoList = styled.div`
  overflow: hidden;
`;
export const NavSearch = styled.input`
  width:140px;
  height:38px;
  border:none;
  outline:none;
  border-radius: 19px;
  background:#eee;
  margin-top: 9px;
  margin-left:0;
  padding: 0 35px 0 20px;
  color:#666;
  font-size:14px;
  &::placeholder{
   color:#999;
  }
  &.focused{
    width: 200px;
  }
  &.slide-enter{
    transition: all 300ms ease-out;  
  }
  &.slide-enter-active{
    width: 200px;
  }
  &.slide-exit-active{
    width: 160px;
  }
  &.slide-exit{
    transition: all 300ms ease-in; 
  }
`;
export const Addition = styled.div`
  position:absolute;
  right: 0;
  height:58px;
  top:0;
`;
export const Button = styled.button`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin-top: 9px;
  border:1px solid #ec6149;
  margin-right: 20px;
  padding:0 20px;
  font-size:14px; 
  &.reg{
    color:#ec6149;
    background: white;
  }
  &.write{
    color:#fff;
    background: #ec6149;
  }
`;


