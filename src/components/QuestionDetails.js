import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Progress, Card, Image, Radio ,Label, Input } from 'semantic-ui-react'

 class QuestionDetails extends Component {
    render() {
        const optionOneVotes = this.props.question.optionOne.votes.length
        const optionTwoVotes = this.props.question.optionTwo.votes.length
        const TotalVotes = optionOneVotes + optionTwoVotes
        return (
           
                <Card >
             <Card.Content compact>  
                <Image src={this.props.img} floated="left" size='tiny' circular /> 
                <Card.Header>{this.props.question.author +' asks'}</Card.Header>
                    <Card.Description>     
                    <span>{this.props.question.optionOne.text}</span>                     
                     <Progress percent={optionOneVotes/TotalVotes * 100 } progress />
                     <span>{this.props.question.optionTwo.text}</span>
                     <Progress percent={optionTwoVotes/TotalVotes * 100 } progress />
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