import { useState } from "react";
import InputBox from "../components/InputBox";

function RealDictionary(){
    const [searchbox,changesearch] = useState("")
    const [searched,setSearched] = useState(false);
    const handleButtonClick = () =>{
        setSearched(true);
    }
return(
    <>
    
     {
        !searched && 
        <InputBox onButtonClick={handleButtonClick}/>
     }   
    
    </>
);
}
export default RealDictionary;