import React, { Component } from 'react'

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
                            <Sonnet />
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            <Sonnet />
                        </Tab>
                        <Tab eventKey="contact" title="Contact" disabled>
                            <Sonnet />
                        </Tab>
                    </Tabs>



            </div>
        )
    }
}


export default Home
