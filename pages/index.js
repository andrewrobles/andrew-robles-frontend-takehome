import { useState } from 'react'

import quizQuestionData from '../data';

export default function Home() {

  // Keep track of question index
  const [state, setState] = useState({
    'questionIndex': 0
  })

  const nextQuestion = () => {
    
    // Out of bounds check
    if (state['questionIndex'] + 1 < quizQuestionData.length) {

      // Go to next question
      setState({
        'questionIndex': state['questionIndex'] + 1
      })

    }
  }

  return (
    <div>
        
        <Question 
          quizQuestionData={quizQuestionData}
          questionIndex={state.questionIndex}
        />
        <button onClick={nextQuestion}>Next Question</button>
    </div>
  )
}

function Question(props) {
  return <p>{ props.quizQuestionData[props.questionIndex].question }</p>
}
