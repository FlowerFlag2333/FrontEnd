import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS: {
      //immutable 对象的set方法，会结合之前immutable的值和设置的值，返回一个
      //返回一个全新的对象
      return state.set('focused', true);
    }
    case actionTypes.SEARCH_BLUR: {
      return state.set('focused', false);
    }
    case actionTypes.CHANGE_LIST: {
      return state.set('list', action.data).set('totalPage', action.totalPage);
    }
    case actionTypes.MOUSE_ENTER:{
      return state.set('mouseIn',true);
    }
    case actionTypes.MOUSE_LEAVE:{
      return state.set('mouseIn',false);
    }
    case actionTypes.PAGE_CHANGE:{
      return state.set('page',state.get('page')%state.get('totalPage')+1);
    }
    default: {
      return state;
    }
  }

}
