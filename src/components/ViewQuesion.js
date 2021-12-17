import React  , {useState} from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Button, Card, Image, Radio ,Label, Input } from 'semantic-ui-react'
import { Message } from 'semantic-ui-react'
import { Form, Checkbox } from 'semantic-ui-react'




   function ViewQuesion() {
    
    const [option, setOption] = React.useState();
    const handleChange = e => {
      const target = e.target;
      if (target.checked) {
        setOption(target.value);
      }
    };
    const handleSubmit = e => {
      e.preventDefault();
      console.log(option);
    };
  
    const location = useLocation()
    const { status , CurrentQuestion , img } = location.state
    console.log (status + CurrentQuestion.id + img )
    console.log (location.state)
    
    
    // onsubmit function  ? 
    // console.log (this.props )
    if (status==="anwsered") 
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
