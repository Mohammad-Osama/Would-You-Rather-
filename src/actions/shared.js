import { getInitialData } from "../utils/api";
import { recieveUsers } from "./users";
import { recieveQuestions } from "./questions";
import { showLoading , hideLoading } from "react-redux-loading";
import { addAnswerUser } from "./users";
import { submitAnswerQuestion } from "./questions";
import { saveQuestionAnswer } from '../utils/api';
import { saveQuestion } from "../utils/api";
import { addQuestionUser } from "./users";
import { addQuestion } from "./questions";


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

  export function saveNewQuestion(optionOneText , optionTwoText, author) {
    return (dispatch) => {
      return saveQuestion({ optionOneText , optionTwoText, author }).then(
        question => {
          dispatch(addQuestion(question));
          dispatch(addQuestionUser(question));
        }
      );
    };
  }








