import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card, Image, Header } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'




class UserInfo extends Component {

    render() {
        //console.log("UserInfo props " + this.props)
        const authedUser = this.props.authedUser
        const { id } = this.props.questions
        //console.log("neeee ------ >  " + id)
        // const { user } = this.props;
        return (
            <div>
                <Card >
                    <Card.Content >
                        <Image src={this.props.users.avatarURL} floated="right" size='large' circular />



                        <Card.Header>{this.props.users.name + ' asks'}</Card.Header>
                        <Card.Description>
                            <Message compact size='large'>
                                {this.props.questions.optionOne.text}
                            </Message>
                            <Header size="small"> Or  </Header>

                        </Card.Description>
                        <Link to={`/questions/${id}`} state={{
                            status: this.props.status,
                            CurrentQuestion: this.props.questions,
                            img: this.props.users.avatarURL
                        }} >
                            <Button fluid basic color='blue'
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

function mapStateToProps({ users, questions }, props) { //props thats passed from Home
    return {
        users: users[props.author],   // user data from the passed author
        questions: questions[props.id], // question data from the passed id 
        status: props.status
    }
}

export default connect(mapStateToProps)(UserInfo)
