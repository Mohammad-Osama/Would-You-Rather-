import { RECEIVE_QUESTIONS , SUBMIT_ANSWER_QUESTION  } from "../actions/questions"



export default function questions (state = {}, action) {
    switch(action.type) {
      case RECEIVE_QUESTIONS :
           
        return {
          ...state,
          ...action.questions
        }
        case SUBMIT_ANSWER_QUESTION :
           const {authedUser, qid , answer} = action.details
        return {
          ...state,
          [qid]: {
            ...state[qid],
                [answer]: {
                    ...state[qid][answer],
                     votes: state[qid][answer].votes.concat([authedUser])
                          }
                  }
                }
      default :
        return state
    }
  }