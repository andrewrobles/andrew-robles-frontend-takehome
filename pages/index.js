import { useState } from 'react'

import quizQuestionData from '../data';

export default function Home() {
  // Keep track of question index
  const [state, setState] = useState({
    'questionIndex': 0
  })

  return (
    <div>
        <Question 
          quizQuestionData={quizQuestionData}
          questionIndex={state.questionIndex}
        />
        <Control 
          state={state}
          setState={setState}
          quizQuestionData={quizQuestionData}
        />
    </div>
  )
}

function Question(props) {
  const text = props.quizQuestionData[props.questionIndex]
  const options = props.quizQuestionData[props.questionIndex].options

  return <div>
    <p>{ text.question }</p>
    <ul>
        {options.map(currOption => <li>{currOption.name}</li>)}
    </ul>
    <br/>
  </div>
}

function Control(props) {
  const nextQuestion = () => {

    // Out of bounds check
    if (props.state['questionIndex'] + 1 < props.quizQuestionData.length) {

      // Go to next question
      props.setState({
        'questionIndex': props.state['questionIndex'] + 1
      })

    }
  }

  return <button onClick={nextQuestion}>Next Question</button>
}
