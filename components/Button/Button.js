import styles from './Button.module.css'

export default function Button(props) {
  return <button className={`btn btn-primary ${styles.button}`} onClick={props.onClick}>
        {props.buttonText}
  </button>
}