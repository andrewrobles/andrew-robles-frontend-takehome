import { useState } from 'react'

import quizQuestionData from '../data';

const quizDescription='A quiz on the basics of C#! Test your knowledge of the first chapter of the Precursor Course.'
const estimatedTime='30 minutes'
const difficultyLevel='6'

export default function Home() {
  // Keep track of question index
  const [state, setState] = useState({
    'questionIndex': -1 
  })

  return (
    <div>
        <Content
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

function Content(props) {
  if (props.questionIndex == -1) {
    return <Cover
            quizDescription={quizDescription}
            estimatedTime={estimatedTime}
            difficultyLevel={difficultyLevel}
          />
  } else {
     return <Question 
            quizQuestionData={props.quizQuestionData}
            questionIndex={props.questionIndex}
     />
  }
}

function Cover(props) {
  return <div>
    <p>{props.quizDescription}</p>
    <ul>
      <li>Est. Time: {props.estimatedTime}</li>
      <li>Difficulty level: {props.difficultyLevel}</li>
    </ul>
  </div>
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
  const startButtonText = 'Start Quiz'
  const takingButtonText = 'Next Question'
  const endButtonText = 'Start Over'

  const nextQuestion = () => {

    // Out of bounds check
    if (props.state['questionIndex'] + 1 < props.quizQuestionData.length) {

      // Go to next question
      props.setState({
        'questionIndex': props.state['questionIndex'] + 1
      })

    }
  }

  const startOver = () => {
    // Go to quiz start 
    props.setState({
      'questionIndex': -1 
    })
  }

  // -1 index signifies quiz has not started 
  if (props.state['questionIndex'] == -1) {
      return <button onClick={nextQuestion}>{startButtonText}</button>
  }

  // Out of bounds check
  if (props.state['questionIndex'] + 1 < props.quizQuestionData.length) {

    // Taking quiz button
    return <button onClick={nextQuestion}>{takingButtonText}</button>
  } else {
    // End quiz button
    return <button onClick={startOver}>{endButtonText}</button>
  }

}