import { RECIEVE_USERS } from "../actions/users";
import { ADD_ANSWER_USER } from "../actions/users";



export default function users (state={} , action) {
    switch (action.type){
        case RECIEVE_USERS :
            return {
                ...state , 
                ...action.users
              }
        case ADD_ANSWER_USER :
            const {authedUser, qid , answer} = action
            return {
                ...state,
                [authedUser]: {
                ...state[authedUser],
                        answers: {
                                ...state[authedUser].answers,
                                [qid]: answer 
                                    }      
                              }     
                }
        default :
            return state 
    }
}