import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Progress, Card, Image,Message,Icon } from 'semantic-ui-react'

 class QuestionDetails extends Component {
    render() {
        const optionOneVotes = this.props.question.optionOne.votes.length
        const optionTwoVotes = this.props.question.optionTwo.votes.length
        const TotalVotes = optionOneVotes + optionTwoVotes
        const qid = this.props.question.id 
        console.log (qid + "qiddddd")
        const thisQuestionID = this.props.questions[qid].id
        console.log ( "thisQuestionID ---- >   " +thisQuestionID )
        const authedUser = this.props.authedUser
        console.log("authedUser ---- >   " +authedUser)
         // const userOption = Object.values
         const authedAnswer = this.props.users[authedUser].answers[thisQuestionID]
         console.log ( "authedAnswers ---- >   " +authedAnswer )
        return (
           
          <Card >
             <Card.Content >  
                <Image src={this.props.img} floated="left" size='tiny' circular /> 
                <Card.Header>{this.props.question.author +' asks'}</Card.Header>
                <Card.Description>  
                      
                  <span> {this.props.question.optionOne.text}</span>  
                  {authedAnswer === 'optionOne' && <Message> <Icon size="big" color="blue" name ="hand point down"> </Icon> Your answer </Message>}        
                  <Progress color ="green"  percent={optionOneVotes/TotalVotes * 100 }  progress /> 

                  <span>{this.props.question.optionTwo.text}</span>
                  {authedAnswer === 'optionTwo' && <Message> <Icon size="big" color="blue" name ="hand point down"> </Icon> Your answer </Message>}
                  <Progress  color ="green"percent={optionTwoVotes/TotalVotes * 100 } progress />
                </Card.Description>   
             </Card.Content>
        </Card>        
        )
    }
}

function mapStateToProps({ authedUser ,questions , users} ,props ) {
    return {
      authedUser : authedUser ,
      questions  ,
      users
    }
  }
export default connect(mapStateToProps)(QuestionDetails)