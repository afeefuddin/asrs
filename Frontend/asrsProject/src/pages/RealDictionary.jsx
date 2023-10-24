import { useState } from "react";
import InputBox from "../components/InputBox";
import Navbar from "../components/Navbar";
import styles from "./RealDictionary.module.css"
const { searchboxStyle } = styles;
function RealDictionary(){
    const [searchbox,changesearch] = useState("")
    const [searched,setSearched] = useState(false);
    const handleButtonClick = () =>{
        setSearched(true);

    }
    const handleSearchvalue=(newvalue)=>{
        changesearch(newvalue)
    }
if(!searched){
    return (
        <>
           <Navbar />
           <InputBox onButtonClick={handleButtonClick} onChange={handleSearchvalue}/>
              
       
       </>
    )
}

return(
    <>
    <h1>ASRS</h1>
    <div className="flex justify-center items-center h-16">
    <input className={searchboxStyle} value={searchbox} />
    </div>
    </>
);
}
export default RealDictionary;