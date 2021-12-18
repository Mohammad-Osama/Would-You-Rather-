import React, { Component } from 'react'
import { handleInitialData } from "../actions/shared"
import { connect } from 'react-redux'
import { Route , Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import ViewQuesion from './ViewQuesion'
import QuestionDetails from './QuestionDetails'
import { Grid , Container } from 'semantic-ui-react';
import NavBar from './NavBar'


class App extends Component {

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  
  render() { // login renders incase no authed user 
    return (
          this.props.authedUser
          ? <Container>
              <NavBar/>
              <Grid centered padded="vertically">
                <Routes> 
                  <Route exact path='/' element={<Home/>} />
                  <Route exact path='/ViewQuesion' element={<ViewQuesion/>} />
                  <Route exact path='/QuestionDetails' element={<QuestionDetails/>} />
               </Routes>  
            </Grid>  
           </Container>         
          : <Grid centered padded="vertically">
             <Login  />
            </Grid>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
        }
      } 

export default connect(mapStateToProps)(App)