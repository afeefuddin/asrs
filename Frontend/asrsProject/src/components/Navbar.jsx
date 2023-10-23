import styles from './Navbar.module.css';
import Button from './Button';
import NavButtons from './NavButtons';
import Buttondivider from './Buttondivider';
const {
    navBar,
    title,navBox, middleButtons
  } = styles;
function Navbar(){
    return(
        <>
        <div>
            <div className={navBar}>
                <div className={navBox}>
                <div className={title}>ASRS</div>
                <div className={middleButtons}>
                <NavButtons content ="83% Facts"></NavButtons>
                <Buttondivider />
                <NavButtons content ="Real Dictionary"></NavButtons>
                <Buttondivider />
                <NavButtons content ="Research papers"></NavButtons>
                <Buttondivider />
                <NavButtons content ="Sarcasm 101"></NavButtons>
                </div>
                <Button content ="Let's Talk"></Button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Navbar;