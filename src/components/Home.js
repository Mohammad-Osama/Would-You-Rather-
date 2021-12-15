import React, { Component } from 'react'
import { Tabs , Tab } from 'react-bootstrap'
import UserInfo from './UserInfo'

class Home extends Component {
     /*render nav bar   */
    /*render home view - tab with answered + unanswered
                props for each tab 
                 all in grid ? */
    render() {
        return (
           
                
                <Tabs
                        defaultActiveKey="home"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                        fill
                         
                        >
                        <Tab eventKey="home" title="Answered">
                            

                            <UserInfo />
                        </Tab>
                        <Tab eventKey="profile" title="UnAnswered">
                            
                        </Tab>
                        
                    </Tabs>



          
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
