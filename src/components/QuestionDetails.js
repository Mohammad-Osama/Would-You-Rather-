import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card, Image, Radio ,Label, Input } from 'semantic-ui-react'

 class QuestionDetails extends Component {
    render() {
        
        return (
           
                <Card >
             <Card.Content compact>  
                <Image src={this.props.img} floated="left" size='tiny' circular /> 
                <Card.Header>{this.props.question.author +' asks'}</Card.Header>
                    <Card.Description>                          
                        
                    </Card.Description>   
             </Card.Content>
        </Card>
        
        )
    }
}

function mapStateToProps({ authedUser } ,props ) {
    return {
      authedUser : authedUser 
    }
  }
export default connect(mapStateToProps)(QuestionDetails)