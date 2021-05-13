import { useState } from 'react'

import quizQuestionData from '../quizQuestionData';

const quizTitle='C# Programming Language Quiz'
const quizDescription='A quiz on the basics of C#! Test your knowledge of the first chapter of the Precursor Course.'
const estimatedTime='30 minutes'
const difficultyLevel='6'

export default function Home() {
  // Keep track of question index
  const [state, setState] = useState({
    'questionIndex': -1,
    'quizQuestionData': quizQuestionData
  })

  return (
    <div>
        <Status
          questionIndex={state.questionIndex}
          quizLength={quizQuestionData.length}
        />
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
            quizTitle={quizTitle}
            quizDescription={quizDescription}
            estimatedTime={estimatedTime}
            difficultyLevel={difficultyLevel}
          />
  } else {
    return <>
      <Question 
        quizQuestionData={props.quizQuestionData}
        questionIndex={props.questionIndex}
      />
    </>
  }
}

function Cover(props) {
  return <div>
    <p>{props.quizTitle}</p>
    <p>{props.quizDescription}</p>
    <ul>
      <li>Est. Time: {props.estimatedTime}</li>
      <li>Difficulty level: {props.difficultyLevel}</li>
    </ul>
  </div>
}

function Header(props) {
  return <div>
    <p>{props.quizDescription}</p>
  </div>
}

function Question(props) {
  const text = props.quizQuestionData[props.questionIndex]
  const options = props.quizQuestionData[props.questionIndex].options

  return <div>
    <Header
      quizTitle={quizTitle}
      quizDescription={quizDescription}
    />
    <p>{ text.question }</p>
    <ul>
        {options.map(currOption => <Option id={currOption.id} name={currOption.name}/>)}
    </ul>
    <br/>
  </div>
}

function Option(props) {
  return <>
    <input type="radio" id={props.id} name="quiz" value={props.id}/>
    <label for={props.id}>{props.name}</label>
    <br/>
  </>
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

function Status(props) {
  const keys = [...Array(props.quizLength).keys()]
  if (props.questionIndex >=0 ) {
    // Add one to zero indexed question number
    return <>{keys.map(currKey => currKey == props.questionIndex ? <b>{currKey + 1}</b>:currKey + 1)}</>
  } else return <></>
}