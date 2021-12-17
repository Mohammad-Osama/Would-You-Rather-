import { getInitialData } from "../utils/api";
import { recieveUsers } from "./users";
import { recieveQuestions } from "./questions";
import { showLoading , hideLoading } from "react-redux-loading";
import { addAnswerUser } from "./users";
import { submitAnswerQuestion } from "./questions";
import { saveQuestionAnswer } from '../utils/api';



export function handleInitialData (){
    return (dispatch)=>{
        
        dispatch(showLoading())

        return getInitialData()  
        .then( ({users , questions})=>{
            dispatch(recieveUsers(users))
            dispatch(recieveQuestions(questions))

            dispatch(hideLoading())
        })
    }
}


export function handleQuestionAnswer( authedUser, qid , answer ) {
                return (dispatch)=>{
                    dispatch(addAnswerUser( authedUser, qid , answer ))
                    dispatch(submitAnswerQuestion( authedUser, qid , answer ))            
                return saveQuestionAnswer( authedUser, qid , answer )
                }
  }