import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Progress, Card, Image, Grid , Message ,Header , Radio ,Label, Input, GridColumn } from 'semantic-ui-react'


 class Leaderboard extends Component {
    render() {
        console.log (this.props)
        return (
            <Grid centered verticalAlign = "top">  
                <Grid.Column>
                    {this.props.NewData.map((user) =>
                
                        <Card >
                            <Card.Content >  
                                
                                <Image src={user.avatarURL}  floated ="right" size='tiny' circular /> 
                                <Card.Header>
                                    {user.name}
                                </Card.Header>
                                            
                                    <Card.Description>
                                        <Header size = "huge"> Score : </Header>     
                                        <Label size = "huge"  pointing = "right" color="olive ">
                                            {user.totalScore}            
                                        </Label>            
                                                        
                                        <Message>Answered Questions  <Label  size = "big">{user.ScoreAnswer}</Label></Message>
                                            
                                        <Message>Created Questions    <Label  size = "big">{user.ScoreQuestion}</Label></Message>
                                    </Card.Description>   
                            </Card.Content>
                        </Card>
            )}
            </Grid.Column>
       </Grid>
        )
    }
}

function mapStateToProps({ users }) {
	    
    const NewData = Object.values(users).map( (user) => {
        const ScoreAnswer =  Object.values(user.answers).length
        const ScoreQuestion = user.questions.length
        const totalScore  = ScoreAnswer + ScoreQuestion
        return {
            name: user.name,
            avatarURL: user.avatarURL,
            ScoreAnswer: ScoreAnswer,
            ScoreQuestion: ScoreQuestion,
            totalScore: totalScore 
        }

    }
    
     ).sort((a, b) => a.totalScore - b.totalScore)



	return {
		NewData 
	};
}

export default connect(mapStateToProps)(Leaderboard)
