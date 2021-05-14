import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './index.module.css'

import quizQuestionData from '../quizQuestionData'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import Control from '../components/Control/Control'

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

  const nextQuestion = () => {

    // Out of bounds check
    if (state['questionIndex'] + 1 < state.quizQuestionData.length) {

      // Go to next question
      setState({
        'questionIndex': state['questionIndex'] + 1,
        'quizQuestionData': state.quizQuestionData,
        'studentAnswers': state.studentAnswers
      })

    }
  }

  return (
    <div className={`${styles.index}`}>
        <Navbar/>
      <div className={`container`}>
          <div className={`mt-5`}>
            <Header 
              quizTitle={quizTitle}
              quizDescription={quizDescription}
              questionIndex={state.questionIndex}
            />
          </div>
          <div className={`card`}>
            <div className={`card-body`}>
              <Status
                  questionIndex={state.questionIndex}
                  quizLength={quizQuestionData.length}
              />
              <Content
                quizTitle={quizTitle}
                quizDescription={quizDescription}
                quizQuestionData={quizQuestionData}
                questionIndex={state.questionIndex}
                selectQuestionOption={selectQuestionOption}
                estimatedTime={estimatedTime}
                difficultyLevel={difficultyLevel}
                nextQuestion={nextQuestion}
              />
              <div className={`pt-5`}>

              </div>
              <Control 
                state={state}
                setState={setState}
                quizQuestionData={quizQuestionData}
                nextQuestion={nextQuestion}
                answerKey={answerKey}
              />
            </div>
          </div>
      </div>
    </div>
  )
}



function Status(props) {
  const keys = [...Array(props.quizLength).keys()]
  if (props.questionIndex >=0 ) {
    // Add one to zero indexed question number
    return <>{keys.map(currKey => currKey == props.questionIndex ? <b>{currKey + 1}</b>:currKey + 1)}</>
  } else return <></>
}