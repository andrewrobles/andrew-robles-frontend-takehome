import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Header.module.css'

export default function Header(props) {
    return (
        <div className={`mb-3`}>
            <h1 className={`${styles.quizTitle}`}>{props.quizTitle}</h1>
            {
                props.questionIndex >= 0 ?
                <p className={`${styles.quizDescription}`}>{props.quizDescription}</p> :
                <></>
            }
        </div>
    )
}