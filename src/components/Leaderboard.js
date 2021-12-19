import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Progress, Card, Image, Message ,Header , Radio ,Label, Input } from 'semantic-ui-react'


 class Leaderboard extends Component {
    render() {
        console.log (this.props)
        return (
            <Card >
            <Card.Content compact>  
                
               <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png"  floated ="right" size='tiny' circular /> 
               <Card.Header>header 
                        </Card.Header>
                        
                   <Card.Description>
                    <Header size = "huge"> Score : </Header>     <Label size = "huge"  pointing = "right" color="olive "> 45 </Label>            
                                       
                    <Progress  progress />
                        
                    <Progress  progress />
                   </Card.Description>   
            </Card.Content>
       </Card>
        )
    }
}

function mapStateToProps({ users }) {
	    
    const NewData = Object.values(users).map( (user) => {
        const ScoreAnswer =  Object.values(user.answers).length
        const ScoreQuestion = user.questions.length
        const totalScore  = ScoreAnswer + ScoreQuestion
        return {
            id: user.id ,
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
