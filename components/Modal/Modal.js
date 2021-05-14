import {useState} from 'react';

import Modal from 'react-bootstrap/Modal'
import Button from '../Button/Button'

import styles from './Modal.module.css'
import quizQuestionData from '../../quizQuestionData'

export default function Results() {
    const answerKey=['a1', 'b2', 'c3', 'd4', 'e4']
    const studentAnswers=['a1', -1, 'c3', -1, -1, -1]

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

        return score
    }

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
          </Modal.Body>
        
          <Modal.Footer>
            <Button onClick={handleClose} buttonText={'Close'}/>
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

  details.question = currQuestion.question

  if (questionId != -1) {
    const optionIndex = parseInt(questionId[1], 10) - 1
    return currQuestion.options[optionIndex].name
  } else {
    return ''
  }
}