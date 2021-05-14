import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import quizQuestionData from '../quizQuestionData';

const quizTitle='C# Programming Language Quiz'
const quizDescription='A quiz on the basics of C#! Test your knowledge of the first chapter of the Precursor Course.'
const estimatedTime='30 minutes'
const difficultyLevel='6'
const answerKey=['a1', 'b2', 'c3', 'd4', 'e4']

export default function Home() {
  const [state, setState] = useState({
    // -1 indicates quiz has not started
    'questionIndex': -1,
    'quizQuestionData': quizQuestionData,
    // -1 indicates question has not yet been answered
    'studentAnswers': Array(quizQuestionData.length).fill(-1)
  })

  const selectQuestionOption = (questionIndex, optionId) => {
    // studentAnswers maps to question and value maps to answer
    const studentAnswers = state.studentAnswers

    studentAnswers[questionIndex] = optionId

    setState({
      'questionIndex': state.questionIndex,
      'quizQuestionData': state.quizQuestionData,
      'studentAnswers': state.studentAnswers
    })
  }

  return (
    <div className={`container`}>
        <div className={`card mt-5`}>
          <div className={`card-body`}>
            <Status
                questionIndex={state.questionIndex}
                quizLength={quizQuestionData.length}
            />
            <Content
              quizQuestionData={quizQuestionData}
              questionIndex={state.questionIndex}
              selectQuestionOption={selectQuestionOption}
            />
            <Control 
              state={state}
              setState={setState}
              quizQuestionData={quizQuestionData}
            />
          </div>
        </div>
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
        selectQuestionOption={props.selectQuestionOption}
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
        {options.map(currOption => <Option 
          optionId={currOption.id} 
          name={currOption.name}
          questionIndex={props.questionIndex}
          selectQuestionOption={props.selectQuestionOption}
        />)}
    </ul>
    <br/>
  </div>
}

function Option(props) {
  const selectRadioButton = () => {
    // Record answer in question state
    props.selectQuestionOption(props.questionIndex, props.optionId)
  }
  return <>
    <input 
      type="radio" 
      id={props.optionId} 
      name="quiz" 
      value={props.optionId} 
      onClick={selectRadioButton}
      key={props.questionIndex}
    />
    <label for={props.optionId}>{props.name}</label>
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
        'questionIndex': props.state['questionIndex'] + 1,
        'quizQuestionData': props.state.quizQuestionData,
        'studentAnswers': props.state.studentAnswers
      })

    }
  }

  const calculateScore = (answerKey, studentAnswers) => {
    var score = 0
    var i = 0
    for (i = 0; i < answerKey.length; i++) {
      if (answerKey[i]==studentAnswers[i]) {
        score += 1
      }
    }
    console.log('Quiz score: ' + score.toString() + ' out of ' + answerKey.length.toString())
    console.log('Student answers: ' + studentAnswers.toString())
    console.log('Answer key: ' + answerKey.toString())
  }

  const startOver = () => {
    calculateScore(answerKey, props.state.studentAnswers)

    // Go to quiz start 
    props.setState({
      'questionIndex': -1,
      'quizQuestionData': props.state.quizQuestionData,
      'studentAnswers': Array(props.state.quizQuestionData.length).fill(-1)
    })
  }

  // -1 index signifies quiz has not started 
  if (props.state['questionIndex'] == -1) {
      return <Button
        onClick={nextQuestion}
        buttonText={startButtonText}
      />
  }

  // Out of bounds check
  if (props.state['questionIndex'] + 1 < props.quizQuestionData.length) {

    // Taking quiz button
    return <Button
      onClick={nextQuestion} 
      buttonText={takingButtonText}
    />
  } else {
    // End quiz button
    return <Button
      onClick={startOver}
      buttonText={endButtonText}
    />
  }

}

function Button(props) {
  return <button className={`btn btn-primary`} onClick={props.onClick}>{props.buttonText}</button>
}

function Status(props) {
  const keys = [...Array(props.quizLength).keys()]
  if (props.questionIndex >=0 ) {
    // Add one to zero indexed question number
    return <>{keys.map(currKey => currKey == props.questionIndex ? <b>{currKey + 1}</b>:currKey + 1)}</>
  } else return <></>
}