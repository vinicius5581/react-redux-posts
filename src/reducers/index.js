import { combineReducers } from 'redux'
import { GET_POSTS, SET_SORTING } from '../actions'

const reducerTest = (state = {}) => state

const receivePosts = (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, ...action.posts }
    default:
      return state
  }
}

const sorting = (state = {}, action) => {
  switch (action.type) {
    case SET_SORTING:
      return { ...state, ...action.sortBy }
    default:
      return state
  }
}

export default combineReducers({
  reducerTest,
  receivePosts,
  sorting
})
