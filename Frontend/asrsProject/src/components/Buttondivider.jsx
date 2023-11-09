import styles from './Buttondivider.module.css';
const {divider} = styles;
function Buttondivider(){
    return(
        <div className={`ml-2 mr-2 ${divider}`}>
        </div>
    )
}
export default Buttondivider