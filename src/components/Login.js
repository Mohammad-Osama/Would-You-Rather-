import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
    state = {
        user: null,
    }

    

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
         }

    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.user) {
            this.props.setAuthedUser(this.state)
        }  
    }   
    



    render() {
        return (
            <div>
                <h2>Welcome To Would You Rather App !</h2>
                <h4>Please Sign In To Continue</h4>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Control as="select" size="lg" name="user" onChange={this.onChange} >
                            {Object.values(this.props.users).map(user =>
                            (
                                <option key={user.id} value={user.id}>
                                        {user.name}
                                </option>
                            ))}
                        </Form.Control>
                        <Button type="submit">Login</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

function mapStateToProps ({users}) {  
    return {
      users,
        }   
  }

export default connect(mapStateToProps , { setAuthedUser })(Login)
