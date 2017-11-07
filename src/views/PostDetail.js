import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostDetail extends Component {
  render () {
    return [<p key='1'>PostDetail</p>, <p key='2'>This is the home page</p>]
  }
}

const mapStateToProps = state => ({
  posts: state.getPosts
})

export default connect(mapStateToProps)(PostDetail)
