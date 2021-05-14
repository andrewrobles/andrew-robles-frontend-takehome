import Button from '../Button/Button'

import styles from './Content.module.css'

export default function Content(props) {
  if (props.questionIndex == -1) {
    return <div className={`${styles.cover}`}>
        <Cover
            quizTitle={props.quizTitle}
            quizDescription={props.quizDescription}
            estimatedTime={props.estimatedTime}
            difficultyLevel={props.difficultyLevel}
            nextQuestion={props.nextQuestion}
        />
    </div>
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
    <p className={`${styles.description}`}>{props.quizDescription}</p>
    
    <p className={`${styles.description}`}>
        Est. Time: <span className={`${styles.highlight}`}>{props.estimatedTime}</span>
    </p>
    <p className={`${styles.description}`}>
        Difficulty level: <span className={`${styles.highlight}`}>{props.difficultyLevel}</span>
    </p>
    <div className={`mt-4`}>
        <Button onClick={props.nextQuestion} buttonText={'Start Quiz'}/>
    </div>
  </div>
}

function Question(props) {
  const text = props.quizQuestionData[props.questionIndex]
  const options = props.quizQuestionData[props.questionIndex].options

  return <div className={`form-check`}>
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
      className={`form-check-input`}
      type="radio" 
      id={props.optionId} 
      name="quiz" 
      value={props.optionId} 
      onClick={selectRadioButton}
      key={props.questionIndex}
    />
    <label className={`form-check-label`} for={props.optionId}>{props.name}</label>
    <br/>
  </>
}