import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Menu , Image} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'



 class NavBar extends Component {
    logOut = () => {
        // e.preventDefault() 
        this.props.dispatch(setAuthedUser(null))          
    } 
    

    render() {
       // const { activeItem } = this.state
        const { authedUser, users } = this.props;
        return (
                <Menu  >
                    <Menu.Item
                    name='Home'
                    as={Link} exact to="/" 
                    >
                    Home
                    </Menu.Item>

                    <Menu.Item
                    name='New Question'
                    as={Link} exact to="/NewQuestion"
                    
                    >
                    New Question
                    </Menu.Item>
                    <Menu.Item
                    name='Leaderboard'
                    as={Link} exact to="/Leaderboard"
                    
                    >
                    Leaderboard
                    </Menu.Item>

                    <Menu.Menu position='right'>
                    <Menu.Item
                        
                    >
                        <Image
                  src={users[authedUser].avatarURL}
                  avatar
                
                />
                        {users[authedUser].name}
                    </Menu.Item>

                    <Menu.Item
                        name='Log out'
                        
                        onClick={this.logOut}
                    >
                        Log out
                    </Menu.Item>
                    </Menu.Menu>
                </Menu>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    return {
      authedUser,
      users
    }
  }

export default connect(mapStateToProps) (NavBar)