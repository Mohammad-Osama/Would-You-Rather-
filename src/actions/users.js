export const RECIEVE_USERS = "RECIEVE_USERS"
export function recieveUsers (users) {
    return {
        type : RECIEVE_USERS , 
        users ,
    }
}

export const ADD_ANSWER_USER = 'ADD_ANSWER_USER';

export function addAnswerUser( authedUser, qid , answer ) {
    return {
      type: ADD_ANSWER_USER,                     
        authedUser,
        qid,
        answer
    }
  }

  export const ADD_QUESTION_USER = 'ADD_QUESTION_USER'

  export function addQuestionUser( id , author ) {
    return {
      type: ADD_QUESTION_USER,
        addaction :{                     
           id  ,
           author}
    }
  }







