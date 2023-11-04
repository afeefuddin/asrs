import styles from './Navbar.module.css';
import Button from './Button';
import NavButtons from './NavButtons';
import Buttondivider from './Buttondivider';
const {
    navBar,
    title,navBox, middleButtons
  } = styles;
function AdminNav(props){
    return(
        <>
        <div>
            <div className={navBar}>
                <div className={navBox}>
                <div className={title}>ASRS</div>               
                <Button onClick={props.onClick} content ="Log Out"></Button>
                </div>
            </div>
        </div>
        </>
    );
}

export default AdminNav;