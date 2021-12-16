import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import UserInfo from './UserInfo'
import { connect } from 'react-redux'



const panes = (answeredQuestions,unansweredQuestions)=> { 
    const passedData1 = answeredQuestions
    const passedData2 = unansweredQuestions
    return [
            { menuItem: 'Answered Questions', render: () => //rendeing Userinfo for each answered question
                <Tab.Pane> 
                    {passedData1.map((x)=> // author prop passed to render the right Userinfo
                        (  <UserInfo  author = {x.author}
                                      //  text = {x.optionOne.text} 
                                      id  = {x.id}  
                                      status = "anwsered"                     
                                                                    />   )       )  }   
                </Tab.Pane> },

            { menuItem: 'Un Answered Questions', render: () => //rendeing Userinfo for each unanswered question
                <Tab.Pane>
                     {passedData2.map((x)=>
                        (  <UserInfo  author = {x.author} 
                                      id  = {x.id} 
                                      status = "unanwsered"
                                                />   )       )  } 
                </Tab.Pane> },
    
  ] }
class Home extends Component {
     /*render nav bar   */
    /*render home view - tab with answered + unanswered
                props for each tab 
                 all in grid ? */
                     
    render() { 
        const answeredQuestions= this.props.answeredQuestions 
        const unansweredQuestions = this.props.unansweredQuestions      
        return ( // passing down answered and unanswered props to the panes 
                        
            <Tab menu={{ secondary: true, pointing: true }} panes={panes(answeredQuestions,unansweredQuestions)} />    
        )
    }
}

function mapStateToProps ({users , authedUser , questions }) { 
    
    const answeredId = Object.keys(users[authedUser].answers)  // ids of the answered questions 
    const answeredQuestions = Object.values(questions).filter( //filtering questions that matches answered questions 
                                    (question) => answeredId.includes(question.id))
                                    .sort((a, b) => b.timestamp - a.timestamp)

    const unansweredQuestions = Object.values(questions).filter( //filtering questions that doesnt match answered questions
                                    (question) => !answeredId.includes(question.id))
                                    .sort((a, b) => b.timestamp - a.timestamp)                                
    return {
        answeredQuestions : answeredQuestions,
        unansweredQuestions : unansweredQuestions ,
        users ,
        authedUser
  }
}



export default connect(mapStateToProps)(Home)
