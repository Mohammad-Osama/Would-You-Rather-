import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input ,Button , Container , Header} from 'semantic-ui-react'






 class NewQuestion extends Component {
    render() {
        return (
           
                <Form>
                     <Header size='huge' color = "teal" >Would You Rather !</Header>
                    <Form.Field required>
                        <label>First Name</label>
                        <input placeholder='First Name' />
                    </Form.Field>
                    <Form.Field required>
                        <label>Last Name</label>
                        <input placeholder='Last Name' />
                    </Form.Field>
                    
                    <Button type='submit'>Save Question</Button>
                </Form>
            
        )
    }
}





export default connect()(NewQuestion)