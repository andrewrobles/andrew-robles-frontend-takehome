import styles from './Button.module.css'

export default function Button(props) {
  return <button className={`btn btn-primary border-0 ${styles.button}`} onClick={props.onClick}>
        {props.buttonText}
  </button>
}