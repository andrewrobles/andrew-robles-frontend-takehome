import styles from './Control.module.css'
import Results from '../../components/Modal/Modal'

export default function Control(props) {
  const startButtonText = 'Start Quiz'
  const takingButtonText = 'Next Question'
  const endButtonText = 'Start Over'

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
    calculateScore(props.answerKey, props.state.studentAnswers)

    // Go to quiz start 
    props.setState({
      'questionIndex': -1,
      'quizQuestionData': props.state.quizQuestionData,
      'studentAnswers': Array(props.state.quizQuestionData.length).fill(-1)
    })
  }

  // -1 index signifies quiz has not started 
  if (props.state['questionIndex'] == -1) {
      return <></>
  }

  // Out of bounds check
  if (props.state['questionIndex'] + 1 < props.quizQuestionData.length) {

    // Taking quiz button
    return <Button
      onClick={props.nextQuestion} 
      buttonText={takingButtonText}
    />
  } else {
    // End quiz button
    return <Results 
      answerKey={props.answerKey}
      studentAnswers={props.state.studentAnswers}
      onClick={startOver}
    />
  }

}

function Button(props) {
  return <button className={`btn btn-primary ${styles.button}`} onClick={props.onClick}>{props.buttonText}</button>
}