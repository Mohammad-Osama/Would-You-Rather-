import { RECIEVE_QUESTIONS  } from "../actions/tweets"



export default function questions (state = {}, action) {
    switch(action.type) {
      case RECIEVE_QUESTIONS :
        return {
          ...state,
          ...action.questions
        }
      default :
        return state
    }
  }