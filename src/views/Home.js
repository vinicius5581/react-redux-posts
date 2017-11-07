import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render () {
    return [<p key='1'>Home</p>, <p key='2'>This is the home page</p>]
  }
}

const mapStateToProps = state => ({
  posts: state.getPosts
})

export default connect(mapStateToProps)(Home)
