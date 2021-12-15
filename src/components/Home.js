import React, { Component } from 'react'
import { Tab } from 'semantic-ui-react'
import UserInfo from './UserInfo'
const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    
  ]
class Home extends Component {
     /*render nav bar   */
    /*render home view - tab with answered + unanswered
                props for each tab 
                 all in grid ? */
                     
    render() {

        
        return (
                
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />  
              



          
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



export default Home
