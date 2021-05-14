import {useState} from 'react';

import Modal from 'react-bootstrap/Modal'
import Button from '../Button/Button'

import styles from './Modal.module.css'
import quizQuestionData from '../../quizQuestionData'

export default function Results(props) {
    const answerKey=props.answerKey
    const studentAnswers=props.studentAnswers

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

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
        console.log(getResults(answerKey, studentAnswers))
        return score
    }

    const results = getResults(answerKey, studentAnswers)
    const studentScore = calculateScore(answerKey, studentAnswers).toString()
    const maxScore = answerKey.length.toString()
  
    return (
      <>
        <Button onClick={handleShow} buttonText={"Start over"}/>

        <Modal show={show} onHide={handleClose}>

          <Modal.Header>
            <Modal.Title>Quiz results</Modal.Title>
          </Modal.Header>

          <Modal.Body>
              <p>{'You got ' + studentScore + ' out of ' + maxScore + ' questions correct'}</p>
              {
                results.map(
                  
                  currResult => (
                    <div className={`alert ` + `${currResult.isCorrect ? "alert-success": "alert-danger"}`}>
                      <p>
                        {'Question: ' + currResult.question}
                      </p>
                      <p>
                        {'You answered: ' + currResult.studentAnswer}
                      </p>
                      <p>
                        {currResult.isCorrect ? 
                          'Correct!': 
                          'Incorrect! the correct answer was ' + currResult.actualAnswer
                        }
                      </p>
                    </div>
                  )
                )
              }

          </Modal.Body>
        
          <Modal.Footer>
            <Button onClick={props.onClick} buttonText={'Close'}/>
          </Modal.Footer>

        </Modal>
      </>
    );
}

const getResults = (answerKey, studentAnswers) => {
  const results = [] 

  for (var i = 0; i < answerKey.length; i++) {
   const studentAnswerId = studentAnswers[i]
   const actualAnswerId = answerKey[i]

   const currResult = {
    question: getQuestion(i, quizQuestionData),
    studentAnswer:getAnswer(i, studentAnswerId, quizQuestionData),
    actualAnswer:getAnswer(i, actualAnswerId, quizQuestionData),
    isCorrect:answerKey[i]===studentAnswers[i]
   }

   results.push(currResult)
  }

  return results
}

const getQuestion = (questionIndex, quizQuestionData) => {
  return quizQuestionData[questionIndex].question
}

const getAnswer = (questionIndex, questionId, quizQuestionData) => {
  const currQuestion = quizQuestionData[questionIndex]

  if (questionId != -1) {
    const optionIndex = parseInt(questionId[1], 10) - 1
    return currQuestion.options[optionIndex].name
  } else {
    return ''
  }
}