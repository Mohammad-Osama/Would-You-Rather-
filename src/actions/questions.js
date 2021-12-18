export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function recieveQuestions(questions) {
    return {    
      type: RECEIVE_QUESTIONS,
      questions
    };
  }

export const SUBMIT_ANSWER_QUESTION = 'SUBMIT_ANSWER_QUESTION'

export function submitAnswerQuestion( authedUser, qid , answer ) {
    return {
      type: SUBMIT_ANSWER_QUESTION,
      authedUser,
      qid,
      answer
    }
}