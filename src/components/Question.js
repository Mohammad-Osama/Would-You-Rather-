import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'



 class Question extends Component {
    render() {
        return (
            <div>
                <Card >
                    <Card.Img style={{ height: 160, width: 240 }} variant="left" src={this.props.users.avatarURL} />
                    <Card.Body>
                        <Card.Title>'this.props.title'</Card.Title>
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

function mapStateToProps ({users}) {  
    return {
      users,
        }   
  }
export default connect(mapStateToProps) (Question)
