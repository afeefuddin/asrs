import styles from './Intro.module.css';
import Button from "./Button";
import Shape from './Shape';
const { container, gridContainer, innerContainer, heading, leftContainer, rightContainer} = styles
function Intro(props) {
    return (
        <div className={container}>
            <div className={innerContainer}>
                <div className={gridContainer}>

                    <div className={leftContainer}><h1 className={heading}>The ultimate solution to all your problem</h1>
                        <div><Button onClick={props.onClick} content="Dive In"></Button></div>
                    </div>
                    <div className={rightContainer}>
                       <Shape />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Intro;