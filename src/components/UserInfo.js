import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card, Image } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


 class UserInfo extends Component {
     
    render() {
        console.log( "UserInfo props " + this.props) 
        const authedUser = this.props.authedUser 
         // const { user } = this.props;
        return (
            <div>
                <Card >
                    <Card.Content compact>  
                        <Image src={this.props.users.avatarURL} floated="right" size='large' circular />

                    
                    
                        <Card.Header>{this.props.users.name +' asks'}</Card.Header>
                        <Card.Description>                          
                          <Message compact size='large'>
                                    {this.props.questions.optionOne.text }                                         
                                    </Message>
                            <Card.Meta >Or</Card.Meta>
                                   
                        </Card.Description>
                            <Link to='/ViewQuesion' state={{ status: this.props.status }} >
                                <Button  fluid  basic color='green'
                                                                  >
                                    View Poll
                                </Button>
                            </Link>
                        
                   
                    </Card.Content>
                </Card>
                    
            </div>
        )
    }
}

function mapStateToProps({ users , questions } , props ) { //props thats passed from Home
      return {
      users : users[props.author] ,   // user data from the passed author
      questions : questions[props.id] , // question data from the passed id 
      status : props.status  
    }
  }

export default connect(mapStateToProps)(UserInfo)
