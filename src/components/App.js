import React, { Component } from 'react'
import { handleInitialData } from "../actions/shared"
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  
  render() { // login redeners incase no authed user 
    return (
          this.props.authedUser
          ? <Route exact path='/' component={Home} />            
          : <Login />
    )
  }
}

export default connect()(App)