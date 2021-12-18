import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input ,Button , Container , Header} from 'semantic-ui-react'
import { saveNewQuestion } from '../actions/shared'
import authedUser from '../reducers/authedUser'






 class NewQuestion extends Component {

    state = {
        optionOneText :  '' ,
        optionTwoText :  ''

            }

            handleChange = (e)=>{
                e.preventDefault()  
                this.setState( { [e.target.id] : e.target.value } )
                console.log (this.state)

            }

    handleSubmit = (e)=>{
        e.preventDefault()
        const {optionOneText , optionTwoText } = this.state
        const {authedUser} = this.props
        this.props.dispatch(saveNewQuestion(optionOneText , optionTwoText, authedUser))

    }







    render() {
        return (
           
                <Form onSubmit={this.handleSubmit}>
                     <Header size='huge' color = "teal" >Would You Rather !</Header>
                    <Form.Field required>
                        <label>Option One</label>
                        <input placeholder='Option One'  value={this.state.optionOneText}
                                                         onChange={this.handleChange} 
                                                         id = "optionOneText"
                                                                                       />
                    </Form.Field>
                    <Form.Field required>
                        <label>Option Two</label>
                        <input placeholder='Option Two' value={this.state.optionTwoText}
                                                         onChange={this.handleChange} 
                                                         id = "optionTwoText"                />
                    </Form.Field>
                    
                    <Button type='submit'>Save Question</Button>
                </Form>
           
        )
    }
}


function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
  }


export default connect(mapStateToProps)(NewQuestion)