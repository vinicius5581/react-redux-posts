import { combineReducers } from 'redux';
import { GET_POSTS, SET_SORTING } from '../actions';

function makeObj (items) {
  const newObj = {};
  for (const item of items) {
    newObj[item.id] = item;
  }
  return newObj;
}

const receivePosts = (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, ...makeObj(action.posts) };
    default:
      return state;
  }
};

const sorting = (state = {}, action) => {
  switch (action.type) {
    case SET_SORTING:
      return { ...state, ...action.sortBy };
    default:
      return state;
  }
};

export default combineReducers({
  receivePosts,
  sorting
});
