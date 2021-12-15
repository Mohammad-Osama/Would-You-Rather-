import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card , Button  } from 'react-bootstrap'



 class UserInfo extends Component {
     
    render() {
        console.log( "UserInfo props " + this.props) 
        const authedUser = this.props.authedUser 
        return (
            <div>
                <Card >
                    <Card.Img style={{ height: 100, width: 100 }} variant="right" src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
                    <Card.Body>
                        <Card.Title>{this.props.users.name +' asks'}</Card.Title>
                        <Card.Text>
                            this.props.body
                        </Card.Text>
                        <Button variant="primary" >
                                Go somewhere
                         </Button>
                        
                    </Card.Body>
                </Card>
                    
            </div>
        )
    }
}

function mapStateToProps({ users , authedUser  }) {
      return {
      users : users[authedUser]
    }
  }

export default connect(mapStateToProps)(UserInfo)
