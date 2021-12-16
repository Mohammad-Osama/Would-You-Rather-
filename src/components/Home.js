import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import UserInfo from './UserInfo'
import { connect } from 'react-redux'



const panes = (answeredQuestions)=> { 
    const passedData = answeredQuestions
    return [
            { menuItem: 'Answered Questions', render: () => 
                <Tab.Pane>
                    {passedData.map((x)=>
                        (  <UserInfo  author = {x.author} />   )       )  }   
                </Tab.Pane> },

            { menuItem: 'Un Answered Questions', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    
  ] }
class Home extends Component {
     /*render nav bar   */
    /*render home view - tab with answered + unanswered
                props for each tab 
                 all in grid ? */
                     
    render() { 
        const answeredQuestions= this.props.answeredQuestions       
        return (    
                        
            <Tab menu={{ secondary: true, pointing: true }} panes={panes(answeredQuestions)} />    
        )
    }
}

function mapStateToProps ({users , authedUser , questions }) { 
    
    const answeredId = Object.keys(users[authedUser].answers) 
    const answeredQuestions = Object.values(questions).filter(
                                    (question) => !answeredId.includes(question.id))
                                    .sort((a, b) => b.timestamp - a.timestamp)
    return {
        answeredQuestions : answeredQuestions,
        users ,
        authedUser
  }
}



export default connect(mapStateToProps)(Home)
