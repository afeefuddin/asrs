import { useEffect, useState,useRef } from "react";
import InputBox from "../components/InputBox";
import Navbar from "../components/Navbar";
import styles from "./RealDictionary.module.css"
import ASRSlogo from "../assets/ASRSlogo.png"
import seach from "../assets/search.png"
import Loader from "../components/Loader";
const { searchboxStyle,logoImage,borderbox,seachlogo } = styles;
function RealDictionary(){
    const [searchbox,changesearch] = useState("")
    const [searched,setSearched] = useState(false);
    const [meaning,setMeaning] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const [wrongWord,setWrongWord] = useState(false);
    const handleButtonClick = () =>{
        setSearched(true);

    }
    const handleSearchvalue=(newvalue)=>{
        changesearch(newvalue)
    }
    const fetchAPI = async()=>{
        if(searchbox===''){
            return;
        }
        if(isLoading==false){
            return;
        }
        try{
        const res = await fetch(`https://asrs.vercel.app/dictionary/${searchbox}`);
        if (res.status === 404) {
            setMeaning({"1": "Oh Come on this is not a word"});
            setWrongWord(true);
          } else{
        const val = await res.json();
        console.log("done")
        setMeaning(val);
        console.log(meaning)
          }
        setIsLoading(false);
        }
        catch(error){
            console.log(error);
            setMeaning({"1":"Oh Cmmon this is not a word"})
        }
    }
    const first = useRef(true);
    useEffect(()=>{
        console.log(first.current)
        if(first.current==false){
            fetchAPI();
            return;

        }
        first.current=false
},[searched,isLoading]);
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
    <div className="flex items-center justify-center mt-8 mb-4">    
        <img src={ASRSlogo} alt="" srcset=""  className={logoImage} />
    </div>
    <div className="flex justify-center items-center h-16 ">
        <div className={borderbox}>
    <input className={searchboxStyle} value={searchbox} onChange={(e)=> {
        changesearch(e.target.value);

    }} />
    <div className={seachlogo} onClick={()=>{
        setIsLoading(true);
    }} >
    <img src={seach} alt="" className="h-5" />
    </div>
    </div>
    </div>
    <div className="flex justify-center items-center h-3/4 ">
    {isLoading &&  <Loader />}
    <div className="m-10 overflow-y-scroll w-fit">
  {!isLoading && !wrongWord &&
    Object.keys(meaning).map((key) => (
      <div
        key={key}
        className= " mt-4 w-full min-w-max p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl  tracking-tight  text-gray-700 dark:text-gray-400">
          Real Meaning
        </h5>
        <p className="text-2xl font-bold text-gray-900 dark:text-white">
          {meaning[key]}
        </p>
      </div>
    ))}
    {!isLoading && wrongWord && <div className="text-white text-2xl">{meaning["1"]}</div>}
</div>

    </div>
    </>
);
}
export default RealDictionary;