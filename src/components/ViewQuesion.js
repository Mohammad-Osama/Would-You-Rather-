import React from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'



   function ViewQuesion() {
    const location = useLocation()
    const { status } = location.state
    console.log (status)
            if (status==="anwsered") 
                  return (
                        <div> 
                            <p>anwsered </p>
                        </div>
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


    //    export default connect(mapStateToProps)(ViewQuesion)
    export default connect()(ViewQuesion)
