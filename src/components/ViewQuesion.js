import React from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Button, Card, Image, PlaceholderImage } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'



   function ViewQuesion() {
    const location = useLocation()
    const { status , CurrentQuestion , img } = location.state
    console.log (status + CurrentQuestion.id + img )
    console.log (location.state)
    // console.log (this.props )
            if (status==="anwsered") 
                  return (
                 
                    <Card >
                    <Card.Content compact>  
                        <Image src={img} floated="left" size='small' circular />

                    
                    
                        <Card.Header>{CurrentQuestion.author +' asks'}</Card.Header>
                        <Card.Description>                          
                          <Message compact size='large'>
                                    {CurrentQuestion.optionOne.text }                                         
                                    </Message>
                            <Card.Meta >Or</Card.Meta>
                                   
                        </Card.Description>
                           
                                <Button  fluid  basic color='green'
                                                                  >
                                   submit ur answer 
                                </Button>
                          
                        
                   
                    </Card.Content>
                </Card>

                            )
            if (status==="unanwsered") 
            return (
                    <div> 
                        <p>unanwsered </p>
                    </div>
                        )
}

     //   function mapStateToProps({ users , questions } , props ) { //props thats passed from Home
      //      return {
      //      users : users[props.author] ,   // user data from the passed author
      //      questions : questions[props.id] ,
       //     status : props.state  // question data from the passed id 
      //  }
      //  }

   //   function mapStateToProps({ users , questions } ,CurrentQuestion) { //props thats passed from Home
         // const q = state.questions
         //const newuser = Object.values(users).filter( 
         //        (x)=>CurrentQuestion.author===x.id  ) 
     //    const currentId = CurrentQuestion.author
     //    const userId = Object.keys(users[currentId])
     //   return {
        //    CurrentUser : userId

          // user data from the passed author
      //  questions : questions[props.id] , // question data from the passed id 
       // status : props.status  
     // }
   // }
     //   export default connect(mapStateToProps )(ViewQuesion)
    export default connect()(ViewQuesion)
