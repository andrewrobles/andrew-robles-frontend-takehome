import {useState} from 'react';

import Modal from 'react-bootstrap/Modal'
import Button from '../Button/Button'

import styles from './Modal.module.css'

export default function Results() {
    const answerKey=['a1', 'b2', 'c3', 'd4', 'e4']
    const studentAnswers=['a1', '', 'c3', '', '', '']

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