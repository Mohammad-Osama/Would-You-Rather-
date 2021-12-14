import React, { Component } from 'react'
import { Tabs , Tab } from 'react-bootstrap'
import Question from './Question'

class Home extends Component {
    render() {
        return (
            <div>
                home {/*render nav bar  */}
                    {/*render home view - tab with answered + unanswered
                                props for each tab 
                                 all in grid ? */}
                <Tabs
                        defaultActiveKey="home"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                        >
                        <Tab eventKey="home" title="Home">
                            <Question />
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            <Question />
                        </Tab>
                        <Tab eventKey="contact" title="Contact" disabled>
                            <Question />
                        </Tab>
                    </Tabs>



            </div>
        )
    }
}


export default Home
