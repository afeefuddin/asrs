import styles from './Button.module.css'

const {button} = styles;
function Button(props){
    return(
        <div>
            <button className={button} onClick={props.onClick}>{props.content}</button>
        </div>
    )
}
export default Button;