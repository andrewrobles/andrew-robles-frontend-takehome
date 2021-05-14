import {useState} from 'react';

import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from '../Button/Button'

import styles from './Modal.module.css'

export default function Results() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
  
    return (
      <>
        <Button onClick={handleShow} buttonText={"Start over"}/>

        <Modal show={show} onHide={handleClose}>

          <Modal.Header>
            <Modal.Title>Quiz results</Modal.Title>
          </Modal.Header>

          <Modal.Body>
              Here are your quiz results:
          </Modal.Body>
        
          <Modal.Footer>
            <Button onClick={handleClose} buttonText={'Close'}/>
          </Modal.Footer>

        </Modal>
      </>
    );
  
}