import { useNavigate } from 'react-router-dom';

import styles from './Navbar.module.css';
import Button from './Button';
import NavButtons from './NavButtons';
import Buttondivider from './Buttondivider';
import ASRSlogo from "../assets/ASRSlogo.png"

const {
    navBar,
    logo,navBox, middleButtons,logoImage,rightButton
  } = styles;
function Navbar(){
    const navigate = useNavigate();
    return(
        <>
        <div>
            <div className={navBar}>
                <div className={navBox}>
                <div className={`flex items-center ml-8 ${logo}`}
                  onClick={()=>{
                    navigate('/');
                }}><img src={ASRSlogo} alt="" className={logoImage} /></div>
                <div className={middleButtons}>
                <NavButtons onClick={()=>{
                    navigate('/facts')
                }} content ="83% Facts"></NavButtons>

                <Buttondivider />

                <NavButtons content ="Real Dictionary" onClick={()=>{
                    navigate('/realdictionary')
                }} ></NavButtons>

                <Buttondivider />

                <NavButtons content ="Research papers"
                 onClick={()=>{
                    navigate('/research/papers')
                }}
                 ></NavButtons>
                </div >
                <div className={rightButton}>
                <Button content ="Let's Talk"></Button>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Navbar;