import React  , {useState} from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Button, Card, Image, Radio ,Label, Input } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'
import { Form, Checkbox } from 'semantic-ui-react'
import { handleQuestionAnswer } from '../actions/shared'
import { useHistory } from "react-router-dom";
import QuestionDetails from './QuestionDetails'
import useForceUpdate from 'use-force-update';




   function ViewQuesion(props) {
    const location = useLocation()
    const [option, setOption] = React.useState();
    const [status, setstatus] = React.useState(location.state.status);
    const handleChange = e => {
      const target = e.target;
      if (target.checked) {
        setOption(target.value);
      }
    };
    const handleSubmit = e => {
      e.preventDefault();
      console.log(option);
      if (option) {
       // const authedUser  = props.authedUser
       // const {input} = option
        props.dispatch(handleQuestionAnswer(props.authedUser , CurrentQuestion.id , option )) 
        setstatus("anwsered")
        
      }
     
    };
  
    
    const {  CurrentQuestion , img } = location.state
     //let status = location.state.status
    console.log ( 'status-->' +  status + " id  " +  CurrentQuestion.id + img )
    console.log ( "location state " +location.state.status)
    const question= location.state.CurrentQuestion
    console.log (CurrentQuestion)
    console.log (question)
    console.log (status)
    
    //const authedUser= this.props
   //console.log (authedUser)
    
    
    // onsubmit function  ? 
    // console.log (this.props )
    if (status==="unanwsered") 
            return (
            
            <Card >
             <Card.Content compact>  
                <Image src={img} floated="left" size='tiny' circular /> 
                <Card.Header>{CurrentQuestion.author +' asks'}</Card.Header>
                    <Card.Description>                          
                        <Form onSubmit={handleSubmit}>
                            <div>
                                <Label>
                                <Input type="radio" value="optionOne" checked={option == 'optionOne'} 
                                        onChange={handleChange} />
                                <span>{CurrentQuestion.optionOne.text}</span>
                                </Label>
                                <Label>
                                <Input type="radio" value="optionTwo" checked={option == 'optionTwo'} 
                                        onChange={handleChange} />
                                <span>{CurrentQuestion.optionTwo.text}</span>
                                </Label>
                            </div>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Card.Description>   
             </Card.Content>
        </Card>

                )
    if (status==="anwsered") 
    return (

          <QuestionDetails question ={CurrentQuestion} 
                            img = {img}
          
                                                                  />

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
   function mapStateToProps({ authedUser } ) {
    return {
      authedUser : authedUser 
    }
  }
       export default connect(mapStateToProps )(ViewQuesion)
   // export default connect()(ViewQuesion)
