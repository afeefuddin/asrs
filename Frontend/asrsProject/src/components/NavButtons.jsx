import styles from './NavButtons.module.css';
const {navbuttons} = styles;
function NavButtons(props){
    return(
        <div>
            <button className={navbuttons} onClick={props.onClick}>{props.content}</button>
        </div>
    )
}
export default NavButtons;